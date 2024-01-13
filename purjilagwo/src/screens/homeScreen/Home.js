import React, { useState, useEffect } from 'react';
import Services from "../../components/Home/Services";
import Department from "../../components/Home/Departments";
import BookAppointment from "../../components/Home/BookAppointment";
import ServiceForYou from "../../components/Home/ServiceForYou";
import Navbar from "../../components/Navbar";
import Service from '../../components/Home/Service';
import TopDoctors from '../../components/Home/TopDoctors';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { HealthCross, Phone, Stethoscope } from '@carbon/icons-react';
import MedicationIcon from '@mui/icons-material/Medication';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Landing from '../../components/Home/Landing';


function Home() {

    const [locationData, setLocationData] = useState([]);
    const [searchLocation, setSearchLocation] = useState('');
    const [searchName, setSearchName] = useState('');
    const [counterOn, setCounterOn] = useState(false);

    useEffect(() => {
        debugger
        const fetchLocationInformation = async () => {
            try {
                const response = await fetch('https://localhost:44324/DoctorsInformation');
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    setLocationData(data);
                }
            } catch (error) {
                console.error('Error fetching location information:', error);
            }
        };

        fetchLocationInformation();
    }, []);

    const filteredLocations = locationData.filter((location) =>
    (location.city || '').toLowerCase().includes(searchLocation.toLowerCase())
    );
    const filteredLocationsData = locationData.filter((location) => {
      const lowercasedSearchName = searchName.toLowerCase();
      const lowercasedFirstName = (location.city || '').toLowerCase();
      if (lowercasedFirstName.includes(lowercasedSearchName)) {
        location.nonRepetitiveFirstName = lowercasedFirstName;
        return true;
      }
      return false;
    });

    const filteredName = locationData.filter((location) =>
<<<<<<< Updated upstream
    (location.user_Name || '').toLowerCase().includes(searchName.toLowerCase())
    );
    const filteredNameData = locationData.filter((location) => {
      const lowercasedSearchName = searchName.toLowerCase();
      const lowercasedFirstName = (location.user_Name || '').toLowerCase();
      if (lowercasedFirstName.includes(lowercasedSearchName)) {
        location.nonRepetitiveFirstName = lowercasedFirstName;
        return true;
      }
      return false;
    });
=======
        location.first_Name.toLowerCase().includes(searchName.toLowerCase())
    );
>>>>>>> Stashed changes

    const handleDoctorListSelect = (selectedLocation) => {
        window.location.href = `/doctorlist/${selectedLocation}`;
    };

    const handledoctorNameSelect = (selectedLocation) => {
        window.location.href = `/doctorsdetails/${selectedLocation}`;
    };

    return (
        <>

            {/* <Navbar /> */}


            {/* <section className="section mainBannerArea">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-12">
                            <div className="bannerContent">
                                <h2>Hello there!</h2>
                                <p> Always caring about your health, we are here to help you!</p>
                                <div className="btn-inline">
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Book Appointment with Doctors <i className="fa-solid fa-angles-right"></i></button>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Buy Medicine and Essentials <i className="fa-solid fa-angles-right"></i></button>
                                </div>
                                <div className="input-group mb-3 findLocation mt-3">
                                    <span className="input-group-text"><i className="fa-solid fa-location-dot"></i></span>

                                    <div>
                                        <input
                                            id="searchLocation"
                                            type="text"
                                            className="form-control"
                                            placeholder="Location"
                                            aria-label=""
                                            list="locationList"
                                            value={searchLocation}
                                            onInput={(e) => {
                                                setSearchLocation(e.target.value);
                                                if (filteredLocations.some((location) => location.city === e.target.value)) {
                                                    handleDoctorListSelect(e.target.value);
                                                }
                                            }}
                                        />
                                        {searchLocation.length >= 3 && (
                                            <datalist id="locationList">
                                                {filteredLocationsData.map((location) => (
                                                    <option
                                                        key={`${location.id}location`}
                                                        value={location.city}

                                                    />
                                                ))}
                                            </datalist>
                                        )}
                                    </div>
                                    <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                                    <div>
                                        <input
                                            id="doctorsName"
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            aria-label=""
                                            list="doctorsList"
                                            value={searchName}
                                            onInput={(e) => {
                                                setSearchName(e.target.value);
                                                debugger;
                                                const arrayOfWords = e.target.value.split(" ");
                                                if (filteredName.some((name) => name.user_Name === e.target.value)) {
                                                    debugger
                                                    handledoctorNameSelect(filteredName[0].id);
                                                }
                                            }}
                                        />
                                        {searchName.length >= 3 && (
                                            <datalist id="doctorsList">
                                                {filteredNameData.map((name) => (
                                                    <option
                                                        key={`${name.id}doctor`}
                                                        value={`${name.user_Name}`}

                                                    />
                                                ))}
                                            </datalist>
                                        )}
                                    </div>
                                  

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bannerImg"></div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* <section className="section introVido_area spt0">
                <div className="container">
                    <div className="introVideoWrap">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="section_title aboutVidoe">
                                    <h2 className="common__Title-sc-1e9isft-10 gkwLHp">Deliver stunning <span>video</span></h2>
                                    <p className="common__Subheading-sc-1e9isft-12 begqnA subheading">Dynamically resize, crop, compress, and more with the URL-based video transformation parameters. Trim videos, overlay text or images, and personalize videos for every user.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <video className="border media-with-dots-without-shadow" width="" autoPlay="" loop="" muted="" playsInline=""><source src="https://ik.imgkit.net/ikmedia/video-api/Dynamically_resize_video_lgTM6FGbJo.mp4?tr=w-1000" type="video/mp4" />Your browser does not support the video tag.</video>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <Services /> */}
            {/* <Department /> */}
            {/* <BookAppointment /> */}
            {/* <ServiceForYou /> */}



            <Landing />

            <Box sx={{ backgroundColor: "#42A5F5", padding: "20px", display: "flex", justifyContent: "space-evenly", flexDirection: { xs :"column" ,sm: "row"}}}>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    <HealthAndSafetyIcon style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black", fontSize: "50px" }} />
                    <Typography sx={{ my: "10px", fontWeight: 600 }}>Best Treatment</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Experience the Pinnacle of Care.</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Discover the Best Treament Options.</Typography>
                </Box>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    <MinorCrashIcon style={{ backgroundColor: "white", padding: "10px", fontSize: "50px", borderRadius: "100px", color: "black" }} />
                    <Typography sx={{ my: "10px", fontWeight: 600 }}>Emergency Help</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Urgent Help, Right When You Need it.</Typography>
                    <Typography sx={{ fontSize: "13px" }}>27-7 Emergency Assistance.</Typography>
                </Box>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    <Stethoscope size={50} style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black" }} />
                    <Typography sx={{ my: "10px", fontWeight: 600 }}>Qualified Doctors</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Expertise You Can Trust.</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Meet Our Qualified Doctors Today.</Typography>
                </Box>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    <MedicationIcon style={{ backgroundColor: "white", borderRadius: "100px", color: "black", fontSize: "50px", padding: "10px" }} />
                    <Typography sx={{ my: "10px", fontWeight: 600 }}>Top Medical Staff</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Discover Our Dedicated Medical Team.</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Your Wellness Journey Begins Now.</Typography>
                </Box>


            </Box>

            <Service />

            <TopDoctors />

            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                
            <Box sx={{ backgroundColor: "#42A5F5", padding: "20px", display: "flex", justifyContent: "space-evenly", flexDirection: { xs :"column" ,sm: "row"} }}>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    {/* <HealthAndSafetyIcon style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black", fontSize: "50px" }} /> */}
                    {counterOn && (<>
                    <Box style={{fontSize: "40px"}} >
                    <CountUp start={0}  end={1000} duration={3} delay={0} style={{marginRight: "4px"}} />
                    <span>+</span>
                    </Box>
                    </>)}
                    
                    <Typography sx={{ my: "10px", fontWeight: 800, fontSize: "30px" }}>Active Visitors</Typography>
                </Box>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    {/* <HealthAndSafetyIcon style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black", fontSize: "50px" }} /> */}
                    {counterOn && (<>
                    <Box style={{fontSize: "40px"}} >
                    <CountUp start={0}  end={500} duration={2} delay={0} style={{marginRight: "4px"}} />
                    <span>+</span>
                    </Box>
                    </>)}
                    
                    <Typography sx={{ my: "10px", fontWeight: 800, fontSize: "30px" }}>Doctors</Typography>
                </Box>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    {/* <HealthAndSafetyIcon style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black", fontSize: "50px" }} /> */}
                    {counterOn && (<>
                    <Box style={{fontSize: "40px"}} >
                    <CountUp start={0}  end={10000} duration={4} delay={0} style={{marginRight: "4px"}} />
                    <span>+</span>
                    </Box>
                    </>)}
                    
                    <Typography sx={{ my: "10px", fontWeight: 800, fontSize: "30px" }}>Patient Treated</Typography>
                </Box>



            </Box>

            </ScrollTrigger>

            <a href="tel:+6205316232">

                <Fab color="primary" aria-label="add" sx={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#42A5F5" }}>

                    <Phone />
                </Fab>
            </a>


        </>
    );
}

export default Home;
