import { Search } from '@carbon/icons-react';
import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, resolvePath, useNavigate } from 'react-router-dom';
import DoctorService from '../../services/Doctor.services';

const Landing = () => {
    
  const navigate = useNavigate();
    const [searchLocation, setSearchLocation] = useState("");
    const [searchName, setSearchName] = useState("");
    const locationSearchRef = useRef(null);
    const nameSearchRef = useRef(null);
    const [isVisible, setIsVisible] = useState({
        locationVisible: false,
        nameVisible: false,
    });
    const [location, setLocation] = useState(null);
    const [doctorName, setDoctorName] = useState(null);

    const dummy_location = ["Siwan", "Patna", "Delhi", "Kolkata"]
    const dummy_name = ["Vicky Jaiswal", "Pankaj", "Pradumdha", "Salukhe"]


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

    useEffect(() => {
        (async () =>{
            if(searchLocation !== "" && searchLocation.length > 2){
                const response = await DoctorService.AllDocInfo()
                if(response !== null || response !== undefined){
                    setLocation(response)
                }
            }else if(searchName !== "" && searchName.length >2){
                const response = await DoctorService.AllDocInfo();
                if(response !== null || response !== undefined){
                    setDoctorName(response)
                }
            }
        })()
    }, [searchLocation, searchName])

    const handleSearch = () =>{
        console.log(searchLocation)
        console.log(searchName);
        if(searchLocation !== ""){
            navigate(`/doctorlist/${searchLocation}`)
        }else if(searchName !== ""){
            navigate(`/doctorlistbyId/${searchName}`)
        }
    }
    

    return (
        <Box>
            <Box sx={{ height: { xs: "100%", lg: "90%" }, width: "100%", position: "relative" }}>
                <img src="../images/EmergencyBooking/bg.svg" alt="" height={"100%"} width={"100%"} />

                <Box sx={{ position: { xs: "relative", lg: "absolute" }, bottom: { xs: "78px", lg: "60px" }, bgcolor: "#FF697F99", color: "white", px: { xs: 1, lg: 4 }, py: 2, borderRadius: "10px", left: { xs: 0, lg: "24%" } }}>

                    <Box sx={{ background: "linear-gradient(180deg, #FBFFFD 0%, #AEDEC4 100%)", color: "#1C4188", textAlign: "center", borderRadius: "10px", py: 2, mb: { xs: 1, lg: 3 }, fontWeight: 600, width: { xs: "60%", lg: "50%" }, mx: "auto" }}>
                        <Typography sx={{ fontSize: { xs: "14px", lg: "18px" }, }}>
                            “Join the best Be the best”

                        </Typography >

                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontWeight: 800, fontSize: { xs: "20px", lg: "50px" }, lineHeight: 0.7 }}>Emergency</Typography>
                        <Typography sx={{ fontWeight: 800, fontSize: { xs: "20px", lg: "50px" }, }}>Doctor Services</Typography>
                    </Box>

                    {/* Search box */}

                    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                border: "1px solid #42A5F5",
                                px: 0,
                                backgroundColor: "white",
                                flexDirection: "row",
                                color: "black", borderRadius: "12px",
                                width: { xs: "100%", lg: "45rem" }

                            }}
                        >
                            <Box
                                sx={{
                                    borderRight: { xs: "none", sm: "none", md: "2px solid grey" },
                                    my: "10px",
                                    mx: { md: "10px" },
                                    width: "50%",
                                    py: { xs: 0, lg: "2px" },
                                    px: { xs: "2px", md: 0 },
                                    position: "relative",
                                    zIndex: 999
                                }}
                            >
                                <img src="../../images/DoctorList/location.svg" alt="" style={{ height: "18px" }} />
                                <input
                                    style={{
                                        border: "none",
                                        width: "80%",
                                        marginLeft: "5px",
                                    }}
                                    id="searchLocation"
                                    type="text"
                                    placeholder="Location"
                                    value={searchLocation}
                                    onInput={(e) => {
                                        setSearchLocation(e.target.value)
                                        setIsVisible({ locationVisible: true });
                                        setSearchName("")
                                    }}

                                />

                                {searchLocation.length >= 3 && (

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

                                        {dummy_location.map((location) => (
                                            <Box component={"button"} sx={{
                                                display: "flex", alignItems: "center", px: 1, bgcolor: "white", ":hover": {
                                                    backgroundColor: "#e3e3e3",
                                                }, width: "100%", border: "1px solid #afafaf",
                                                color: "black",

                                            }}
                                            // onClick={() => {
                                            //     setSearchLocation(location.city);
                                            //     setIsVisible({ locationVisible: false });
                                            //     handleDoctorListSelect(location.city);
                                            // }} 
                                            >

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
                                                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>{location}</Typography>
                                                </Box>
                                            </Box>
                                        ))}


                                    </Box>

                                )}

                            </Box>

                            <Box
                                sx={{
                                    my: "10px",
                                    width: "80%",
                                    mx: { md: "5px" },
                                    py: { xs: 0, lg: "2px" },
                                    position: "relative",
                                    zIndex: 999
                                }}
                            >
                                <img src="../../images/DoctorList/policy.svg" alt="" height={"18px"} />
                                <input
                                    id="doctorsName"
                                    type="text"
                                    style={{
                                        border: "none",
                                        marginLeft: "5px",
                                        width: "80%",
                                    }}
                                    placeholder="Search doctors, clinics, hospitals,etc"
                                    value={searchName}
                                    onInput={(e) => {
                                        setSearchName(e.target.value);
                                        setIsVisible({ nameVisible: true });
                                        setSearchLocation("")
                                    }}
                                />

                                {searchName.length >= 3 && (
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

                                        {dummy_name.map((name) => (

                                            <Box component={"button"} sx={{
                                                display: "flex", alignItems: "center", px: 1, bgcolor: "white", ":hover": {
                                                    backgroundColor: "#F5F5F5"
                                                }, width: "100%", border: "1px solid #afafaf"
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
                                                    <Typography sx={{ color: "black" }}>{name}</Typography>
                                                </Box>

                                            </Box>


                                        ))}

                                    </Box>

                                )}

                            </Box>

                            <Box sx={{ backgroundColor: "#64EBB6", borderRadius: "8px 12px 12px 8px", display: "flex", px: 2, alignItems: "center", color: "white", cursor: "pointer", width: "40%", justifyContent: "center", border:"none" }} component={"button"} onClick={handleSearch}>
                                <Typography sx={{ ml: 1, fontSize: { xs: '10px', lg: "15px" }, mr: 1, }}>SEARCH </Typography>
                                <Box sx={{ display: { xs: "none", md: "block" } }}>
                                    <img src="../../images/DoctorList/arrow_circle_left.svg" alt="" />
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                    <Box sx={{ mt: { xs: 2, lg: 3 }, display: "flex", justifyContent: "center" }}>

                        <Link to="/">
                            <Box sx={{ bgcolor: "#64EBB647", width: { xs: "150px", lg: "250px" }, textAlign: "center", p: { xs: .6, lg: 1.3 }, borderRadius: 3, fontSize: { xs: "12px", lg: "15px" }, fontWeight: 500, color: "white", border: "2px solid white", "&:hover": { color: "#42A5F5", backgroundColor: "white" }, display: "flex", justifyContent: "center" }}>
                                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                                    <img src="../images/EmergencyBooking/image217.svg" alt="" height={"20px"} style={{ marginRight: 10 }} />
                                </Box>
                                895646456454
                            </Box>
                        </Link>

                        <Link to="/doctorlist" style={{ marginLeft: 20 }}>
                            <Box sx={{ bgcolor: "#64EBB647", width: { xs: "150px", lg: "250px" }, textAlign: "center", p: { xs: .6, lg: 1.3 }, borderRadius: 3, fontSize: { xs: "12px", lg: "15px" }, fontWeight: 500, color: "white", border: "2px solid white", "&:hover": { color: "#42A5F5", backgroundColor: "white" } }}>
                                Purjilagwo@gmail.com
                            </Box>
                        </Link>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Landing