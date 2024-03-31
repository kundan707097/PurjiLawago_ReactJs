import { Box, Typography } from '@mui/material'
import React from 'react'

const OurServices = () => {
    const points = [
        "Fertility evaluations and diagnostic testing to identify underlying causes of infertility",
        "Assisted reproductive technologies such as in vitro fertilization (IVF), intrauterine  insemination (IUI), and egg freezing",
        "Fertility preservation options for individuals facing medical treatments that may impact  fertility",
        "Support services including counseling, support groups, and resources for navigating the  emotional aspects of infertility"
    ]
    return (
        <Box sx={{ px: { xs: 5, lg: 15 }, py: { xs: 3, lg: 5 }, bgcolor: "#F0F6FF",  }}>

            <Typography sx={{ fontSize: { xs: "30px", lg: "80px" }, fontWeight: 800, textAlign: { xs: "center", lg: "left" }, color: "#64EBB6" }}>Your Journey to</Typography>
            <Typography sx={{ fontSize: { xs: "30px", lg: "80px" }, fontWeight: 800, textAlign: { xs: "center", lg: "left" },mb:{xs:2, lg:4},color: "#1C4188",lineHeight:0.8}}>Parenthood Begins Here</Typography>

            <Typography sx={{ color: "#263238", fontWeight: 400, fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>Welcome to our fertility clinic, where we specialize in providing expert care and  support for individuals and couples struggling with infertility. Led by a team of experienced  fertility specialists, we are dedicated to helping you achieve your dream of starting or  expanding your family.</Typography>

            <Typography sx={{ color: "#1C4188", fontWeight: 700, fontSize: {xs:"30px", lg:"48px"},mt:{xs: 4, lg:2} }}>Our Services Include:</Typography>

            <Box sx={{ fontSize: { xs: "20px", lg: "24px" }, color: "#263238", mb: 4,  }}>
                <ul style={{ fontWeight: 400, }}>
                    {points.map((items, index) => (
                        <li style={{ margin: "15px 0px" }}>{items}</li>
                    ))}
                </ul>

            </Box>
            <Typography sx={{ color: "#263238", fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>We understand that the journey to parenthood can be challenging, and we are here to  provide compassionate care and personalized treatment options tailored to your unique  needs. Whether you are just beginning your fertility journey or seeking advanced  reproductive technologies, our team is here to support you every step of the way.</Typography>



        </Box>
    )
}

export default OurServices