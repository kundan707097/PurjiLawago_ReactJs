import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography, Container, Paper, Stack, Avatar } from '@mui/material';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { Search } from '@carbon/icons-react';


import '../../style/DoctorList.css';
import DoctorService from '../../services/Doctor.services';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import DataNotFound from '../../components/DataNotFound';
import LiveCounter from '../../components/LiveCounter';

const data = [
    {
      "id": 1,
      "user_Name": "Dr. John Smith",
      "profile_Picture": "https://example.com/images/doc-1.jpg",
      "doctorsTimeAvailability": "10:00 AM - 4:00 PM",
      "consultantFee": 500,
      "doctor_Address": "123 Main St, New York, NY",
      "experience": "10 years",
      "speciality": "Cardiologist"
    },
    {
      "id": 2,
      "user_Name": "Dr. Emily Johnson",
      "profile_Picture": "https://example.com/images/doc-2.jpg",
      "doctorsTimeAvailability": "9:00 AM - 3:00 PM",
      "consultantFee": 450,
      "doctor_Address": "456 Elm St, Los Angeles, CA",
      "experience": "8 years",
      "speciality": "Dermatologist"
    },
    {
      "id": 3,
      "user_Name": "Dr. Michael Brown",
      "profile_Picture": "https://example.com/images/doc-3.jpg",
      "doctorsTimeAvailability": "11:00 AM - 5:00 PM",
      "consultantFee": 400,
      "doctor_Address": "789 Oak St, Chicago, IL",
      "experience": "12 years",
      "speciality": "Neurologist"
    },
    {
      "id": 4,
      "user_Name": "Dr. Sarah Davis",
      "profile_Picture": "https://example.com/images/doc-4.jpg",
      "doctorsTimeAvailability": "10:30 AM - 4:30 PM",
      "consultantFee": 550,
      "doctor_Address": "321 Pine St, Houston, TX",
      "experience": "15 years",
      "speciality": "Pediatrician"
    },
    {
      "id": 5,
      "user_Name": "Dr. James Wilson",
      "profile_Picture": "https://example.com/images/doc-5.jpg",
      "doctorsTimeAvailability": "8:00 AM - 2:00 PM",
      "consultantFee": 350,
      "doctor_Address": "654 Maple St, Phoenix, AZ",
      "experience": "7 years",
      "speciality": "Orthopedic Surgeon"
    },
    {
      "id": 6,
      "user_Name": "Dr. Linda Martinez",
      "profile_Picture": "https://example.com/images/doc-6.jpg",
      "doctorsTimeAvailability": "9:30 AM - 3:30 PM",
      "consultantFee": 600,
      "doctor_Address": "987 Birch St, Philadelphia, PA",
      "experience": "20 years",
      "speciality": "Gynecologist"
    },
    {
      "id": 7,
      "user_Name": "Dr. Robert Moore",
      "profile_Picture": "https://example.com/images/doc-7.jpg",
      "doctorsTimeAvailability": "10:00 AM - 4:00 PM",
      "consultantFee": 500,
      "doctor_Address": "123 Cedar St, Dallas, TX",
      "experience": "10 years",
      "speciality": "Oncologist"
    },
    {
      "id": 8,
      "user_Name": "Dr. Laura Taylor",
      "profile_Picture": "https://example.com/images/doc-8.jpg",
      "doctorsTimeAvailability": "7:00 AM - 1:00 PM",
      "consultantFee": 300,
      "doctor_Address": "456 Spruce St, San Diego, CA",
      "experience": "5 years",
      "speciality": "Psychiatrist"
    },
    {
      "id": 9,
      "user_Name": "Dr. William Lee",
      "profile_Picture": "https://example.com/images/doc-9.jpg",
      "doctorsTimeAvailability": "12:00 PM - 6:00 PM",
      "consultantFee": 450,
      "doctor_Address": "789 Willow St, Seattle, WA",
      "experience": "9 years",
      "speciality": "Endocrinologist"
    },
    {
      "id": 10,
      "user_Name": "Dr. Olivia Walker",
      "profile_Picture": "https://example.com/images/doc-10.jpg",
      "doctorsTimeAvailability": "8:30 AM - 2:30 PM",
      "consultantFee": 400,
      "doctor_Address": "321 Aspen St, Miami, FL",
      "experience": "6 years",
      "speciality": "General Physician"
    }
  ];
  

function Doctors() {
    
    const { groupId } = useParams();
    const { location: routeLocation } = useParams();
    const [location, setLocation] = useState(routeLocation || ''); // Initialize with the route location if available
    const [doctorInfo, setDoctorInfo] = useState(data);
    const [doctorName, setDoctorName] = useState(groupId || '');
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState({
        locationVisible: false,
        nameVisible: false,
    });

    const locationSearchRef = useRef(null);
    const nameSearchRef = useRef(null);

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Add smooth scrolling effect
        });
      }, [])
      

    useEffect(() => {
        (async () => {
            try {
                if (location === "" || (location !== "" && location.length > 2)) {
                    setLoading(true);
                    let response = null;
                    if (groupId) {
                        response = await DoctorService.AllDoctorsListInSpeciality(groupId);
                    }
                    else if (location) {
                        response = await DoctorService.DocInfoOnLocation(location);
                    }
                    else {
                        response = await DoctorService.AllDocInfo();
                    }

                    if (response !== undefined) {
                        setDoctorInfo(response);
                        //.doctorsDetaiList
                        //setLoading(false); 
                    }
                    setLoading(false);
                }
                // else{
                //     let response = null;
                //     response =await DoctorService.AllDocInfo();
                //     if(response !==undefined){
                //         setDoctorInfo(response);
                //     }
                // }

            } catch (error) {
                console.error(`Error fetching doctor information: ${error.message}`);
            }
        })();
    }, [location,groupId]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (locationSearchRef.current && !locationSearchRef.current.contains(event.target)) {
                // Clicked outside the container
                setIsVisible({ locationVisible: false });
            }
            if (nameSearchRef.current && !nameSearchRef.current.contains(event.target)) {
                // Clicked outside the container
                setIsVisible({ nameVisible: false });
            }
        };

        // Add event listener on mount
        document.addEventListener('click', handleClickOutside);

        // Cleanup: remove event listener on unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nameSearchRef.current && !nameSearchRef.current.contains(event.target)) {
                // Clicked outside the container
                setIsVisible({ nameVisible: false });
            }
        };

        // Add event listener on mount
        document.addEventListener('click', handleClickOutside);

        // Cleanup: remove event listener on unmount 
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
    };
    const handledoctorNameSelect = async (id) => {
        window.location.href = `/doctorsdetails/${id}`;
    };

    const filteredLocations = doctorInfo !== null ? doctorInfo.filter((data, index, self) =>
        data.city &&
        data.city.toLowerCase().includes(location.toLowerCase()) &&
        self.findIndex((otherLocation) => otherLocation.city === data.city) === index
    )
        : [];

    const filteredDoctInfo = doctorInfo !== null
        ? doctorInfo.filter((data) =>
            data.city && data.city.toLowerCase().includes(location.toLowerCase())
        )
        : [];

    return (
        <>
            {/* {loading ? (<Loading />) : ( */}
            <>
                <Box sx={{ backgroundColor: "#F5F5F5", width: "100%", }}>



                        <Box  sx={{ position: "sticky", top: 0, backgroundColor: "#1c7cbd", }}>
                           <div className="container">                            
                            <Typography sx={{ fontSize: { xs: "16px", md: "30px" }, fontWeight: 700, color: "#fff", mb: 2, pt: 3 }}>
                                GET DOCTORS
                            </Typography>

                            {/* Search box and filter */}

                            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>

                                {/* Search box */}

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        border: "1px solid #42A5F5",
                                        px: 0,
                                        backgroundColor: "white",
                                        flexDirection: "row",
                                        color: "black", borderRadius: "12px",
                                        width: { xs: "100%", lg: "70%" }

                                    }}
                                >
                                    <Box
                                        sx={{
                                            borderRight: { xs: "none", sm: "none", md: "2px solid grey" },
                                            my: "10px",
                                            mx: { md: "10px" },
                                            width: "30%",
                                            py: { xs: 0, lg: "2px" },
                                            px: { xs: "2px", md: 0 },
                                            position: "relative",
                                        }}
                                    >
                                        <img src="../../images/DoctorList/location.svg" alt="" style={{ height: "18px" }} />
                                        <input
                                            style={{
                                                border: "none",
                                                color: "#42A5F5",
                                                width: "70%",
                                                marginLeft: "5px",
                                            }}
                                            id="searchLocation"
                                            type="text"
                                            placeholder="Location"
                                            list="locationList"
                                            value={location}
                                            onInput={(e) => {
                                                setIsVisible({ locationVisible: true });
                                                const selectedValue = e.target.value;
                                                setLocation(selectedValue);
                                                const matchingLocation = filteredLocations.find((data) => data.city === selectedValue);

                                                if (matchingLocation) {
                                                    // If there is a match, trigger the handleLocationChange function
                                                    handleLocationChange(selectedValue);
                                                }

                                            }}
                                        />

                                        <Box
                                            sx={{
                                                display: isVisible.locationVisible ? 'block' : 'none',
                                                position: "absolute",
                                                width: "100%",
                                                top: { xs: "40px", sm: "120px", md: "45px" },
                                                left: { xs: 3, lg: 0 },
                                            }}
                                            ref={locationSearchRef}
                                        >
                                            {/* put the map function here and remove the all the button and put the onclick on button */}

                                            {/* {filteredLocations.map((location) => ( */}
                                            <Box component={"button"} sx={{
                                                display: "flex", alignItems: "center", px: 1, bgcolor: "white", ":hover": {
                                                    backgroundColor: "#e3e3e3"
                                                }, width: "100%", border: "1px solid #F5F5F5"
                                            }}
                                                // onClick={() => {
                                                //     setSearchLocation(location.city);
                                                //     setIsVisible({ locationVisible: false });
                                                //     handleDoctorListSelect(location.city);
                                                // }} 
                                                key={location}>

                                                <Box sx={{ bgcolor: "#F5F5F5", p: .5, borderRadius: "100px", px: 1 }}>
                                                    <Search size={15} />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        p: "10px",
                                                        cursor: "pointer",
                                                        width: "100%",
                                                        textAlign: "left",
                                                    }}

                                                >
                                                    <Typography sx={{ color: "black", fontSize: { xs: "14px", md: "16px" } }}>{"Siwan"}</Typography>
                                                </Box>
                                            </Box>
                                            {/* ))} */}


                                        </Box>


                                    </Box>

                                    <Box
                                        sx={{
                                            my: "10px",
                                            width: "60%",
                                            mx: { md: "5px" },
                                            py: { xs: 0, lg: "2px" },
                                            position: "relative",
                                        }}
                                    >
                                        <img src="../../images/DoctorList/policy.svg" alt="" height={"18px"} />
                                        <input
                                            id="doctorsName"
                                            type="text"
                                            style={{
                                                border: "none",
                                                color: "#42A5F5",
                                                marginLeft: "5px",
                                                width: "80%",
                                            }}
                                            placeholder="Search doctors, clinics, hospitals,etc"
                                            list="doctorsList"
                                            value={doctorName}
                                            onInput={(e) => {
                                                setDoctorName(e.target.value);
                                                setIsVisible({ nameVisible: true });
                                                const arrayOfWords = e.target.value.split(" ");
                                                const matchingLocation = filteredLocations.find((data) => data.user_Name === e.target.value);

                                                if (matchingLocation) {
                                                    handledoctorNameSelect(matchingLocation.id);
                                                }
                                            }}

                                        />

                                        <Box
                                            sx={{
                                                display: isVisible.nameVisible ? 'block' : 'none',
                                                position: "absolute",
                                                // backgroundColor: "#F5F5F5",
                                                width: "100%",
                                                // top: { xs: "45px", sm: "0px", md: "55px" },
                                                // borderRadius: "10px",
                                                // py: "0.5rem",
                                                // left: { xs: 3, lg: "16rem" },
                                                top: { xs: "40px", sm: "120px", md: "45px" },
                                            }}
                                            ref={locationSearchRef}
                                        >
                                            {/*  put the map function here and remove the all the button and put the onclick on button */}

                                            {/* {filteredName.map((name) => ( */}

                                            <Box component={"button"} sx={{
                                                display: "flex", alignItems: "center", px: 1, bgcolor: "white", ":hover": {
                                                    backgroundColor: "#F5F5F5"
                                                }, width: "100%", border: "1px solid #F5F5F5"
                                            }}
                                            // onClick={() => {
                                            //     setSearchName(name.user_Name);
                                            //     setIsVisible({ nameVisible: false });
                                            //     handledoctorNameSelect(name.id);
                                            // }}
                                            >

                                                <Box sx={{ bgcolor: "#F5F5F5", p: .5, borderRadius: "100px", px: 1 }}>
                                                    <Search size={15} />
                                                </Box>
                                                <Box
                                                    style={{
                                                        padding: "10px",
                                                        cursor: "pointer",
                                                        width: "100%",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <Typography sx={{ color: "black" }}>{"Vicky"}</Typography>
                                                </Box>

                                            </Box>


                                            {/* ))} */}

                                        </Box>



                                    </Box>

                                    <Box sx={{ backgroundColor: "#3498db", borderRadius: "8px 12px 12px 8px", display: "flex", px: 2, alignItems: "center", color: "white", cursor: "pointer", width: "15%", justifyContent: "center", }}>
                                        {/* <Typography sx={{ ml: 1, fontSize: { xs: '10px', lg: "15px" }, mr: 1, }}>SEARCH </Typography> */}
                                        <Box sx={{ display: { md: "block" } }}>
                                            <img src="../../images/DoctorList/arrow_circle_left.svg" alt="" />
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Filter */}

                                <Box sx={{ display: "flex", mt: { xs: 3, lg: 0 }, width: { xs: "100%", lg: "30%" }, justifyContent: "end", alignItems: "center" }}>
                                    <img src="../../images/DoctorList/menu.svg" alt="" style={{ height: "18px", marginRight: "10px" }} />
                                    <img src="../../images/DoctorList/widgets.svg" alt="" style={{ height: "25px", marginRight: "10px" }} />
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            backgroundColor: "white",
                                            display: "flex",
                                            p: "10px",
                                            alignItems: "center",
                                            mr: "10px",
                                            border: "2px solid #42A5F5",
                                            cursor: "pointer",
                                            borderRadius: "10px",
                                            width: "60%",
                                            justifyContent: "space-between"
                                        }}
                                    >

                                        <Typography
                                            sx={{
                                                color: "#1C4188",
                                                fontSize: "15px",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Filter
                                        </Typography>
                                        <img src="../../images/DoctorList/tune.svg" alt="" />
                                    </Paper>

                                </Box>

                            </Box>


                            <Box sx={{ color: "black", mt: 3, pb: 1 }} >
                                {/* <Typography >Location: <span>{location}</span> </Typography> */}
                                <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#fff" }} >Total Doctor available: <span >{doctorInfo && doctorInfo.length > 0 ? (
                                    doctorInfo.length) : (0)}</span> </Typography>
                                <Box sx={{ height: "4px", width: "10%", backgroundColor: "#409FEC", mt: 1 }}>

                                </Box>
                            </Box>
                            </div>

                        </Box>
                        <Container >


                        <Stack spacing={{ xs: 2, sm: 6 }} direction="row" useFlexGap flexWrap="wrap" sx={{ justifyContent: "center", py: "20px", }}>

                            {loading ? (<Loading />) : (
                                <>
                                    {doctorInfo && doctorInfo.length > 0 ? (
                                        doctorInfo.map((doctor,index) => (
                                            <Link to={`/doctorsdetails/${index}`}>
                                                <Box sx={{ width: "350px", backgroundColor: "#F0F6FF", boxShadow:" rgba(0, 0, 0, 0.15) 0px 3px 12px 0px", borderRadius:"12px", overflow:"hidden"  }}>

                                                    {/* Avatar and price box */}

                                                    <Box sx={{ display: "flex", backgroundColor: "#3498db", width: "100%", justifyContent: "start", alignItems: "center", }}>
                                                        <Avatar
                                                            alt="Remy Sharp"
                                                            src={doctor?.profile_Picture} 
                                                            //src="../../images/doc-1.jpg"
                                                            sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }}
                                                        />
                                                        <Box sx={{ mx: 2, mt: 3 }} >
                                                            <Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>{doctor?.doctorsTimeAvailability}</Typography>
                                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                                {/* <AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} /> */}
                                                                <Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>{doctor?.consultantFee} ₹</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>

                                                    {/* Bottom box */}
                                                    <Box sx={{ backgroundColor: "#F0F6FF", pt: 6, pl: 5, height: 250 }}>
                                                        <Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>{doctor?.user_Name}</Typography>
                                                        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                                                            <img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
                                                            <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: {doctor?.doctor_Address}</Typography>
                                                        </Box>
                                                        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                                                            <img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
                                                            <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : {doctor?.experience}</Typography>
                                                        </Box>
                                                        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                                                            <img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
                                                            <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>{doctor?.speciality}</Typography>
                                                        </Box>
                                                        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                                                            <img src="../../images/DoctorList/language.svg" alt="" style={{ height: 18 }} />
                                                            <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Language : Hindi , English</Typography>
                                                        </Box>
                                                    </Box>

                                                </Box>
                                            </Link>
                                        ))

                                    ) : (
                                        <>
                                            {/* Replace the card with the not found */}

                                            <DataNotFound />

                                        </>
                                    )}


                                </>
                            )}



                        </Stack>

                    </Container>

                    <LiveCounter />
                    <Footer />

                </Box>

            </>
            {/* )} */}

        </>
    )
}

export default Doctors