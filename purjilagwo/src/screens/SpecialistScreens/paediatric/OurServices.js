import { Box, Typography } from '@mui/material'
import React from 'react'

const OurServices = () => {
    const points = [
        "Well-child visits and developmental screenings",
        "Vaccinations and immunizations according to the latest guidelines",
        "Treatment of common childhood illnesses such as colds, flu, and ear infections",
        "Parenting support and guidance on nutrition, behavior, and growth milestones"
    ]
    return (
        <Box sx={{ px: { xs: 5, lg: 15 }, py: { xs: 3, lg: 5 }, bgcolor: "#F0F6FF", position: "relative" }}>

            <Box sx={{ height: {xs: "14rem", lg: "18rem"}, position: "absolute", bottom: { xs: "70%", lg: "24%" }, right: { xs: "1%", lg: "20%" }, display: {xs: "none", lg: "block"} }}>
                <img src="../images/Paediatric/img10.svg" alt="" height={"100%"} />
            </Box>

            <Typography sx={{ fontSize: { xs: "30px", lg: "80px" }, fontWeight: 800, textAlign: { xs: "center", lg: "left" },mb:{xs:2, lg:0} }}><span style={{ color: "#64EBB6" }}>Nurturing </span><span style={{ color: "#1C4188" }}>Your Child's Health</span></Typography>

            <Typography sx={{ color: "#263238", fontWeight: 400, fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>Welcome to our pediatric practice, where we specialize in providing  compassionate and comprehensive care for children of all ages. Led by a team of  experienced pediatricians, we are dedicated to ensuring the health and well-being of your  little ones.</Typography>

            <Typography sx={{ color: "#1C4188", fontWeight: 700, fontSize: {xs:"30px", lg:"48px"},mt:{xs: 4, lg:2} }}>Our Services Include:</Typography>

            <Box sx={{ fontSize: { xs: "20px", lg: "24px" }, color: "#263238", mb: 4,  }}>
                <ul style={{ fontWeight: 400, }}>
                    {points.map((items, index) => (
                        <li style={{ margin: "15px 0px" }}>{items}</li>
                    ))}
                </ul>

            </Box>
            <Typography sx={{ color: "#263238", fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>We understand that every child is unique, and we strive to create a nurturing and childfriendly environment where they feel comfortable and cared for. Your child's health and  happiness are our top priorities, and we look forward to partnering with you in their journey  to a healthy future.</Typography>



        </Box>
    )
}

export default OurServices