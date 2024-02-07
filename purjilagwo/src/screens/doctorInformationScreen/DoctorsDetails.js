import React, { useState, useEffect } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TabScrollButton, Typography, Avatar } from '@mui/material';
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
  const [activeTab, setActiveTab] = useState(1);
  const [doctorData, setDoctorData] = useState(null); // uncomment this and remove the dummy data
  const [timeSlots, setTimeSlots] = useState([]);
  const [dateString, setDateString] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentDate = new Date();
  const [openSlot, setopenSlot] = useState(false);
  const [details, setDetails] = useState(false); // useState for the details that we passing in the dialog box


  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
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

  return (
    <>

      {loading ? <Loading /> : (
        <>
          {doctorData !== null ? (
            <div className="doctor-wrapper">
              <div className="doc-flex">
                <div className="main-col">
                  <main>
                    <div className="doc-row">
                      <div className="doc-col-1">
                        <div className="doc-img">
                          <img src="../../images/doc-1.jpg"></img>
                        </div>
                      </div>
                      <div className="doc-col-2">
                        <div className="text-content">
                          <h2 className="doc-name">{doctorData?.user_Name} </h2>
                          <p className="doc-details">{doctorData?.education}</p>
                          <p className="doc-exp">24 Years Experience Overall  (17 years as specialist)</p>
                          <p className="doc-desc">{doctorData?.description} </p>
                        </div>

                        <div className="icon-content">
                          <div className="icon-1">
                            <img src="../../images/verified.svg" />
                            <p>Medical Registration Verified</p>
                          </div>

                          <div className="icon-2">
                            <img src="../../images/thumbsup.svg" />
                            <p>95%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>


                  <Box sx={{ display: { xs: "block", md: "none", backgroundColor: "white" } }}>
                    <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "black", mb: 1, p: 2 }}>Pick a time slot</Typography>
                    <Box
                      sx={{
                        flexGrow: 1,
                        width: 380,
                        bgcolor: 'background.paper',
                        mx: "auto"
                      }}
                    >
                      <Typography sx={{ textAlign: "center", py: 2, fontSize: "14px", color: "black" }}>Book an appointment for Consultation</Typography>
                      {currentDate != null && timeSlots.length !== 0 ? (
                        <Box sx={{ display: "flex" }}>
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

                                    <div style={{ marginTop: '5px', color: "black", fontSize: "8px", fontWeight: 800, color: "#01A400", fontSmooth: "10px" }}>{countSlot(index)} slot available</div>
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


                      {dateString.length !== 0 && dateString.map((items, index) => {
                        return (
                          <>
                            <CustomTabPanel value={value} index={index} key={index}>
                              {doctorData.timeSlots[dateString[index]] != undefined && doctorData.timeSlots[dateString[index]].length === 0 && (
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
                              <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap", maxHeight: "10rem", overflowY: "scroll" }}>

                                {doctorData.timeSlots[dateString[index]] !== undefined && doctorData.timeSlots[dateString[index]].map((val, i) => {
                                  return (
                                    <>
                                      <Box sx={{ fontSize: "12px", px: 1, py: 0.8, border: val.isAvailable ? "1px solid #199FD9" : "1px solid #bfbfbfa8", mr: 1, mb: 1, color: val.isAvailable ? "#199FD9" : "#bfbfbfa8", cursor: val.isAvailable ? "pointer" : "not-allowed", width: "75px", textAlign: "center", borderRadius: "3px" }} key={i} onClick={() => val.isAvailable && handleSlotOpen(doctorData?.user_Name, doctorData?.doctor_Address, val.startTime, dateString[index])} >{`${val.startTime.split('T')[1].split(":")[0]}:${val.startTime.split('T')[1].split(":")[1]}`}</Box>
                                      {i + 1 === doctorData.timeSlots[dateString[index]].length && (<Box sx={{ fontSize: "12px", px: 1, py: 0.8, border: val.isAvailable ? "1px solid #199FD9" : "1px solid #bfbfbfa8", mr: 1, mb: 1, color: val.isAvailable ? "#199FD9" : "#bfbfbfa8", cursor: val.isAvailable ? "pointer" : "not-allowed", width: "75px", textAlign: "center", borderRadius: "3px" }} key={index} onClick={() => val.isAvailable && handleSlotOpen(doctorData?.user_Name, doctorData?.doctor_Address, val.endTime, dateString[index])}>{`${val.endTime.split('T')[1].split(":")[0]}:${val.endTime.split('T')[1].split(":")[1]}`}</Box>)}
                                    </>
                                  )
                                })}


                              </Box>

                            </CustomTabPanel>
                          </>
                        )
                      })}

                      <Box sx={{ width: "90%", mx: "auto", backgroundColor: "#D1EEFA", px: 1, py: 1.5, fontSize: "12px", lineHeight: 1.4, textAlign: "center", borderRadius: "4px", mb: 3 }}>
                        After you have submitted the appointment request, we might call to confirm the preferred appointment slot.

                      </Box>
                      <Box sx={{ width: "90%", mx: "auto", px: 1, fontSize: "12px", lineHeight: 1.4, textAlign: "center", borderRadius: "4px", pb: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", }}><Typography sx={{ fontSize: "14px", fontWeight: 600 }}>Manipal Hospital</Typography><Typography sx={{ fontSize: "12px" }}>₹ 650</Typography></Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", py: .5 }}><Typography sx={{ fontSize: "12px" }}>Jayanagar 9 block</Typography><Typography sx={{ fontSize: "12px" }}>Max 30min wait time</Typography></Box>

                      </Box>

                    </Box>
                  </Box>

                  <div className="block-1">
                    <ul className="block1-nav">
                      <li className={activeTab === 1 ? 'active' : ''}><a onClick={() => handleTabClick(1)}>Info</a></li>
                      <li className={activeTab === 2 ? 'active' : ''}><a onClick={() => handleTabClick(2)}>Stories(27)</a></li>
                      <li className={activeTab === 3 ? 'active' : ''}><a onClick={() => handleTabClick(3)}>Consult Q&A</a></li>
                    </ul>

                    <div class="block1-wrapper">
                      <div className="info-tab" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                        <div className="info-tab-container">
                          <div class="add-col">
                            <div className="title-row">
                              <img src="../images/address.svg" />
                              <h3>Address</h3>
                            </div>
                            <p className="hospital-name fw-m">Manipal Hospital</p>
                            <p>{doctorData?.doctor_Address}</p>
                          </div>

                          <div className="time-col">
                            <div className="time-container">
                              <div className="title-row">
                                <img src="../images/timing.svg" />
                                <h3>Timing</h3>
                              </div>
                              <p className="days days-1 fw-m">Mon, Fri</p>
                              <p>{doctorData?.doctorsTimeAvailability}</p>
                              <p className="days days-2 fw-m">Tue - Thu, Sat</p>
                              <p>06:00 PM - 08:00 PM</p>
                            </div>
                          </div>

                          <div className="price-col">
                            <div className="title-row">
                              <h3>Consultation Fee</h3>
                            </div>
                            <p className="fees">₹ 650</p>
                            <div className="prime-row">
                              <p className="prime fw-m">Prime</p>
                              <div className="tick"></div>
                            </div>
                            <p>Max. 30 mins wait + Verified details</p>
                          </div>
                        </div>

                        <div className="btn-container">
                          <button>Book Appointment</button>
                          <p>No booking fees</p>
                        </div>
                      </div>

                      <div className="stories-tab" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                        <h2>Patient stories for {doctorData?.user_Name}</h2>
                        <p className="desc">These are patient’s opinions and do not necessarily reflect the doctor’s medical capabilities. <a href="#">Read more</a></p>

                        <div className="topbar">
                          <p>27 Stories</p>
                          <div className="sorting-options">
                            <label for="cars">Sort by:</label>

                            <select name="sort" id="sort-by">
                              <option value="recent">Recent</option>
                              <option value="Most helpful">Most Helpful</option>
                            </select>
                          </div>
                        </div>

                        <div className="story">
                          <div className="col-dp">
                            <div className="dp">A</div>
                          </div>

                          <div className="col-story">
                            <div className="name-row">
                              <p className="name">Adanoor Residency</p>
                              <img src="../images/verified-user.svg" className="verified-user" />
                            </div>
                            <p className="time">3 years ago</p>
                            <p className="story-content">
                              Due to allergic condition of the scalp, I wanted to consult the best dermatologist. That is when I found {doctorData?.user_Name} through Practo. I am extremely gratified with her consultation. The given treatment was a great relief. After a deep analysis, she explained the condition evidently. She has given the follow-up date as well. I will definitely continue my further treatment with her.
                            </p>

                            <div className="recommending-doc">
                              <p>I recommend the doctor</p>
                              <img src="../images/thumbsup.svg" />
                            </div>
                          </div>

                          <img src="../images/quote-right.svg" />
                        </div>

                        <div className="story">
                          <div className="col-dp">
                            <div className="dp">S</div>
                          </div>

                          <div className="col-story">
                            <div className="name-row">
                              <p className="name">Sakshi Sharma</p>
                              <img src="../images/verified-user.svg" className="verified-user" />
                            </div>
                            <p className="time">1 month ago</p>
                            <p className="story-content">
                              After completing three of my sessions, things are going well. I am happy about the progressive treatment. {doctorData?.user_Name}  is very considerate. She has given all the needful advice. But the waiting period is really bothersome. My consultation has been delayed for an hour sometimes. If the schedules can be arranged carefully, this might be avoided. Otherwise, everything is perfect.
                            </p>

                            <div className="recommending-doc">
                              <p>I do not recommend the doctor</p>
                              <img src="../images/thumbsup.svg" className="donot-recomm" />
                            </div>
                          </div>

                          <img src="../images/quote-right.svg" />
                        </div>

                        <div className="story">
                          <div className="col-dp">
                            <div className="dp">A</div>
                          </div>

                          <div className="col-story">
                            <div className="name-row">
                              <p className="name">Adanoor Residency</p>
                              <img src="../images/verified-user.svg" className="verified-user" />
                            </div>
                            <p className="time">3 years ago</p>
                            <p className="story-content">
                              Due to allergic condition of the scalp, I wanted to consult the best dermatologist. That is when I found {doctorData?.user_Name}  through Practo. I am extremely gratified with her consultation. The given treatment was a great relief. After a deep analysis, she explained the condition evidently. She has given the follow-up date as well. I will definitely continue my further treatment with her.
                            </p>

                            <div className="recommending-doc">
                              <p>I recommend the doctor</p>
                              <img src="../images/thumbsup.svg" />
                            </div>
                          </div>

                          <img src="../images/quote-right.svg" />
                        </div>

                        <div className="story">
                          <div className="col-dp">
                            <div className="dp">S</div>
                          </div>

                          <div className="col-story">
                            <div className="name-row">
                              <p className="name">Sakshi Sharma</p>
                              <img src="../images/verified-user.svg" className="verified-user" />
                            </div>
                            <p className="time">1 month ago</p>
                            <p className="story-content">
                              After completing three of my sessions, things are going well. I am happy about the progressive treatment. {doctorData?.user_Name}  is very considerate. She has given all the needful advice. But the waiting period is really bothersome. My consultation has been delayed for an hour sometimes. If the schedules can be arranged carefully, this might be avoided. Otherwise, everything is perfect.
                            </p>

                            <div className="recommending-doc">
                              <p>I do not recommend the doctor</p>
                              <img src="../images/thumbsup.svg" className="donot-recomm" />
                            </div>
                          </div>

                          <img src="../images/quote-right.svg" />
                        </div>
                      </div>

                      <div className="qna-tab" style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                        <div className="topbar">
                          <h3>Common question & answers</h3>
                        </div>

                        <div className="qna-container">
                          <div className="qna">
                            <p className="question">Q: Where does {doctorData?.user_Name}  practice?</p>
                            <p className="answer"><span class="fw-b">A: </span>{doctorData?.user_Name}   practices at Manipal Hospital - Jayanagar 9 Block</p>
                          </div>

                          <div className="qna">
                            <p className="question">Q: How can I take {doctorData?.user_Name} appointment?</p>
                            <p className="answer"><span class="fw-b">A: </span>You can take <a href="javascript:void(0)">{doctorData?.user_Name}</a> appointment online through Practo for in-clinic visit with the doctor.</p>
                          </div>

                          <div className="qna">
                            <p className="question">Q: Why do patients visit {doctorData?.user_Name}?</p>
                            <p className="answer"><span class="fw-b">A: </span>Patients frequently visit {doctorData?.user_Name}  for PRP Hair Transplantation, Hair Weaving & Bonding, Sun Burn Treatment. To see more reasons visit the <a href="javascript:void(0)">doctor's profile</a> on Practo.</p>
                          </div>

                          <div className="qna">
                            <p className="question">Q: What do patients say about {doctorData?.user_Name}?</p>
                            <p className="answer"><span class="fw-b">A: </span>{doctorData?.user_Name} has been recommended by 74 patients and has recieved stories from 27 patients. You can <a href="javascript:void(0)">read detailed patient stories</a> of the doctor on Practo.</p>
                          </div>

                          <div className="qna">
                            <p className="question">Q: What is {doctorData?.user_Name} education qualification?</p>
                            <p className="answer"><span class="fw-b">A: </span>{doctorData?.user_Name} has the following qualifications - MBBS, DNB - Dermatology, Venereology & Leprosy. You can <a href="javascript:void(0)">book the doctor</a> through the doctor's profile on Practo.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="block-2">
                    <div className="block2-container1">
                      <div className="titlebar">
                        <h3>Services</h3>
                        <a href="">View all (68)</a>
                      </div>

                      <ul>
                        <li>PRP Hair Transplantation</li>
                        <li>Cheek Augmentation</li>
                        <li>keloid/scar treatment</li>
                        <li>Syphilis Treatment</li>
                        <li>Leprosy Treatment/Rehab</li>

                        <li>Hair Weaving & Bonding</li>
                        <li>Thread Lift</li>
                        <li>Bacterial Skin Infection Treatment</li>
                        <li>Gonorrhea Treatment</li>
                        <li>Chemical Peel</li>

                        <li>Sun Burn Treatment</li>
                        <li>Anti Aging Treatment</li>
                        <li>Melanoma Treatment</li>
                        <li>Glutathione - Skin Whitening</li>
                        <li>Skin Polishing</li>
                      </ul>
                    </div>

                    <div className="block2-container2">
                      <div className="ul-wrapper">
                        <div className="titlebar">
                          <h3>Specializations</h3>
                        </div>

                        <ul>
                          <li>Dermatologist</li>
                          <li>Cosmetologist</li>
                        </ul>
                      </div>

                      <div className="ul-wrapper">
                        <div className="titlebar">
                          <h3>Awards and Recognitions</h3>
                        </div>
                        <ul>
                          <li>Asia-pacific at the L`Oreal Social Responsibility Awards in Dermatology</li>
                          <li>World Congress of Dermatology, Vancouver, Canada, June 2015</li>
                          <li>IADVL-KT Community Dermatology Award</li>
                        </ul>
                      </div>
                    </div>

                    <div className="block2-container3">
                      <div className="ul-wrapper">
                        <div className="titlebar">
                          <h3>Education</h3>
                        </div>

                        <ul>
                          <li>{doctorData?.education}</li>
                        </ul>
                      </div>

                      <div className="ul-wrapper">
                        <div className="titlebar">
                          <h3>Memberships</h3>
                          <a >View all (9)</a>
                        </div>
                        <ul>
                          <li>Karnataka Medical Council</li>
                          <li>ife Member, Indian Association of Dermatologists, Venereologists and Leprologists</li>
                          <li>Life Member, Geriatric Society of India</li>
                          <li>EC Member, Bangalore Dermatology Society, India</li>
                          <li>National Advisor, First Conference on Community Dermatology. Rajahmundry, AP. 2nd August, 2015</li>
                        </ul>
                      </div>
                    </div>

                    <div className="block2-container4">
                      <div className="ul-wrapper">
                        <div className="titlebar">
                          <h3>Experience</h3>
                        </div>

                        <ul>
                          <li>2003 - 2003 Consultant dermatologist at HDeepti Nursing Home</li>
                          <li>2004 - 2005 Senior resident/tutor at Skin Institute and School of Dermatology</li>
                          <li>2009 - 2009 Consultant dermatologist at Kaya Skin Clinic</li>
                          <li>2011 - 2013 Medical Superintendent and Consultant Dermatologist at Hairline International Hair and Skin Clinic</li>
                        </ul>
                      </div>

                      <div className="ul-wrapper">
                        <div className="titlebar">
                          <h3>Registrations</h3>
                        </div>
                        <ul>
                          <li>53039 Karnataka Medical Council, 1999</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "black", mb: 1 }}>Pick a time slot</Typography>
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: 380,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Typography sx={{ textAlign: "center", py: 2, fontSize: "14px", color: "black" }}>Book an appointment for Consultation</Typography>

                    {currentDate != null && timeSlots.length !== 0 ? (
                      <Box sx={{ display: "flex" }}>
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

                                  <div style={{ marginTop: '5px', fontSize: "8px", fontWeight: 800, color: "#01A400", fontSmooth: "10px" }}>{countSlot(index)} slot available</div>
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
                            <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap", maxHeight: "10rem", overflowY: "scroll" }}>

                              {doctorData.timeSlots[dateString[index]] !== undefined && doctorData.timeSlots[dateString[index]].map((val, i) => {
                                return (
                                  <>
                                    <Box sx={{ fontSize: "12px", px: 1, py: 0.8, border: val.isAvailable ? "1px solid #199FD9" : "1px solid #bfbfbfa8", mr: 1, mb: 1, color: val.isAvailable ? "#199FD9" : "#bfbfbfa8", cursor: val.isAvailable ? "pointer" : "not-allowed", width: "75px", textAlign: "center", borderRadius: "3px" }} key={i} onClick={() => val.isAvailable && handleSlotOpen(doctorData?.user_Name, doctorData?.doctor_Address, val.startTime, dateString[index])} >{`${val.startTime.split('T')[1].split(":")[0]}:${val.startTime.split('T')[1].split(":")[1]}`}</Box>
                                    {i + 1 === doctorData.timeSlots[dateString[index]].length && (<Box sx={{ fontSize: "12px", px: 1, py: 0.8, border: val.isAvailable ? "1px solid #199FD9" : "1px solid #bfbfbfa8", mr: 1, mb: 1, color: val.isAvailable ? "#199FD9" : "#bfbfbfa8", cursor: val.isAvailable ? "pointer" : "not-allowed", width: "75px", textAlign: "center", borderRadius: "3px" }} key={index} onClick={() => val.isAvailable && handleSlotOpen(doctorData?.user_Name, doctorData?.doctor_Address, val.endTime, dateString[index])}>{`${val.endTime.split('T')[1].split(":")[0]}:${val.endTime.split('T')[1].split(":")[1]}`}</Box>)}
                                  </>
                                )
                              })}


                            </Box>

                          </CustomTabPanel>
                        </>
                      )
                    })}

                    <Box sx={{ width: "90%", mx: "auto", backgroundColor: "#D1EEFA", px: 1, py: 1.5, fontSize: "12px", lineHeight: 1.4, textAlign: "center", borderRadius: "4px", mb: 3 }}>
                      After you have submitted the appointment request, we might call to confirm the preferred appointment slot.

                    </Box>
                    <Box sx={{ width: "90%", mx: "auto", px: 1, fontSize: "12px", lineHeight: 1.4, textAlign: "center", borderRadius: "4px", pb: 1 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", }}><Typography sx={{ fontSize: "14px", fontWeight: 600 }}>Manipal Hospital</Typography><Typography sx={{ fontSize: "12px" }}>₹ 650</Typography></Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", py: .5 }}><Typography sx={{ fontSize: "12px" }}>Jayanagar 9 block</Typography><Typography sx={{ fontSize: "12px" }}>Max 30min wait time</Typography></Box>

                    </Box>

                  </Box>
                </Box>

              </div>
            </div>
          ) : (

            <>
              {/* Render content when data is not available */}
              <DataNotFound />

            </>
          )}
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
      if (!response.IsSuccess) {
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
      if (!response.IsSuccess) {
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
          <Box sx={{ display: "flex", width: "100%", mt: 1, flexDirection: {xs: "column", sm: "row"} }}>
            {/* Box for Doctor Details */}
            <Box sx={{ width: {xs: "100%", sm: "50%"} }}>
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
                    Name
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
                    Consultant fee
                  </Typography>
                  <span style={{ marginRight: "2rem" }}>:</span>
                  <Typography width="100%" sx={{ color: "black", fontSize: 15, pr: 1, lineHeight: 2 }}>₹600</Typography>
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
            <Box sx={{width: {xs: "100%", sm: "50%"}, textAlign: "left", ml: {xs: 0, sm:4}, mt: {xs: 4, sm:0}, }}>
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


