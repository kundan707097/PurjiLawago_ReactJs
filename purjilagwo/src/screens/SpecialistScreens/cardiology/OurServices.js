import { Box, Typography } from '@mui/material'
import React from 'react'

const OurServices = () => {
    const points = [
        "Comprehensive cardiac evaluations and screenings",
        "Management of hypertension, high cholesterol, and other cardiovascular risk factors",
        "Diagnosis and treatment of heart conditions such as coronary artery disease, arrhythmias,  and heart failure",
        "Cardiac rehabilitation programs to promote heart health and recovery after cardiac events"
    ]
    return (
        <Box sx={{ px: { xs: 5, lg: 15 }, py: { xs: 3, lg: 5 }, bgcolor: "#F0F6FF", position: "relative" }}>

            <Box sx={{ height: "20rem", position: "absolute", bottom: { xs: "60%", lg: "33%" }, left: { xs: "10%", lg: "8%" } }}>
                <img src="../images/Cardiology/img11.svg" alt="" height={"100%"} />
            </Box>

            <Typography sx={{ fontSize: { xs: "30px", lg: "80px" }, fontWeight: 800, textAlign: { xs: "center", lg: "left" },mb:{xs:2, lg:0} }}><span style={{ color: "#64EBB6" }}>Your Heart, </span><span style={{ color: "#1C4188" }}>Our Priority</span></Typography>

            <Typography sx={{ color: "#263238", fontWeight: 400, fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>Welcome to our cardiology practice, where we specialize in providing expert care  for your heart health. Led by a team of experienced cardiologists, we are dedicated to  helping you achieve and maintain optimal cardiovascular wellness.</Typography>

            <Typography sx={{ color: "#1C4188", fontWeight: 700, fontSize: {xs:"30px", lg:"48px"},mt:{xs: 4, lg:2} }}>Our Services Include:</Typography>

            <Box sx={{ fontSize: { xs: "20px", lg: "24px" }, color: "#263238", mb: 4,  }}>
                <ul style={{ fontWeight: 400, }}>
                    {points.map((items, index) => (
                        <li style={{ margin: "15px 0px" }}>{items}</li>
                    ))}
                </ul>

            </Box>
            <Typography sx={{ color: "#263238", fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>At our practice, we understand the importance of a healthy heart in your overall well-being.  Whether you are seeking preventive care or treatment for a heart condition, our team is  committed to providing compassionate care and personalized treatment options tailored  to your unique needs.</Typography>



        </Box>
    )
}

export default OurServices