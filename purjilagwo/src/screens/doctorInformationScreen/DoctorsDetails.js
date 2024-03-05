import React, { useState, useEffect } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TabScrollButton, Typography, Avatar, AccordionSummary, AccordionDetails, Accordion, Tooltip, Stack } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../../style/DoctorsDetails.css'
import { useParams } from 'react-router-dom';
import DoctorService from '../../services/Doctor.services';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import Calender from "../../assets/image/calender_cut.svg"
import Loading from '../../components/Loading';
import DataNotFound from '../../components/DataNotFound';
import "../../components/style/InputBox.css"
import CustomeButton from '../../components/Button';
import { useSnackbar } from 'notistack';
import { Checkmark } from "@carbon/icons-react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MobileAppBanner from '../../components/MobileAppBanner';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';

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
  const [details, setDetails] = useState(false); // useState for the details that we passing in the dialog box

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
      }
    }
    return count;
  }

  const handleSlotOpen = (name, address, time, date) => {
    setopenSlot(true);
    console.log(name, time, address,);
    const det = {
      name: name,
      address: address,
      time: time,
      date: date
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
          {doctorData !== null ? (

            <>

              <Box sx={{ bgcolor: { xs: "white", lg: "#F0F6FF" }, display: "flex", }}>

                {/* Left box */}
                <Box sx={{ bgcolor: "white", border: { xs: 0, lg: "2px solid #64EBB666" }, width: "100%", borderRadius: { xs: 0, lg: "15px" }, my: { xs: 2, lg: 8 }, ml: { xs: 0, lg: 5 }, }}>

                  {/* Doctor name and image */}

                  <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "space-between" }, flexDirection: { xs: "column", lg: "row" } }}>

                    {/* Doctor name and image */}

                    <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "start" }, flexDirection: { xs: "column", lg: "row" }, pt: 4, alignItems: { xs: "center", lg: "start" } }} >

                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src={doctorData.profile_Picture} // Set the base64 encoded profile picture dynamically here
                          sx={{ width: 130, height: 130, mx: 4, mb: { xs: 2, lg: 0 }, border: "1px solid #64EBB6" }}
                        />
                      </Box>

                      <Box sx={{ pl: { xs: 0, lg: 5 }, width: { xs: "70%", lg: "100%" } }}>
                        <Typography sx={{ fontSize: "32px", fontWeight: 700, mb: 2, color: "#1C4188" }}>{doctorData?.user_Name} </Typography>
                        <Box sx={{ display: "flex", my: 1 }}>
                          <img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20, marginTop: 1 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Education: {doctorData?.education}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", my: 1 }}>
                          <img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18, marginTop: 3 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : {doctorData?.experience}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", my: 1 }}>
                          <img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18, marginTop: 4 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Specialities :{doctorData?.speciality}</Typography>
                        </Box>
                        {/* <Box sx={{ display: "flex", my: 1 }}>
                          <img src="../../images/DoctorList/language.svg" alt="" style={{ height: 18., marginTop: 3 }} />
                          <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Language :{doctorData?.language}</Typography>
                        </Box> */}

                        <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" maxWidth={"90%"} mt={"4px"}>
                          {doctorData.keywords.split(',').map((keyword, index) => (
                            <Box key={index} sx={{ backgroundColor: "white", textAlign: "center", p: 1, borderRadius: 2, fontWeight: 500, color: "#42A5F5", border: "1px solid #64EBB6CC", px: 2 }}>
                              <Typography sx={{ fontSize: "14px", }}>{keyword.trim()}</Typography>
                            </Box>
                          ))}
                        </Stack>

                      </Box>

                    </Box>

                    {/* Time and fee */}

                    <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", lg: "column" }, justifyContent: "space-between", mx: 2 }}>
                      <Box sx={{ mt: 2, display: "flex", flexDirection: { xs: "row", lg: "column" }, justifyContent: "space-between",alignItems:{xs: "center"} }}>
                        <Box sx={{ backgroundColor: "white", width: "180px", textAlign: "center", p: 1, borderRadius: 2, fontSize: "15px", fontWeight: 500, color: "#1C4188", border: "1px solid #42A5F5", my: 1, mx: 2 }}>
                          
                          {doctorData?.doctorsTimeAvailability}
                        </Box>


                        <Box sx={{ backgroundColor: "white", width: "180px", textAlign: "center", p: 1, borderRadius: 2, fontSize: "15px", fontWeight: 500, color: "#42A5F5", border: "1px solid #42A5F5", my: 1, mx: 2 }}>
                          {doctorData?.consultantFee} ₹
                        </Box>

                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}>
                        <Box sx={{ padding: ".8rem", backgroundColor: "#F0F6FF", borderRadius: "100px", height: "60px", boxShadow: "4px 4px 10px #00000040" }}>
                          <img src="../../images/DoctorDetails/image99.svg" style={{ height: "100%" }} alt="" />
                        </Box>
                        <Tooltip title="Coming soon.." placement="top" arrow>
                          <Box sx={{ padding: ".8rem", backgroundColor: "#F0F6FF", borderRadius: "100px", height: "60px", boxShadow: "4px 4px 10px #00000040", cursor: "pointer" }}>
                            <img src="../../images/DoctorDetails/image100.svg" style={{ height: "100%" }} alt="" />
                          </Box>
                        </Tooltip>
                        <Box sx={{ padding: ".8rem", backgroundColor: "#F0F6FF", borderRadius: "100px", height: "60px", boxShadow: "4px 4px 10px #00000040" }}>

                          <img src="../../images/DoctorDetails/image101.svg" style={{ height: "100%" }} alt="" />
                        </Box>
                      </Box>
                    </Box>

                  </Box>

                  {/* This slot is availbale in moblie view */}

                  <Box sx={{ display: { xs: "block", md: "none", backgroundColor: "white", } }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#8E999A", mb: 1, textAlign: "center", mt: 2 }}>Pick a Time Slot</Typography>
                    <Box
                      sx={{
                        flexGrow: 1,
                        width: 400,
                        bgcolor: 'background.paper',
                        borderRadius: "15px",
                        border: "2px solid #64EBB666",
                        mx: "auto"

                      }}
                    >
                      <Typography sx={{ textAlign: "center", py: 2, fontSize: "14px", color: "black" }}>Book an appointment for Consultation</Typography>

                      <Box sx={{ backgroundColor: "#42A5F5", width: { xs: "150px", lg: "250px" }, textAlign: "center", p: .6, borderRadius: "5px", fontSize: { xs: "12px", lg: "15px" }, fontWeight: 500, color: "white", border: "2px solid #42A5F5", mx: "auto", mb: 2 }}>
                        Clinic appointment 650₹
                      </Box>

                      {currentDate != null && timeSlots.length !== 0 ? (
                        <Box sx={{ display: "flex", px: 1 }}>
                          <TabScrollButton onClick={handleLeft} direction='left' orientation='horizontal'>
                            <ChevronLeftIcon />
                          </TabScrollButton>
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons={false}
                            aria-label="visible arrows tabs example"
                            sx={{
                              [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                              },
                            }}

                          >

                            {timeSlots.map((items, index) => {
                              return (

                                <Tab label={[
                                  <>
                                    {items.getDate() === currentDate.getDate() &&
                                      items.getMonth() === currentDate.getMonth() &&
                                      items.getFullYear() === currentDate.getFullYear() && <div style={{ color: "black" }}>Today</div>}
                                    {items.getDate() === currentDate.getDate() + 1 &&
                                      items.getMonth() === currentDate.getMonth() &&
                                      items.getFullYear() === currentDate.getFullYear() && <div style={{ color: "black" }}>Tomorrow</div>}
                                    {items.getDate() !== currentDate.getDate() && items.getDate() !== currentDate.getDate() + 1 && <div style={{ color: "black" }}>{items.toDateString().split(' ')[0]}, {items.toDateString().split(' ')[2]} {items.toDateString().split(' ')[1]}</div>}

                                    <div style={{ marginTop: '5px', fontSize: "8px", fontWeight: 800, color: "#42A5F599", fontSmooth: "10px" }}>{countSlot(index)} slot available</div>
                                  </>
                                ]} sx={{ fontSize: "10px", p: 0, width: "100px", fontWeight: 500, }} {...a11yProps(index)} />

                              )
                            })}

                          </Tabs>
                          <TabScrollButton onClick={handleRight} direction='right' orientation='horizontal'>
                            <ChevronRightIcon />
                          </TabScrollButton>
                        </Box>
                      ) : <>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "10rem", }}>
                          <img src={Calender} alt="No Slot Available" width={50} />
                          <Typography sx={{ mt: 2, fontSize: "10px" }}>No Data Available</Typography>
                          <a href="tel:+" style={{ width: "50%", }}>
                            <Button
                              variant="contained"
                              sx={{ width: "100%", background: "#42A5F5", mt: "20px", }}
                            >
                              <CallIcon sx={{ fontSize: "20px", mr: "5px" }} />Call Now
                            </Button>
                          </a>
                        </Box>
                      </>}

                      {/* <Typography sx={{ mt: 2, fontSize: "15px", color: "black", ml: 3, fontWeight: 600 }}>Evening</Typography> */}


                      {dateString.map((items, index) => {
                        return (
                          <>
                            <CustomTabPanel value={value} index={index} key={index}>
                              {doctorData.timeSlots[dateString[index]] !== undefined && doctorData.timeSlots[dateString[index]].length === 0 && (
                                <>
                                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "10rem", pr: "24px" }}>
                                    <img src={Calender} alt="No Slot Available" width={50} />
                                    <Typography sx={{ mt: 2, fontSize: "10px" }}>No Slot Available</Typography>
                                    <a href="tel:+" style={{ width: "50%", }}>
                                      <Button
                                        variant="contained"
                                        sx={{ width: "100%", background: "#42A5F5", mt: "20px", }}
                                      >
                                        <CallIcon sx={{ fontSize: "20px", mr: "5px" }} />Call Now
                                      </Button>
                                    </a>
                                  </Box>

                                </>
                              )}
                              <Box >
                                <Box sx={{ py: 1, px: 4, bgcolor: "#F0F6FF", borderRadius: "10px", mr: 3, mb: 3 }}>
                                  <Typography sx={{ color: "#1C4188", textAlign: "center" }}>Total Availability {countSlot(index)} slot</Typography>
                                </Box>
                                <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap", maxHeight: "10rem", overflowY: "scroll", justifyContent: "center", "::-webkit-scrollbar": { width: "15px", bgcolor: "#F0F6FF", borderRadius: "10px" }, "::-webkit-scrollbar-thumb": { bgcolor: "#64EBB6", borderRadius: "10px" } }}>
                                  {doctorData.timeSlots[dateString[index]] !== undefined && doctorData.timeSlots[dateString[index]].map((val, i) => {
                                    return (
                                      <>
                                        <Box sx={{ fontSize: "12px", px: 1, py: 1, border: val.isAvailable ? "2px solid #42A5F5" : "2px solid #bfbfbfa8", bgcolor: val.isAvailable ? "#F5F8FB" : "white", mr: 1, mb: 1, color: val.isAvailable ? "#199FD9" : "#bfbfbfa8", cursor: val.isAvailable ? "pointer" : "not-allowed", width: "100px", textAlign: "center", borderRadius: "10px" }} key={i} onClick={() => val.isAvailable && handleSlotOpen(doctorData?.user_Name, doctorData?.doctor_Address, val.startTime, dateString[index])} >{`${val.startTime.split('T')[1].split(":")[0]}:${val.startTime.split('T')[1].split(":")[1]}`}</Box>

                                        {i + 1 === doctorData.timeSlots[dateString[index]].length && (<Box sx={{ fontSize: "12px", px: 1, py: 0.8, border: val.isAvailable ? "2px solid #42A5F5" : "2px solid #bfbfbfa8", bgcolor: val.isAvailable ? "#F5F8FB" : "white", mr: 1, mb: 1, color: val.isAvailable ? "#199FD9" : "#bfbfbfa8", cursor: val.isAvailable ? "pointer" : "not-allowed", width: "100px", textAlign: "center", borderRadius: "10px" }} key={index} onClick={() => val.isAvailable && handleSlotOpen(doctorData?.user_Name, doctorData?.doctor_Address, val.endTime, dateString[index])}>{`${val.endTime.split('T')[1].split(":")[0]}:${val.endTime.split('T')[1].split(":")[1]}`}</Box>)}
                                      </>
                                    )
                                  })}


                                </Box>


                              </Box>

                            </CustomTabPanel>
                          </>
                        )
                      })}

                      <Box sx={{ width: "90%", mx: "auto", backgroundColor: "#42A5F5", px: 1, py: 1.5, fontSize: "12px", lineHeight: 1.4, textAlign: "center", borderRadius: "4px", mb: 3, color: "white" }}>
                        After you have submitted the appointment request, we might call to confirm the preferred appointment slot.

                      </Box>
                      <Box sx={{ width: "90%", mx: "auto", px: 1, fontSize: "12px", lineHeight: 1.4, textAlign: "center", borderRadius: "4px", pb: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", }}><Typography sx={{ fontSize: "14px", fontWeight: 600 }}>Manipal Hospital</Typography></Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", py: .5 }}><Typography sx={{ fontSize: "12px" }}>Jayanagar 9 block</Typography><Typography sx={{ fontSize: "12px" }}>Max 30min wait time</Typography></Box>

                      </Box>

                    </Box>
                  </Box>

                  {/* Info and consult Q & A */}

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
                        <Typography sx={{ fontSize: { xs: "16px", lg: "17px" }, width:"90%", fontWeight: 500, mx: 2, color: "#5D6566", textAlign: "justify" }}>{doctorData.description}</Typography>
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

                    <Box sx={{ display: "flex", mx: 2, borderBottom: "2px dashed #64EBB6", width: { xs: "70%", sm: "30%" } }}>
                      <Typography sx={{ color: "#1492F7", fontSize: 16, fontWeight: 800, pb: 1, }}>FAQ</Typography>
                      <Typography sx={{ color: "#64EBB6", fontSize: 16, fontWeight: 800, pb: 1, ml: 2 }}>QUESTION ASKED</Typography>
                    </Box>

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

                {/* Box for book slot right box */}

                <Box sx={{ display: { xs: "none", md: "block" }, mt: "30px", mr: 5, ml: 2 }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#8E999A", mb: 1, }}>Pick a Time Slot</Typography>
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: 400,
                      bgcolor: 'background.paper',
                      borderRadius: "15px",
                      border: "2px solid #64EBB666",

                    }}
                  >
                    <Typography sx={{ textAlign: "center", py: 2, fontSize: "14px", color: "black" }}>Book an appointment for Consultation</Typography>

                    <Box sx={{ backgroundColor: "#42A5F5", width: { xs: "150px", lg: "250px" }, textAlign: "center", p: .6, borderRadius: "5px", fontSize: { xs: "12px", lg: "15px" }, fontWeight: 500, color: "white", border: "2px solid #42A5F5", mx: "auto", mb: 2 }}>
                      Clinic appointment {doctorData?.consultantFee} ₹
                    </Box>

                    {currentDate != null && timeSlots.length !== 0 ? (
                      <Box sx={{ display: "flex", px: 1 }}>
                        <TabScrollButton onClick={handleLeft} direction='left' orientation='horizontal'>
                          <ChevronLeftIcon />
                        </TabScrollButton>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          variant="scrollable"
                          scrollButtons={false}
                          aria-label="visible arrows tabs example"
                          sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                              '&.Mui-disabled': { opacity: 0.3 },
                            },
                          }}

                        >

                          {timeSlots.map((items, index) => {
                            return (

                              <Tab label={[
                                <>
                                  {items.getDate() === currentDate.getDate() &&
                                    items.getMonth() === currentDate.getMonth() &&
                                    items.getFullYear() === currentDate.getFullYear() && <div style={{ color: "black" }}>Today</div>}
                                  {items.getDate() === currentDate.getDate() + 1 &&
                                    items.getMonth() === currentDate.getMonth() &&
                                    items.getFullYear() === currentDate.getFullYear() && <div style={{ color: "black" }}>Tomorrow</div>}
                                  {items.getDate() !== currentDate.getDate() && items.getDate() !== currentDate.getDate() + 1 && <div style={{ color: "black" }}>{items.toDateString().split(' ')[0]}, {items.toDateString().split(' ')[2]} {items.toDateString().split(' ')[1]}</div>}

                                  <div style={{ marginTop: '5px', fontSize: "8px", fontWeight: 800, color: "#42A5F599", fontSmooth: "10px" }}>{countSlot(index)} slot available</div>
                                </>
                              ]} sx={{ fontSize: "10px", p: 0, width: "100px", fontWeight: 500, }} {...a11yProps(index)} />

                            )
                          })}

                        </Tabs>
                        <TabScrollButton onClick={handleRight} direction='right' orientation='horizontal'>
                          <ChevronRightIcon />
                        </TabScrollButton>
                      </Box>
                    ) : <>
                      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "10rem", }}>
                        <img src={Calender} alt="No Slot Available" width={50} />
                        <Typography sx={{ mt: 2, fontSize: "10px" }}>No Data Available</Typography>
                        <a href="tel:+" style={{ width: "50%", }}>
                          <Button
                            variant="contained"
                            sx={{ width: "100%", background: "#42A5F5", mt: "20px", }}
                          >
                            <CallIcon sx={{ fontSize: "20px", mr: "5px" }} />Call Now
                          </Button>
                        </a>
                      </Box>
                    </>}

                    {/* <Typography sx={{ mt: 2, fontSize: "15px", color: "black", ml: 3, fontWeight: 600 }}>Evening</Typography> */}


                    {dateString.map((items, index) => {
                      return (
                        <>
                          <CustomTabPanel value={value} index={index} key={index}>
                            {doctorData.timeSlots[dateString[index]] !== undefined && doctorData.timeSlots[dateString[index]].length === 0 && (
                              <>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "10rem", pr: "24px" }}>
                                  <img src={Calender} alt="No Slot Available" width={50} />
                                  <Typography sx={{ mt: 2, fontSize: "10px" }}>No Slot Available</Typography>
                                  <a href="tel:+" style={{ width: "50%", }}>
                                    <Button
                                      variant="contained"
                                      sx={{ width: "100%", background: "#42A5F5", mt: "20px", }}
                                    >
                                      <CallIcon sx={{ fontSize: "20px", mr: "5px" }} />Call Now
                                    </Button>
                                  </a>
                                </Box>

                              </>
                            )}
                            <Box >
                              <Box sx={{ py: 1, px: 4, bgcolor: "#F0F6FF", borderRadius: "10px", mr: 3, mb: 3 }}>
                                <Typography sx={{ color: "#1C4188", textAlign: "center" }}>Total Availability {countSlot(index)} slot</Typography>
                              </Box>
                              <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap", maxHeight: "10rem", overflowY: "scroll", justifyContent: "center", "::-webkit-scrollbar": { width: "15px", bgcolor: "#F0F6FF", borderRadius: "10px" }, "::-webkit-scrollbar-thumb": { bgcolor: "#64EBB6", borderRadius: "10px" } }}>
                                {doctorData.timeSlots[dateString[index]] !== undefined && doctorData.timeSlots[dateString[index]].map((val, i) => {
                                  return (
                                    <>
                                      <Box sx={{ fontSize: "12px", px: 1, py: 1, border: val.isAvailable ? "2px solid #42A5F5" : "2px solid #bfbfbfa8", bgcolor: val.isAvailable ? "#F5F8FB" : "white", mr: 1, mb: 1, color: val.isAvailable ? "#199FD9" : "#bfbfbfa8", cursor: val.isAvailable ? "pointer" : "not-allowed", width: "100px", textAlign: "center", borderRadius: "10px" }} key={i} onClick={() => val.isAvailable && handleSlotOpen(doctorData?.user_Name, doctorData?.doctor_Address, val.startTime, dateString[index])} >{`${val.startTime.split('T')[1].split(":")[0]}:${val.startTime.split('T')[1].split(":")[1]}`}</Box>

                                      {i + 1 === doctorData.timeSlots[dateString[index]].length && (<Box sx={{ fontSize: "12px", px: 1, py: 0.8, border: val.isAvailable ? "2px solid #42A5F5" : "2px solid #bfbfbfa8", bgcolor: val.isAvailable ? "#F5F8FB" : "white", mr: 1, mb: 1, color: val.isAvailable ? "#199FD9" : "#bfbfbfa8", cursor: val.isAvailable ? "pointer" : "not-allowed", width: "100px", textAlign: "center", borderRadius: "10px" }} key={index} onClick={() => val.isAvailable && handleSlotOpen(doctorData?.user_Name, doctorData?.doctor_Address, val.endTime, dateString[index])}>{`${val.endTime.split('T')[1].split(":")[0]}:${val.endTime.split('T')[1].split(":")[1]}`}</Box>)}
                                    </>
                                  )
                                })}


                              </Box>


                            </Box>

                          </CustomTabPanel>
                        </>
                      )
                    })}

                    <Box sx={{ width: "90%", mx: "auto", backgroundColor: "#42A5F5", px: 1, py: 1.5, fontSize: "12px", lineHeight: 1.4, textAlign: "center", borderRadius: "4px", mb: 3, color: "white" }}>
                      After you have submitted the appointment request, we might call to confirm the preferred appointment slot.

                    </Box>
                    <Box sx={{ width: "90%", mx: "auto", px: 1, fontSize: "12px", lineHeight: 1.4, borderRadius: "4px", pb: 1 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{doctorData?.remarkArea}</Typography>
                        </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", py: .5 }}>
                        <Typography sx={{ fontSize: "12px" }}>{doctorData?.doctor_Address}</Typography>
                        <Typography sx={{ fontSize: "12px" }}>Max 30min wait time</Typography>
                        </Box>

                    </Box>

                  </Box>
                </Box>

              </Box>

            </>

          ) : (

            <>
              {/* Render content when data is not available */}
              <DataNotFound />

            </>
          )}


          <MobileAppBanner />
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
      fee: "600", // hard coded for now
      slot_time: details.time
    }

    try {
      const response = await DoctorService.BookSlot(booking_data);
      if (!response.isSuccess) {
        enqueueSnackbar(response.ErrorMessage, { variant: 'error' });
        return;
      } else {
        enqueueSnackbar('Otp is sent on you phone number', { variant: 'success' });
        setDisabled(true);
        setOpenOtpBox(true);
      }
    } catch (error) {
      console.log(error)
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }

    // Action for continue
  }

  const handleInput = (e) => {
    if (e.target.value.length === 10) {
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

  }

  return (
    <>
      <Dialog open={open} maxWidth="md" fullWidth sx={{ textAlign: "center" }} onClose={() => onClose()} aria-describedby="alert-dialog-slide-description" keepMounted>
        <DialogTitle fontSize={19} lineHeight={1} fontWeight={600}>Book Slot</DialogTitle>

        <DialogContent >
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
                  <Typography width="100%" sx={{ color: "black", fontSize: 15, pr: 1, lineHeight: 2 }}>{details.consultantFee} ₹</Typography>
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
                <input type="text" name="" id="" style={{ width: "100%", marginTop: 4, padding: 6, border: "1px solid gray", fontSize: "14px" }} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
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
            onClick={onClose}
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


