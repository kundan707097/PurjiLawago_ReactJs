import { Box, Typography } from '@mui/material'
import React from 'react'

const OurServices = () => {
    const points = [
        "Comprehensive eye exams and vision screenings",
        "Treatment of common eye conditions such as cataracts, glaucoma, and macular  degeneration",
        "Comprehensive eye exams and vision screenings",
        "Contact lens fittings and eyewear prescriptions"
    ]
    return (
        <Box sx={{ px: { xs: 5, lg: 15 }, py: { xs: 3, lg: 5 }, bgcolor: "#F0F6FF", position: "relative" }}>

            <Box sx={{ height: {xs: "16rem", lg: "16rem"}, position: "absolute", bottom: { xs: "46%", lg: "33%" }, right: { xs: "2%", lg: "30%" } }}>
                <img src="../images/EyeCare/img6.svg" alt="" height={"100%"} />
            </Box>

            <Typography sx={{ fontSize: { xs: "30px", lg: "80px" }, fontWeight: 800, textAlign: { xs: "center", lg: "left" },mb:{xs:2, lg:0} }}><span style={{ color: "#64EBB6" }}>See the </span><span style={{ color: "#1C4188" }}>World Clearly</span></Typography>

            <Typography sx={{ color: "#263238", fontWeight: 400, fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>Welcome to our eyecare practice, where we specialize in providing  comprehensive eye care services for patients of all ages. Led by a team of experienced  ophthalmologists and optometrists, we are dedicated to helping you achieve and maintain  optimal vision health.</Typography>

            <Typography sx={{ color: "#1C4188", fontWeight: 700, fontSize: {xs:"30px", lg:"48px"},mt:{xs: 4, lg:2} }}>Our Services Include:</Typography>

            <Box sx={{ fontSize: { xs: "20px", lg: "24px" }, color: "#263238", mb: 4,  }}>
                <ul style={{ fontWeight: 400, }}>
                    {points.map((items, index) => (
                        <li style={{ margin: "15px 0px" }}>{items}</li>
                    ))}
                </ul>

            </Box>
            <Typography sx={{ color: "#263238", fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>We understand the importance of clear vision in your daily life, and we are committed to  providing personalized care to help you see the world more clearly. Whether you are due for a routine eye exam or seeking treatment for an eye condition, our team is here to help you  preserve your vision and enhance your quality of life.</Typography>



        </Box>
    )
}

export default OurServices