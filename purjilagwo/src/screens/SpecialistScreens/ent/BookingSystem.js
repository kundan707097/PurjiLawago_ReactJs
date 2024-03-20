import React from 'react'
import { Box, Typography } from '@mui/material'

const BookingSystem = () => {
    return (
        <Box sx={{ my: { xs: 5, lg: 15 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, position:"relative" }}>
            <Box sx={{ height: { xs: "25rem", lg: "35rem" } }}>
                <img src="../images/Ent/img7.svg" alt="" height={"100%"}  />
            </Box>

            <Box sx={{pl:{xs:1, lg:20}, mt: {xs: 5,lg:0}}}>

                <Box sx={{display: {xs:"flex", lg: "initial"}, flexDirection:"column", }}>
                    <Typography sx={{color: "#1492F7",fontSize: "30px", fontWeight: 700,textAlign:{xs: "center", lg:"left"}}}>Our Doctor</Typography>
                    <Typography sx={{color: "#64EBB6",fontSize: "30px",fontWeight: 700,textAlign:{xs: "center", lg:"left"}}}>Appointment</Typography>
                    <img src="../images/Home/Line23.svg" alt="" height={"3px"} />
                </Box>

                <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between", flexDirection: { xs: "column", lg: 'row' }, alignItems: { xs: "center", lg: "normal" } }}>


                    <Box sx={{ width: { xs: "100%", lg: "100%" }, display: "flex", }}>
                        <Box sx={{ width: { xs: "100%", lg: "50%" }, ml: { lg: 2 }, mx: { xs: 2, lg: 0 }, }}>
                            <Box>
                                <img
                                    src="../images/Home/calendar_month.svg"
                                    alt=""
                                    style={{
                                        height: "70px",
                                        padding: 15,
                                        backgroundColor: "#F0F6FF",
                                        borderRadius: "4px",
                                        width: "70px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#8B8B8B",
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        mt: 2,
                                    }}
                                >
                                    {" "}
                                    Book Appointment{" "}
                                    <span style={{ color: "#02A0E7" }}>(01)</span>
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#848A90",
                                        fontSize: "15px",
                                        fontWeight: 400,
                                        mt: 1,
                                    }}
                                >
                                    {" "}
                                    It is a long established fact that by the readable content of
                                    a The point of using Lorem Ipsu
                                </Typography>
                            </Box>

                            <Box sx={{ mt: 8 }}>
                                <img
                                    src="../images/Home/add_card.svg"
                                    alt=""
                                    style={{
                                        height: "70px",
                                        padding: 15,
                                        backgroundColor: "#F0F6FF",
                                        borderRadius: "4px",
                                        width: "70px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#8B8B8B",
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        mt: 2,
                                    }}
                                >
                                    {" "}
                                    Payment Clear <span style={{ color: "#02A0E7" }}>(03)</span>
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#848A90",
                                        fontSize: "15px",
                                        fontWeight: 400,
                                        mt: 1,
                                    }}
                                >
                                    {" "}
                                    It is a long established fact that by the readable content of
                                    a The point of using Lorem Ipsu
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: { xs: "100%", lg: "50%" }, ml: { xs: 1, lg: 6 }, mt: 6 }}>
                            <Box>
                                <img
                                    src="../images/Home/respiratory_rate.svg"
                                    alt=""
                                    style={{
                                        height: "70px",
                                        padding: 15,
                                        backgroundColor: "#F0F6FF",
                                        borderRadius: "4px",
                                        width: "70px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#8B8B8B",
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        mt: 2,
                                    }}
                                >
                                    {" "}
                                    Select Doctor <span style={{ color: "#02A0E7" }}>(02)</span>
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#848A90",
                                        fontSize: "15px",
                                        fontWeight: 400,
                                        mt: 1,
                                    }}
                                >
                                    {" "}
                                    It is a long established fact that by the readable content of
                                    a The point of using Lorem Ipsu
                                </Typography>
                            </Box>

                            <Box sx={{ mt: 8 }}>
                                <img
                                    src="../images/Home/blood_pressure.svg"
                                    alt=""
                                    style={{
                                        height: "70px",
                                        padding: 15,
                                        backgroundColor: "#F0F6FF",
                                        borderRadius: "4px",
                                        width: "70px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#8B8B8B",
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        mt: 2,
                                    }}
                                >
                                    {" "}
                                    Booking Time <span style={{ color: "#02A0E7" }}>(04)</span>
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#848A90",
                                        fontSize: "15px",
                                        fontWeight: 400,
                                        mt: 1,
                                    }}
                                >
                                    {" "}
                                    It is a long established fact that by the readable content of
                                    a The point of using Lorem Ipsu
                                </Typography>
                            </Box>
                        </Box>
                    </Box>


                </Box>


            </Box>

            <Box sx={{ height: { xs: "12rem", lg: "15rem" }, position: "absolute", bottom: { xs: "60%", lg: "8%" }, left: { xs: "59%", lg: "23%" } }}>
                <img src="../images/Ent/img8.svg" alt="" height={"100%"} />
            </Box>


        </Box>
    )
}

export default BookingSystem