import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Box>
            <Box sx={{ height: { xs: "100%", lg: "90%" }, width: "100%", position: "relative" }}>
                <img src="../images/EmergencyBooking/bg.svg" alt="" height={"100%"} width={"100%"} />

                <Box sx={{ position: { xs: "relative", lg: "absolute" }, bottom: { xs: "78px", lg: "60px" }, bgcolor: "#FF697F99", color: "white", px: { xs: 1, lg: 4 }, py: 2, borderRadius: "10px", left: { xs: 0, lg: "24%" } }}>

                    <Box sx={{ background: "linear-gradient(180deg, #FBFFFD 0%, #AEDEC4 100%)", color: "#1C4188", textAlign: "center", borderRadius: "10px", py: 1, mb: { xs: 1, lg: 3 }, fontWeight: 600, width: { xs: "60%", lg: "50%" }, mx: "auto" }}>
                        <Typography sx={{ fontSize: { xs: "14px", lg: "18px" }, }}>
                            “Join the best Be the best”

                        </Typography >
                        <Typography sx={{ fontSize: { xs: "14px", lg: "18px" }, }}>“Join us be the best”</Typography>

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
                                }}
                            >
                                <img src="../../images/DoctorList/location.svg" alt="" style={{ height: "18px" }} />
                                <input
                                    style={{
                                        border: "none",
                                        color: "#42A5F5",
                                        width: "80%",
                                        marginLeft: "5px",
                                    }}
                                    id="searchLocation"
                                    type="text"
                                    placeholder="Location"

                                />


                            </Box>

                            <Box
                                sx={{
                                    my: "10px",
                                    width: "80%",
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
                                />

                            </Box>

                            <Box sx={{ backgroundColor: "#64EBB6", borderRadius: "8px 12px 12px 8px", display: "flex", px: 2, alignItems: "center", color: "white", cursor: "pointer", width: "40%", justifyContent: "center", }}>
                                <Typography sx={{ ml: 1, fontSize: { xs: '10px', lg: "15px" }, mr: 1, }}>SEARCH </Typography>
                                <Box sx={{ display: { xs: "none", md: "block" } }}>
                                    <img src="../../images/DoctorList/arrow_circle_left.svg" alt="" />
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                    <Box sx={{ mt: { xs: 2, lg: 3 }, display: "flex", justifyContent: "center" }}>

                        <Link to="/" style={{ zIndex: 999 }}>
                            <Box sx={{ bgcolor: "#64EBB647", width: { xs: "150px", lg: "250px" }, textAlign: "center", p: { xs: .6, lg: 1.3 }, borderRadius: 3, fontSize: { xs: "12px", lg: "15px" },fontWeight: 500, color: "white", border: "2px solid white", "&:hover": { color: "#42A5F5", backgroundColor: "white" },display:"flex", justifyContent:"center" }}>
                                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                                    <img src="../images/EmergencyBooking/image217.svg" alt="" height={"20px"} style={{ marginRight: 10 }} />
                                </Box>
                                895646456454
                            </Box>
                        </Link>

                        <Link to="/doctorlist" style={{ marginLeft: 20, zIndex: 999 }}>
                            <Box sx={{ bgcolor: "#64EBB647", width: { xs: "150px", lg: "250px" }, textAlign: "center", p: { xs: .6, lg: 1.3 }, borderRadius: 3, fontSize: { xs: "12px", lg: "15px" }, fontWeight: 500, color: "white", border: "2px solid white", "&:hover": { color: "#42A5F5", backgroundColor: "white" } }}>
                                Purjilagwo@gmail.com
                            </Box>
                        </Link>

                    </Box>

                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", m: 6, mx: { xs: 6, lg: 15 }, flexDirection: { xs: "column", lg: "row" }, mt: { xs: -4, lg: 6 } }}>
                <Box sx={{ width: { xs: "100%", lg: "24%" }, border: "1px solid #64EBB6", boxShadow: "0 0 4px #00000040", p: 2, mb: { xs: 3, lg: 0 } }}>
                    <Box sx={{ bgcolor: "#64EBB633", width: "80px" }}>
                        <img src="../images/EmergencyBooking/image222.svg" alt="" style={{ padding: "10px" }} width={"100%"} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "22px", color: "black", my: 1 }}>Emergency Doctor</Typography>
                        <Typography sx={{ fontSize: "18px", color: "#9099AB", fontWeight: 400, textAlign: "justify" }}>Emergency doctors are trained to
                            quickly assess patients and diag
                            nose their conditions,</Typography>
                    </Box>

                </Box>
                <Box sx={{ width: { xs: "100%", lg: "24%" }, border: "1px solid #64EBB6", boxShadow: "0 0 4px #00000040", p: 2, mb: { xs: 3, lg: 0 } }}>
                    <Box sx={{ bgcolor: "#64EBB633", width: "80px" }}>
                        <img src="../images/EmergencyBooking/image223.svg" alt="" style={{ padding: "10px" }} width={"100%"} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "22px", color: "black", my: 1 }}>Emergency Ambulance</Typography>
                        <Typography sx={{ fontSize: "18px", color: "#9099AB", fontWeight: 400, textAlign: "justify" }}>Emergency doctors are trained to
                            quickly assess patients and diag
                            nose their conditions,</Typography>
                    </Box>

                </Box>
                <Box sx={{ width: { xs: "100%", lg: "24%" }, border: "1px solid #64EBB6", boxShadow: "0 0 4px #00000040", p: 2, mb: { xs: 3, lg: 0 } }}>
                    <Box sx={{ bgcolor: "#64EBB633", width: "80px" }}>
                        <img src="../images/EmergencyBooking/image224.svg" alt="" style={{ padding: "10px" }} width={"100%"} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "22px", color: "black", my: 1 }}>Emergency Booking</Typography>
                        <Typography sx={{ fontSize: "18px", color: "#9099AB", fontWeight: 400, textAlign: "justify" }}>Emergency doctors are trained to
                            quickly assess patients and diag
                            nose their conditions,</Typography>
                    </Box>

                </Box>
                <Box sx={{ width: { xs: "100%", lg: "24%" }, border: "1px solid #64EBB6", boxShadow: "0 0 4px #00000040", p: 2, mb: { xs: 3, lg: 0 } }}>
                    <Box sx={{ bgcolor: "#64EBB633", width: "80px" }}>
                        <img src="../images/EmergencyBooking/image225.svg" alt="" style={{ padding: "10px" }} width={"100%"} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "22px", color: "black", my: 1 }}>Medical Services</Typography>
                        <Typography sx={{ fontSize: "18px", color: "#9099AB", fontWeight: 400, textAlign: "justify" }}>Emergency doctors are trained to
                            quickly assess patients and diag
                            nose their conditions,</Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Landing