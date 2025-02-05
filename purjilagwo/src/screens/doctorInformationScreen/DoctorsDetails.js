import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TabScrollButton, Typography, Avatar, AccordionSummary, AccordionDetails, Accordion, Tooltip, Stack } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CallIcon from '@mui/icons-material/Call';
import { Checkmark } from "@carbon/icons-react";
import { useSnackbar } from 'notistack';

import "../../components/style/InputBox.css"
import CustomeButton, { CustomizedButton } from '../../components/Button';
import DataNotFound from '../../components/DataNotFound';
import Loading from '../../components/Loading';
import DoctorService from '../../services/Doctor.services';
import MobileAppBanner from '../../components/MobileAppBanner';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';
import BackdropLoading from '../../components/BackdropLoading';
// import { doctorDetails } from '../dummyData/DummyData';
import OtpBox from '../../components/OtpBox';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pr: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Doctor() {
  const [doctorData, setDoctorData] = useState(null); // uncomment this and remove the dummy data
  const [timeSlots, setTimeSlots] = useState([]);
  const [dateString, setDateString] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentDate = new Date();
  const [openSlot, setopenSlot] = useState(false);
  const [details, setDetails] = useState({}); // useState for the details that we passing in the dialog box

  const [expanded, setExpanded] = React.useState(false);
  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const { id } = useParams();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //this is for converting as date object into array

  useEffect(() => {
    if (doctorData !== null && doctorData.timeSlots !== null) {
      const array = Object.keys(doctorData.timeSlots);
      setDateString(array);
      const updatedTimeSlots = array.map(date => new Date(date));
      setTimeSlots(updatedTimeSlots);
    }
  }, [doctorData, setDateString]);

  //This is for setting the current date as active

  useEffect(() => {
    if (doctorData !== null && doctorData.timeSlots !== null) {
      for (let index = 0; index < timeSlots.length; index++) {
        if (timeSlots[index].getDate() === currentDate.getDate()) {
          setValue(index);
        }
      }
    }

  }, [timeSlots])

  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);
        try {
          // setDoctorData(doctorDetails)
          const response = await DoctorService.DoctorInformation(id);
          debugger;
          if (response !== undefined) {
            setDoctorData(response); // uncomment this

          }
          //setDoctorData(data); // comment this
        } catch (error) {
          console.error(`Error fetching doctor information: ${error.message}`);
        }
      }
      setLoading(false);

      // Add any logic here that needs to use the ID
      // For example, you can fetch data based on the ID
    })();
  }, [id]);

  const handleLeft = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  }

  const handleRight = () => {
    if (doctorData !== null && doctorData.timeSlots != null) {
      if (value < timeSlots.length - 1) {
        setValue(value + 1);
      }
    }

  }

  function countSlot(i) {
    let count = 0;
    if (doctorData !== null && dateString[i] in doctorData.timeSlots) {
      for (let index = 0; index < doctorData.timeSlots[dateString[i]].length; index++) {
        if (doctorData.timeSlots[dateString[i]][index].isAvailable) {
          count++;
        }
        if (index === doctorData.timeSlots[dateString[i]].length - 1) {
          if (doctorData.timeSlots[dateString[i]][index].isAvailable) {
            count++;
          }
        }
      }
    }
    return count;
  }

  const handleSlotOpen = (name, address, time, date, fee) => {
    setopenSlot(true);
    const det = {
      name: name,
      address: address,
      time: time,
      date: date,
      fee: fee
    }
    setDetails(det);
  }
  const formatDays = (daysString) => {
    if (!daysString) return "";

    const days = daysString.split(",");
    const firstDay = days[0].charAt(0).toUpperCase() + days[0].slice(1);
    const lastDay = days[days.length - 1].charAt(0).toUpperCase() + days[days.length - 1].slice(1);

    return `${firstDay}-${lastDay}`;
  };
  const formattedDays = formatDays(doctorData?.days);
  return (
    <>

      {loading ? <Loading /> : (
        <>
          {doctorData === null ? (

            <>

              <Box className="container" sx={{ bgcolor: { xs: "white", lg: "#F0F6FF" }, display: "flex", }}>

                {/* Left box */}
                <Box sx={{display:"flex",  bgcolor: "white", border: { xs: 0, lg: "2px solid #64EBB666" }, width: "100%", borderRadius: { xs: 0, lg: "15px" }, my: { xs: 2, lg: 8 }, ml: { xs: 0, lg: 5 }, }}>

                  {/* Doctor name and image */}

                  <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "space-between" }, flexDirection: { xs: "column", lg: "row" } }}>

                    {/* Doctor name and image */}

                    <Box sx={{ display: "", justifyContent: { xs: "center", lg: "start" }, flexDirection: { xs: "column", lg: "row" }, pt: 4, alignItems: { xs: "center", lg: "start" } }} >

                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://example.com/images/default-profile.png" // Set the base64 encoded profile picture dynamically here
                          sx={{ width: 300, height: 400, mx: 4, borderRadius:"12px", mb: { xs: 2, lg: 0 } }}
                        />
                      </Box>

                      <Box sx={{ pl: { xs: 0, lg: 5 }, width: { xs: "70%", lg: "100%" } }}>
                        <Typography sx={{ fontSize: "32px", fontWeight: 700, mb: 2, color: "#1C4188" }}>John Doe </Typography>
                        <Box sx={{ display: "flex", my: 1 }}>
                          <img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20, marginTop: 1 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Education: MBBS</Typography>
                        </Box>
                        <Box sx={{ display: "flex", my: 1 }}>
                          <img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18, marginTop: 3 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : 1 Year</Typography>
                        </Box>
                        <Box sx={{ display: "flex", my: 1 }}>
                          <img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18, marginTop: 4 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Specialities : Eyes</Typography>
                        </Box>
                        {/* <Box sx={{ display: "flex", my: 1 }}>
                          <img src="../../images/DoctorList/language.svg" alt="" style={{ height: 18., marginTop: 3 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Language :{doctorData?.language}</Typography>
                        </Box> */}

                        {/* <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" maxWidth={"90%"} mt={"4px"}>
                          {doctorData?.keywords.split(',').map((keyword, index) => (
                            <Box key={index} sx={{ backgroundColor: "white", textAlign: "center", p: 1, borderRadius: 2, fontWeight: 500, color: "#42A5F5", border: "1px solid #64EBB6CC", px: 2 }}>
                              <Typography sx={{ fontSize: "14px", }}>{keyword.trim()}</Typography>
                            </Box>
                          ))}
                          "dsda"
                        </Stack> */}

                      </Box>

                    </Box>

                    {/* Time and fee */}

\

                  </Box>

                  {/* This slot is availbale in moblie view */}


                  {/* Info and consult Q & A */}
                   <Box>
                  <Box sx={{ mx: { xs: 3, lg: 6 }, mt: 8, }}>

                    {/* Info and consult Q & A heading */}


                    <Box sx={{ display: "flex", mx: 2 }}>
                      <Box sx={{ pb: { xs: 2, lg: 3 }, borderBottom: "2px dashed #64EBB6", }}>
                        <Typography sx={{ color: "#1C4188", fontSize: { xs: 20, lg: 22 }, fontWeight: 600, px: 2, }}>INFO</Typography>
                      </Box>
                    </Box>

                    {/* Content */}

                    <Box sx={{ my: 2, display: "flex", flexDirection: { xs: "column", lg: "row" } }}>

                      <Box sx={{ m: 2, width: { xs: "100%", lg: "33%" } }}>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                          <img src="../../images/DoctorDetails/distance.svg" alt="" style={{ height: 25 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, mx: 2, color: "#1C4188" }}>ADDRESS</Typography>
                        </Box>
                        <Typography sx={{ fontSize: "18px", fontWeight: 400, color: "#626262", mt: 2, }}>{doctorData?.remarkArea}</Typography>
                        <Typography sx={{ fontSize: "18px", fontWeight: 400, color: "#626262", mb: 2 }}>{doctorData?.doctor_Address}</Typography>
                      </Box>
                      <Box sx={{ m: 2, width: { xs: "100%", lg: "33%" } }}>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                          <img src="../../images/DoctorDetails/alarm.svg" alt="" style={{ height: 25 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, mx: 2, color: "#1C4188" }}>TIMING</Typography>
                        </Box>
                        <Typography sx={{ fontSize: "18px", fontWeight: 400, color: "#626262", mt: 2, }}> {formattedDays}</Typography>
                        <Typography sx={{ fontSize: "18px", fontWeight: 400, color: "#626262", }}>{doctorData?.doctorsTimeAvailability}</Typography>
                        <Typography sx={{ fontSize: "18px", fontWeight: 400, color: "#626262", mt: 2, }}>Lunch Time</Typography>
                        <Typography sx={{ fontSize: "18px", fontWeight: 400, color: "#626262", mb: 2 }}>{doctorData?.doctorsLunchTime}</Typography>
                      </Box>
                      <Box sx={{ m: 2, width: { xs: "100%", lg: "33%" } }}>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                          <img src="../../images/DoctorDetails/add_card.svg" alt="" style={{ height: 25 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, mx: 2, color: "#1C4188" }}>Doctor Fee</Typography>
                        </Box>
                        <Typography sx={{ fontSize: "18px", fontWeight: 400, color: "#1C4188", mt: 2, }}>{doctorData?.consultantFee} ₹</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                          <img src="../../images/DoctorDetails/Group690.svg" alt="" style={{ height: 20 }} />
                          <Typography sx={{ fontSize: { xs: "14px", lg: "16px" }, fontWeight: 500, ml: 1, color: "#626262", my: 1 }}>Prime</Typography>
                        </Box>
                        <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#626262", mb: 1 }}>Max. 30 mins wait  + Verified Details</Typography>
                        <img src="../../images/DoctorDetails/visa_card.svg" alt="" height={30} />
                      </Box>
                    </Box>

                  </Box>

                  {doctorData?.description !== "" && (
                    <Box sx={{ mx: { xs: 3, lg: 6 }, mt: 2, }}>

                      {/* Description heading */}


                      <Box sx={{ display: "flex", mx: 2 }}>
                        <Box sx={{ pb: { xs: 2, lg: 3 }, borderBottom: "2px dashed #64EBB6", }}>
                          <Typography sx={{ color: "#1C4188", fontSize: { xs: 20, lg: 22 }, fontWeight: 600, pr: 2, }}>ABOUT</Typography>
                        </Box>
                      </Box>

                      {/* Content */}

                      <Box sx={{ my: 4 }}>
                        <Typography sx={{ fontSize: { xs: "16px", lg: "17px" }, width: "90%", fontWeight: 500, mx: 2, color: "#5D6566", textAlign: "justify" }}>{doctorData?.description}</Typography>
                      </Box>

                    </Box>
                  )}

                  {/* Experince */}

                  <Box sx={{ mx: { xs: 3, lg: 6 }, mt: 8 }}>

                    {/* Experince heading */}

                    <Box sx={{ display: "flex", mx: 2, borderBottom: "2px dashed #64EBB6", width: "30%" }}>
                      <Typography sx={{ color: "#1C4188", fontSize: 22, fontWeight: 600, pb: 1, }}>EXPERIENCE</Typography>
                    </Box>

                    {/* Experince content */}

                    <Box sx={{ my: 2, mx: 2 }}>
                      <Box sx={{ display: "flex", my: 4 }}>
                        <img src="../../images/DoctorDetails/Group816.svg" alt="" style={{ height: 25 }} />
                        <Typography sx={{ fontSize: { xs: "16px", lg: "17px" }, width: { xs: "100%", lg: "80%" }, fontWeight: 500, mx: 2, color: "#5D6566" }}>2003 - 2003 Consultant dermatologist at HDeepti Nursing Home</Typography>
                      </Box>

                      <Box sx={{ display: "flex", my: 4 }}>
                        <img src="../../images/DoctorDetails/Group816.svg" alt="" style={{ height: 25 }} />
                        <Typography sx={{ fontSize: { xs: "16px", lg: "17px" }, width: { xs: "100%", lg: "80%" }, fontWeight: 500, mx: 2, color: "#5D6566" }}>2004 - 2005 Senior resident/tutor at Skin Institute and School of Dermatology</Typography>
                      </Box>

                      <Box sx={{ display: "flex", my: 4 }}>
                        <img src="../../images/DoctorDetails/Group816.svg" alt="" style={{ height: 25 }} />
                        <Typography sx={{ fontSize: { xs: "16px", lg: "17px" }, width: { xs: "100%", lg: "80%" }, fontWeight: 500, mx: 2, color: "#5D6566" }}>2009 - 2009 Consultant dermatologist at Kaya Skin Clinic</Typography>
                      </Box>

                      <Box sx={{ display: "flex", my: 4 }}>
                        <img src="../../images/DoctorDetails/Group816.svg" alt="" style={{ height: 25 }} />
                        <Typography sx={{ fontSize: { xs: "16px", lg: "17px", }, width: { xs: "100%", lg: "80%" }, fontWeight: 500, mx: 2, color: "#5D6566" }}>2011 - 2013 Medical Superintendent and Consultant Dermatologist at Hairline
                          International Hair and Skin Clinic</Typography>
                      </Box>
                    </Box>


                  </Box>

                  {/* FAQ Question asked */}

                  <Box sx={{ mx: { xs: 3, lg: 6 }, mt: 8, position: "relative" }}>

                    {/* Experince heading */}



                    <Box sx={{ height: { xs: "100px", lg: "150px" }, position: "absolute", right: 0, top: { xs: "-4.5rem", lg: "-5.5rem" } }}>
                      <img src="../../images/DoctorDetails/image92.svg" alt="" height={"100%"} />
                    </Box>

                    {/* Experince content */}

                    <Box sx={{ my: 4, mx: 2, }}>

                      <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')} sx={{ my: 2, boxShadow: 0, border: "1px solid #42A5F599", py: 2, borderRadius: 2, bgcolor: "#F2F6F9" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: '100%', flexShrink: 0, color: "#1C4188", fontSize: { xs: "14px", lg: "18px" }, fontWeight: 700 }}>
                            1. How can I get in touch with your customer support team?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ px: 2.5, fontSize: { xs: "14px", lg: "16px" } }}>
                            You can reach our customer support team by filling out the contact form on this page, sending us an email at support@example.com, or calling us at [phone number]. Our team is available [hours of operation] to assist you with any inquiries or concerns.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')} sx={{ my: 2, boxShadow: 0, border: "1px solid #42A5F599", py: 2, borderRadius: 2, bgcolor: "#F2F6F9" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '100%', flexShrink: 0, color: "#1C4188", fontSize: { xs: "14px", lg: "18px" }, fontWeight: 700 }}>
                            2. What is your response time for inquiries submitted through the contact form?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ px: 2.5, fontSize: { xs: "14px", lg: "16px" } }}>
                            You can reach our customer support team by filling out the contact form on this page, sending us an email at support@example.com, or calling us at [phone number]. Our team is available [hours of operation] to assist you with any inquiries or concerns.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion expanded={expanded === 'panel3'} onChange={handleExpand('panel3')} sx={{ my: 2, boxShadow: 0, border: "1px solid #42A5F599", py: 2, borderRadius: 2, bgcolor: "#F2F6F9" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '100%', flexShrink: 0, color: "#1C4188", fontSize: { xs: "14px", lg: "18px" }, fontWeight: 700 }}>
                            3. Can I visit your office in person?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ px: 2.5, fontSize: { xs: "14px", lg: "16px" } }}>
                            You can reach our customer support team by filling out the contact form on this page, sending us an email at support@example.com, or calling us at [phone number]. Our team is available [hours of operation] to assist you with any inquiries or concerns.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>


                      <Accordion expanded={expanded === 'panel4'} onChange={handleExpand('panel4')} sx={{ my: 2, boxShadow: 0, border: "1px solid #42A5F599", py: 2, borderRadius: 2, bgcolor: "#F2F6F9" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3bh-content"
                          id="panel4bh-header"
                        >
                          <Typography sx={{ width: '100%', flexShrink: 0, color: "#1C4188", fontSize: { xs: "14px", lg: "18px" }, fontWeight: 700 }}>
                            4. Do you have a physical store where I can purchase your products/services?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ px: 2.5, fontSize: { xs: "14px", lg: "16px" } }}>
                            You can reach our customer support team by filling out the contact form on this page, sending us an email at support@example.com, or calling us at [phone number]. Our team is available [hours of operation] to assist you with any inquiries or concerns.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion expanded={expanded === 'panel5'} onChange={handleExpand('panel5')} sx={{ my: 2, boxShadow: 0, border: "1px solid #42A5F599", py: 2, borderRadius: 2, bgcolor: "#F2F6F9" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel5bh-content"
                          id="panel4bh-header"
                        >
                          <Typography sx={{ width: '100%', flexShrink: 0, color: "#1C4188", fontSize: { xs: "14px", lg: "18px" }, fontWeight: 700 }}>
                            5. How can I stay updated on news and promotions from your company?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ px: 2.5, fontSize: { xs: "14px", lg: "16px" } }}>
                            You can reach our customer support team by filling out the contact form on this page, sending us an email at support@example.com, or calling us at [phone number]. Our team is available [hours of operation] to assist you with any inquiries or concerns.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                    </Box>
                    </Box> 
                  </Box>

                </Box>

                {/* Box for book slot right box */}



              </Box>

            </>

          ) : (

            <>
              {/* Render content when data is not available */}
              <DataNotFound />

            </>
          )}

          {/* <MobileAppBanner /> */}
          <LiveCounter />
          <Footer />
        </>
      )}
      {details !== null && (<SlotBookDialog open={openSlot} onClose={() => setopenSlot(false)} details={details} />)}

    </>
  )
}

const SlotBookDialog = ({ open, onClose, details }) => {
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [openOtpBox, setOpenOtpBox] = useState(false);
  const [date, setDate] = useState();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //convert into date string  
  useEffect(() => {
    if (details != null && details.date != null) {
      console.log(details.time)
      const date = new Date(details.time);
      setDate(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
    }

  }, [details])

  // Function for continue button
  const handleContinue = async () => {
    if (phone.length !== 10) {
      enqueueSnackbar('Please enter a valid phone number', { variant: 'error' });
      return;
    }
    if (name.length === 0 || name.trim() === '') {
      enqueueSnackbar('Please enter a name', { variant: 'error' });
      return;
    }
    const booking_data = {
      patient_name: name,
      pateint_phone: phone,
      doctor_id: id,
      doctor_name: details.name,
      doctor_address: details.address,
      fee: details.fee, // hard coded for now
      slot_time: details.time
    }

    try {
      setLoading(true);
      const response = await DoctorService.BookSlot(booking_data);
      if (!response.isSuccess) {
        setLoading(false);
        enqueueSnackbar(response.ErrorMessage, { variant: 'error' });
        return;
      } else {
        setLoading(false);
        enqueueSnackbar('Otp is sent on you phone number', { variant: 'success' });
        setDisabled(true);
        setOpenOtpBox(true);
      }

    } catch (error) {
      setLoading(false);
      console.log(error)
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }

    // Action for continue
  }
  const handleNameInput = (e) => {
    if ((e.target.value.length !== 0) && (phone !== undefined && phone.length === 10)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setOpenOtpBox(false);
  }
  const handleInput = (e) => {
    if ((name !== undefined && name.length !== 0) && e.target.value.length === 10) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setOpenOtpBox(false);
  }

  const handleChangeOtp = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Function for verify otp

  const handleVerifyOtp = async () => {
    console.log(otp.join(''))

    const otp_Data = {
      phone: phone,
      otp: otp.join('')
    }
    try {
      const response = await DoctorService.VerifyOtp(otp_Data);
      if (!response.isSuccess) {
        enqueueSnackbar(response.ErrorMessage, { variant: 'error' });
        return;
      } else {
        setName('');
        setPhone('');
        setOtp(new Array(6).fill(""));
        setOpenOtpBox(false);
        onClose();
        setConfirmOpen(true);
        setTimeout(() => {
          setConfirmOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error)
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }

    // After success fullly verify put all the code 

    console.log(details)

  }

  const handleClose = () => {
    onClose();
    setName('');
    setPhone("");
    setDisabled(true);
  }

  return (
    <>

      <Dialog open={open} maxWidth="md" fullWidth sx={{ textAlign: "center" }} onClose={handleClose} aria-describedby="alert-dialog-slide-description" keepMounted>
        <DialogTitle fontSize={19} lineHeight={1} fontWeight={600}>Book Slot</DialogTitle>

        <DialogContent >
          <BackdropLoading open={loading} />
          <Box sx={{ display: "flex", width: "100%", mt: 1, flexDirection: { xs: "column", sm: "row" } }}>
            {/* Box for Doctor Details */}
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <Paper elevation={10} sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 15, textAlign: "left", borderLeft: "3px solid #199FD9", pl: "1rem", lineHeight: 2.5, borderRadius: "4px", color: "black" }}>
                  In-clinic Appointment
                </Typography>
              </Paper>
              <Paper elevation={10} sx={{ px: "1rem", py: 3, }}>
                {/* Doctor Details */}
                {/* <Box sx={{ px: "1rem", py: 3,  }}> */}
                <Box sx={{ display: "flex", textAlign: "left", alignItems: "center", }}>
                  <Typography width="50%" sx={{ color: "black", fontSize: 15, lineHeight: 2 }}>
                    Doctor Name
                  </Typography>
                  <span style={{ marginRight: "2rem" }}>:</span>
                  <Typography width="100%" sx={{ color: "black", fontSize: 15, lineHeight: 2 }}>{details.name}</Typography>
                </Box>
                <Box sx={{ display: "flex", textAlign: "left", }}>
                  <Typography width="50%" sx={{ color: "black", fontSize: 15, lineHeight: 2 }}>
                    Location
                  </Typography>
                  <span style={{ marginRight: "2rem" }}>:</span>
                  <Typography width="100%" sx={{ color: "black", fontSize: 15, pr: 1, lineHeight: 2 }}>{details.address}</Typography>
                </Box>
                <Box sx={{ display: "flex", textAlign: "left", }}>
                  <Typography width="50%" sx={{ color: "black", fontSize: 15, lineHeight: 2 }}>
                    Doctor fee
                  </Typography>
                  <span style={{ marginRight: "2rem" }}>:</span>
                  <Typography width="100%" sx={{ color: "black", fontSize: 15, pr: 1, lineHeight: 2 }}>{details.fee} ₹</Typography>
                </Box>

                <Box sx={{ display: "flex", textAlign: "left", mt: 2, justifyContent: "space-between" }}>
                  <Typography sx={{ color: "black", fontSize: 16, lineHeight: 2 }}>
                    On {date}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}><AccessTimeIcon sx={{ fontSize: "23px", color: "gray" }} /><Typography sx={{ color: "black", fontSize: 15, pl: 1, lineHeight: 2 }}>At {details.time != null && details.time.split('T')[1]}</Typography></Box>
                </Box>
              </Paper>

            </Box>

            {/* Box for verification and pateint details */}
            <Box sx={{ width: { xs: "100%", sm: "50%" }, textAlign: "left", ml: { xs: 0, sm: 4 }, mt: { xs: 4, sm: 0 }, }}>
              <Box>
                <Typography sx={{ color: "black", fontSize: "15px" }} className='required'>Pateint Name</Typography>
                <input type="text" name="" id="" style={{ width: "100%", marginTop: 4, padding: 6, border: "1px solid gray", fontSize: "14px" }} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} onInput={handleNameInput} />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography sx={{ color: "black", fontSize: "15px" }} className='required'>Phone No.</Typography>
                <input type="number" name="" id="" style={{ width: "100%", marginTop: 4, padding: 6, border: "1px solid gray", textDecoration: "none", fontSize: "14px" }} placeholder='Mobile Number' onInput={handleInput} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </Box>
              <Box sx={{ mt: 1, mb: 2 }}>
                <Typography sx={{ color: "black", fontSize: "12px" }} >You will receive an OTP shortly.</Typography>
                <Typography sx={{ color: "black", fontSize: "12px" }} >We will send appointment-related communications on this number.</Typography>
              </Box>
              <CustomeButton title={"Continue"} onClick={handleContinue} disabled={disabled} />

              {openOtpBox && (
                <>
                  <Box sx={{ display: "flex", justifyContent: "center", transitionDuration: "100ms" }}>

                    {otp.map((data, index) => {
                      return (
                        <input
                          className="otp-field"
                          type="text"
                          name="otp"
                          maxLength="1"
                          key={index}
                          value={data}
                          onChange={e => handleChangeOtp(e.target, index)}
                          onFocus={e => e.target.select()}
                        />
                      );
                    })}

                  </Box>
                  <CustomeButton title={"Verify otp"} onClick={handleVerifyOtp} />
                </>
              )}


              {/* <Box sx={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
                  <Box sx={{width: "100%", mr:1}}>
                    <CustomeButton title={"Verify Otp"} onClick={handleVerifyOtp} />
    
                  </Box>
                  <Box sx={{width: "100%", ml:1}}>
                  <CustomeButton title={"Verify Otp"} onClick={handleVerifyOtp} />
                    
                  </Box>
                </Box> */}

            </Box>
          </Box>

        </DialogContent>

        <DialogActions sx={{ paddingRight: "25px", paddingBottom: "25px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "grey" }}
            sx={{
              mt: "10px",
              textTransform: "none",
              borderRadius: "10px",
              width: "8rem",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>


      {/* Conformation Dialog box */}

      <Dialog open={confirmOpen} maxWidth="xs" fullWidth sx={{ textAlign: "center" }} onClose={() => setConfirmOpen(false)} aria-describedby="alert-dialog-slide-description" keepMounted>

        <DialogContent sx={{ pt: 4, pb: 0 }}>
          <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <Avatar sx={{ bgcolor: "rgb(39,174,96)", width: 60, height: 60, }}>
              <Checkmark size={50} />
            </Avatar>
            <Typography sx={{ fontSize: "20px", fontWeight: 600, mt: 2, color: "black" }}>Slot has been Booked</Typography>
          </Box>

        </DialogContent>

        <DialogActions sx={{ paddingBottom: "25px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "grey" }}
            sx={{
              mt: "10px",
              textTransform: "none",
              borderRadius: "10px",
              width: "8rem",
              mx: "auto"
            }}
            onClick={() => setConfirmOpen(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </>

  )
}

const BookingExistingApplication = () => {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar()
  const [backdropLoading, setbackdropLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [visibleNameInput, setVisibleNameInput] = useState(false);
  const [inputState, setInputState] = useState("");
  const [bookingOrPhoneNo, setBookingOrPhoneNo] = useState("");
  const [name, setName] = useState("");
  const [mnOrBn, setMnOrBn] = useState("");
  const [otp, setOtp] = useState("");
  const [openOtpBox, setOpenOtpBox] = useState(false);

  const handleVerifyBooking = async () => {
    setbackdropLoading(true);
    const response = await DoctorService.VerifyPhoneOrBookingNo(bookingOrPhoneNo);
    if (response.status === 200) {
      if (response.data.isSuccess) {
        setbackdropLoading(false);
        setVisibleNameInput(true);
        if (bookingOrPhoneNo.length === 10) {
          console.log(parseInt(bookingOrPhoneNo));
          setInputState('BookingInput')
        }
        if (bookingOrPhoneNo.length === 16) {
          setInputState('PhoneInput')
        }
        debugger;
        setName(response.data.existingBookingPatientDetails.patientName);
        setMnOrBn(response.data.existingBookingPatientDetails.mnOrBn);
      } else {
        setbackdropLoading(false);
        setVisibleNameInput(false);
        enqueueSnackbar(response.data.errorMessage, { variant: "error" });
      }
    } else {
      setbackdropLoading(false);
      enqueueSnackbar("Server is busy", { variant: "error" });
    }

  }

  const handleContinueBooking = async () => {
    var data = {
      doctorId: id,
      phoneNumber: bookingOrPhoneNo.length === 10 ? bookingOrPhoneNo : mnOrBn, // this is for phone number
      name: name,
      bookingNumber: bookingOrPhoneNo.length !== 10 ? bookingOrPhoneNo : mnOrBn// this is for bookking number
    };
    setbackdropLoading(true);
    const response = await DoctorService.BookingForExistingPatient(data);
    if (response.status === 200) {
      if (response.data.isSuccess) {
        setbackdropLoading(false);
        setOpenOtpBox(true);
        enqueueSnackbar("OTP send SuccessFully", { variant: "success" });
        //enqueueSnackbar(response.data.message)
      } else {
        setbackdropLoading(false);
        enqueueSnackbar(response.data.errorMessage, { variant: "error" });
      }
    } else {
      setbackdropLoading(false);
      enqueueSnackbar("Server is busy", { variant: "error" });
    }
  }

  const handleSubmitOtp = async () => {
    setbackdropLoading(true);
    var otpData = {
      doctorId: id,
      phone: bookingOrPhoneNo.length === 10 ? bookingOrPhoneNo : mnOrBn,
      otp: otp
    }
    const response = await DoctorService.OtpVerificationOfExistingApplication(otpData);

    if (response.status === 200) {
      if (response.data.isSuccess) {
        setbackdropLoading(false);
        enqueueSnackbar(response.data.message, { variant: "success" });
      } else {
        setbackdropLoading(false);
        enqueueSnackbar(response.data.errorMessage);
      }
    } else {
      setbackdropLoading(false);
      enqueueSnackbar("Server is busy", { variant: "error" })
    }
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: "15px",
          border: "2px solid #64EBB666",
          mt: 4,
          p: 2,
          mx: "auto"

        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "14px", color: "black", pb: 2 }}>Booking for Exiting Application</Typography>
        <Box>
          <Typography sx={{ fontSize: "14px", color: "black", pb: 1 }}>Instruction</Typography>
          <Typography sx={{ fontSize: "14px", color: "black", pb: 0.5 }}>1. This booking is for the pateint who have visited once to this doctor.</Typography>
          <Typography sx={{ fontSize: "14px", color: "black", pb: 0.5 }}>2. Booking should valid for pateint who have visited in between the 15 days from present day.</Typography>
          <Typography sx={{ fontSize: "14px", color: "black", pb: 2 }}>3. Use same phone no. that use for previous booking. You can also use the booking no.</Typography>
        </Box>

        <Box sx={{ width: "100%", mx: "auto" }}>

          <Typography sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600 }}>Phone No./Previous Booking No.</Typography>
          <Box>
            <input
              type="number"
              style={{
                border: "1px solid #64EBB6",
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "100%",
                fontFamily: "nunito",
              }}
              value={bookingOrPhoneNo}
              onChange={(e) => {
                setBookingOrPhoneNo(e.target.value)

              }}
              onInput={(e) => {
                if (e.target.value.length >= 10) {
                  setDisableButton(false)
                } else {
                  setDisableButton(true)
                }
              }}
              disabled={visibleNameInput}
            />
          </Box>

        </Box>
        {visibleNameInput && (
          <>
            <Box sx={{ width: { xs: "85%", lg: "100%" }, mx: "auto", mt: 1 }}>
              <Typography sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600 }}>Pateint Name</Typography>
              <Box>
                <input
                  type="text"
                  style={{
                    border: "1px solid #64EBB6",
                    padding: "10px",
                    backgroundColor: "white",
                    // color: 'black',
                    borderRadius: "10px",
                    width: "100%",
                    fontFamily: "nunito",
                  }}
                  value={name}
                  disabled
                />
              </Box>

            </Box>

            <Box sx={{ width: { xs: "85%", lg: "100%" }, mx: "auto", mt: 1 }}>
              <Typography sx={{ color: "#1C4188", fontSize: "16px", fontWeight: 600 }}>{inputState === "BookingInput" ? "Previous Booking No." : "Phone No."}</Typography>
              <Box>
                <input
                  type="number"
                  style={{
                    border: "1px solid #64EBB6",
                    padding: "10px",
                    backgroundColor: "white",
                    // color: 'black',
                    borderRadius: "10px",
                    width: "100%",
                    fontFamily: "nunito",
                  }}
                  value={mnOrBn}
                  disabled
                />
              </Box>

            </Box>
          </>

        )}

        {openOtpBox ? (
          <>
            <OtpBox setOtp={setOtp} />
            <Box sx={{ width: "100%", mt: 2 }}>
              <CustomizedButton title={"Submit"} type={"submit"} onClick={handleSubmitOtp} />
            </Box>

          </>
        ) : (
          <>
            {visibleNameInput ? (
              <Box sx={{ width: "100%", mt: 2 }}>
                <CustomizedButton title={"Continue"} type={"submit"} onClick={handleContinueBooking} />
              </Box>
            ) : (
              <Box sx={{ width: "100%", mt: 2 }}>
                <CustomizedButton title={"Verify"} type={"submit"} disabled={disableButton} onClick={handleVerifyBooking} />
              </Box>
            )}
          </>
        )
        }



      </Box>
      <BackdropLoading open={backdropLoading} />
    </>

  )
}


