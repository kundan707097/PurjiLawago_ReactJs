import { Box, Typography } from '@mui/material'
import React from 'react'

const Landing = () => {
    return (
        <Box sx={{position:"relative"}}>
            <Box>
                <Box sx={{ mx: { xs: 2, lg: "auto" }, background: "linear-gradient(-90deg, rgba(93, 242, 184, 0.22) 0%, rgba(255, 255, 255, 0.582345) 46.45%, #64EBB6 100%)", width: { xs: "initial", lg: "35%" }, p: 1, my: { xs: 2, lg: 6 }, borderRadius: "200px"  }}>

                    <Typography sx={{ color: "#1C4188", fontSize: { xs: "20px", lg: "32px" }, textAlign: { xs: "center", lg: "center" } }}>
                        “Join the best Be the best”
                    </Typography>
                </Box>

                <Box sx={{ color: "#1C4188", textAlign: { xs: "center", lg: "center" }, px: { xs: 2, lg: 22 },  mx: "auto",  }}>
                    <Typography sx={{ fontWeight: 900, fontSize: { xs: "25px", lg: "60px" }, lineHeight: 0.8 }}>Comprehensive Kidney Care:</Typography>
                    <Typography sx={{ fontWeight: 900, fontSize: { xs: "25px", lg: "60px" } }}>Our Specialized Services</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: "18px", lg: "20px" }, color: "#5D6566", width: {xs: "100%", lg: "50%"}, mx: "auto" }}>Whether it's providing daily walks, ensuring their meals are nutritious and timely, or giving them a cozy place.</Typography>
                </Box>


                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, pl: { xs: 0, lg: 0 }, pt: { xs: 3, lg: 6 }, mx: { xs: 1, lg: "0" }, pb: { xs: 4, lg: 0 } }}>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            border: "1px solid #42A5F5",
                            px: 0,
                            backgroundColor: "white",
                            flexDirection: "row",
                            color: "black", borderRadius: "12px",
                            width: { xs: "100%", lg: "45rem" },
                            mx: "auto"

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


                            />



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

                            />






                        </Box>

                        <Box sx={{ backgroundColor: "#64EBB6", borderRadius: "8px 12px 12px 8px", display: "flex", px: 2, alignItems: "center", color: "white", cursor: "pointer", width: "40%", justifyContent: "center", border: "none" }} component={"button"} >
                            <Typography sx={{ ml: 1, fontSize: { xs: '10px', lg: "15px" }, mr: 1, }}>SEARCH </Typography>
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <img src="../../images/DoctorList/arrow_circle_left.svg" alt="" />
                            </Box>
                        </Box>
                    </Box>

                </Box>


            </Box>

            <Box sx={{ height: { xs: "4rem", lg: "10rem" }, position: "absolute", top: { xs: "93%", lg: "6%" }, left: { xs: "50%", lg: "6%" } }}>
                <img src="../images/Nephrology/img1.svg" alt="" height={"100%"} />
            </Box>

            <Box sx={{ height: { xs: "4rem", lg: "6rem" }, position: "absolute", top: { xs: "18%", lg: "6%" }, right: { xs: "62%", lg: "6%" },display:{xs: "none", lg: "block"} }}>
                <img src="../images/Nephrology/img1.svg" alt="" height={"100%"} />
            </Box>

            <Box sx={{ height: { xs: "6rem", lg: "10rem" }, position: "absolute", bottom: { xs: "-5rem", lg: "0" }, left: { xs: "20%", lg: "6%" } }}>
                <img src="../images/Nephrology/img2.svg" alt="" height={"100%"} />
            </Box>

            <Box sx={{ height: { xs: "6rem", lg: "10rem" }, position: "absolute", bottom: { xs: "-5rem", lg: "0" }, right: { xs: "20%", lg: "6%" } }}>
                <img src="../images/Nephrology/img3.svg" alt="" height={"100%"} />
            </Box>


        </Box>
    )
}

export default Landing