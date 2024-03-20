import { Box, Typography } from '@mui/material'
import React from 'react'

const OurServices = () => {
    const points = [
        "Routine dental exams and cleanings.",
        "Treatment of common dental problems such as cavities, gum disease, and tooth decay.",
        "Cosmetic dentistry procedures including teeth whitening, veneers, and dental implants.",
        "Pediatric dentistry services for children of all ages."
    ]
    return (
        <Box sx={{ px: { xs: 5, lg: 15 }, py: { xs: 3, lg: 5 }, bgcolor: "#F0F6FF", position: "relative" }}>

            <Box sx={{ height: {xs: "16rem", lg: "16rem"}, position: "absolute", bottom: { xs: "46%", lg: "33%" }, right: { xs: "2%", lg: "10%" } }}>
                <img src="../images/Dentist/img4.svg" alt="" height={"100%"} />
            </Box>

            <Typography sx={{ fontSize: { xs: "30px", lg: "80px" }, fontWeight: 800, textAlign: { xs: "center", lg: "left" },mb:{xs:2, lg:0} }}><span style={{ color: "#64EBB6" }}>Smile Brighter, </span><span style={{ color: "#1C4188" }}>Live Happier</span></Typography>

            <Typography sx={{ color: "#263238", fontWeight: 400, fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>Welcome to our dental practice, where we specialize in providing comprehensive  oral health care for patients of all ages. Led by a team of experienced dentists and  hygienists, we are dedicated to helping you achieve and maintain a healthy, beautiful  smile.</Typography>

            <Typography sx={{ color: "#1C4188", fontWeight: 700, fontSize: {xs:"30px", lg:"48px"},mt:{xs: 4, lg:2} }}>Our Services Include:</Typography>

            <Box sx={{ fontSize: { xs: "20px", lg: "24px" }, color: "#263238", mb: 4,  }}>
                <ul style={{ fontWeight: 400, }}>
                    {points.map((items, index) => (
                        <li style={{ margin: "15px 0px" }}>{items}</li>
                    ))}
                </ul>

            </Box>
            <Typography sx={{ color: "#263238", fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>We understand the importance of oral health in your overall well-being, and we are  committed to providing personalized care to help you achieve a lifetime of healthy smiles.  Whether you are due for a routine check-up or seeking treatment for a dental issue, our  team is here to provide gentle and compassionate care in a comfortable environment.</Typography>



        </Box>
    )
}

export default OurServices