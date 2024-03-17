import React from 'react'
import { Box, Typography } from '@mui/material'

const HotOffer = () => {
    return (
        <Box sx={{ bgcolor: "#42A5F55C", my: { xs: "", lg: "3rem" }, color: "white", position: "relative",mb:{xs: "", lg: "10rem"} }}>
            <Typography sx={{ fontSize: "70px", fontWeight: 700, fontFamily: "revert", color: "#1C4188", pt: 4, textAlign: "center" }}>Complete Health Checkup</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ width: "80%", mt: { xs: "", lg: "2rem" }, }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ bgcolor: "#42A5F5", p: 2, borderRadius: "0 25px 25px 0", display: "flex", alignItems: "end" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: 800, pl: 3 }} >₹ 1000</Typography>
                            <Typography sx={{ fontSize: "40px", fontWeight: 800, px: 3, borderRight: "4px solid #FF8F00" }} ><s style={{color: "white"}}>₹ 2000</s></Typography>
                            <Typography sx={{ fontSize: "40px", fontWeight: 800, pl: 3, pr: 1 }}>50% </Typography>
                            <Typography sx={{ fontSize: "25px", fontWeight: 100, }}>save</Typography>

                        </Box>
                        <Box sx={{ height: "5rem", ml: { xs: "", lg: "5rem" } }}>
                            <img src="../images/Home/image260.svg" alt="" height={"100%"} />
                        </Box>

                    </Box>

                    <Box sx={{ pl: { xs: "", lg: "200px", } }}>
                        <Box sx={{ display: "flex", mt: { xs: "1rem", lg: "3rem" }, justifyContent: "space-evenly", alignItems: "center" }}>
                            <Box>
                                <Box sx={{ height: "5rem", pt: 1 }}>
                                    <Typography sx={{ color: "black", fontSize: "40px", fontWeight: 700 }}>Includes 67 tests: </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 1, lg: 0 }, mt: 2 }}>
                                    <Box sx={{ p: { xs: 1, lg: 1.5 }, bgcolor: "#1C4188", borderRadius: "4px", height: "10px", mr: 2, }} />
                                    <Typography sx={{ color: "#263238", fontSize: { xs: "18px", lg: "28px" }, fontWeight: 500, }}>HbA1c Diabetes Test</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 1, lg: 0 }, mt: 2 }}>
                                    <Box sx={{ p: { xs: 1, lg: 1.5 }, bgcolor: "#1C4188", borderRadius: "4px", height: "10px", mr: 2, }} />
                                    <Typography sx={{ color: "#263238", fontSize: { xs: "18px", lg: "28px" }, fontWeight: 500, }}>Complate Blood Count(CBC)</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 1, lg: 0 }, mt: 2 }}>
                                    <Box sx={{ p: { xs: 1, lg: 1.5 }, bgcolor: "#1C4188", borderRadius: "4px", height: "10px", mr: 2, }} />
                                    <Typography sx={{ color: "#263238", fontSize: { xs: "18px", lg: "28px" }, fontWeight: 500, }}>Iron Deficiency Profile</Typography>
                                </Box>

                            </Box>
                            <Box>
                                <Box sx={{ height: "5rem" }}>
                                    <img src="../images/Home/Group1474.svg" alt="" height={"100%"} />
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 1, lg: 2 }, mt: 2 }}>
                                    <Box sx={{ p: { xs: 1, lg: 1.5 }, bgcolor: "#1C4188", borderRadius: "4px", height: "10px", mr: 2, }} />
                                    <Typography sx={{ color: "#263238", fontSize: { xs: "18px", lg: "28px" }, fontWeight: 500, }}>Kidney Function Panel</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 1, lg: 2 }, mt: 2 }}>
                                    <Box sx={{ p: { xs: 1, lg: 1.5 }, bgcolor: "#1C4188", borderRadius: "4px", height: "10px", mr: 2, }} />
                                    <Typography sx={{ color: "#263238", fontSize: { xs: "18px", lg: "28px" }, fontWeight: 500, }}>Liver Function Test (LFT)</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 1, lg: 2 }, mt: 2 }}>
                                    <Box sx={{ p: { xs: 1, lg: 1.5 }, bgcolor: "#1C4188", borderRadius: "4px", height: "10px", mr: 2, }} />
                                    <Typography sx={{ color: "#263238", fontSize: { xs: "18px", lg: "28px" }, fontWeight: 500, }}>Thyroid Profile (T3-TSH), More</Typography>
                                </Box>

                            </Box>


                        </Box>
                        <Box sx={{ display: "flex", mt: { xs: "1rem", lg: "1rem" }, justifyContent: "space-evenly", alignItems: "center" }}>


                        </Box>

                    </Box>

                </Box>


                <Box sx={{ height: "45rem" }}>
                    <img src="../images/Home/image258.svg" alt="" height={"100%"} />
                </Box>

            </Box>

            <Box sx={{ height: { xs: "5rem", lg: "10rem" }, position: "absolute", bottom: { xs: "8%", lg: "50%" }, right: { xs: "210px", lg: "20%" }, zIndex: 0 }}>
                <img src="../images/Home/image257.svg" alt="" height={"100%"} />
            </Box>

            <Box sx={{ height: { xs: "5rem", lg: "20rem" }, position: "absolute", bottom: { xs: "8%", lg: "25%" }, left: { xs: "2%", lg: "7%" }, zIndex: 0 }}>
                <img src="../images/Home/image261.svg" alt="" height={"100%"} />
            </Box>

            <Box sx={{ position: { xs: "relative", lg: "absolute" }, bottom: { xs: "78px", lg: "-13%" }, bgcolor: "white", color: "white", px: { xs: 1, lg: 7 }, py: 3, borderRadius: "10px", left: { xs: 0, lg: "25%" }, boxShadow: "0px 4px 10px 0px #00000040" }}>


                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: 800, fontSize: { xs: "20px", lg: "40px" }, color: "#1C4188" }}>Request a Health Advisor Callback</Typography>
                </Box>


                <Box sx={{ mt: { xs: 2, lg: 3 }, width: "100%" }}>

                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 2 }}>
                        <Box sx={{ width: { xs: "100%", lg: "49%" } }}>
                            <input type="text" name="" id="" placeholder='Your Name'
                                style={{
                                    border: "1px solid #42A5F5",
                                    padding: "10px",
                                    backgroundColor: "#1C418817",
                                    borderRadius: "8px",
                                    width: "100%",
                                    fontFamily: "nunito",
                                }}
                            />
                        </Box>
                        <Box sx={{ width: { xs: "100%", lg: "49%" } }}>
                            <input type="text" name="" id="" placeholder='Your City'
                                style={{
                                    border: "1px solid #42A5F5",
                                    padding: "10px",
                                    backgroundColor: "#1C418817",
                                    borderRadius: "8px",
                                    width: "100%",
                                    fontFamily: "nunito",
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ width: "100%", mb: 2 }}>
                        <input type="number" name="" id="" placeholder='Your Number'
                            style={{
                                border: "1px solid #42A5F5",
                                padding: "10px",
                                backgroundColor: "#1C418817",
                                borderRadius: "8px",
                                width: "100%",
                                fontFamily: "nunito",
                            }}

                        />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography sx={{ color: "#263238", fontSize: "20px", textAlign: "center" }}>*Prices may vary by city.</Typography>
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>

                        <Box sx={{ bgcolor: "#42A5F5", width: { xs: "150px", lg: "250px" }, p: { xs: .6, lg: 1 }, borderRadius: "8px", fontWeight: 500, color: "white", border: "2px solid #42A5F5", "&:hover": { color: "#42A5F5", backgroundColor: "white" } }} component={"button"}>
                            <Typography sx={{ fontSize: { xs: "12px", lg: "22px" }, textAlign: "center", }}>Book Now</Typography>
                        </Box>

                    </Box>




                </Box>

            </Box>


        </Box>
    )
}

export default HotOffer