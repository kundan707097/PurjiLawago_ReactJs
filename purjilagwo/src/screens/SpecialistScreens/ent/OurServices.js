import { Box, Typography } from '@mui/material'
import React from 'react'

const OurServices = () => {
    const points = [
        "Diagnosis and treatment of ear infections, sinusitis, and allergies.",
        "Hearing evaluations and treatment for hearing loss and balance disorders.",
        "Surgical procedures for tonsillectomy, adenoidectomy, and septoplasty.",
        "Voice and swallowing evaluations and treatment for voice disorders and swallowing  difficulties."
    ]
    return (
        <Box sx={{ px: { xs: 5, lg: 15 }, py: { xs: 3, lg: 5 }, bgcolor: "#F0F6FF", position: "relative" }}>

            <Box sx={{ height: {xs: "16rem", lg: "22rem"}, position: "absolute", bottom: { xs: "70%", lg: "33%" }, right: { xs: "1%", lg: "3%" } }}>
                <img src="../images/Ent/img14.svg" alt="" height={"100%"} />
            </Box>

            <Typography sx={{ fontSize: { xs: "30px", lg: "80px" }, fontWeight: 800, textAlign: { xs: "center", lg: "left" },mb:{xs:2, lg:0} }}><span style={{ color: "#64EBB6" }}>Enhancing Your </span><span style={{ color: "#1C4188" }}>Quality of Life</span></Typography>

            <Typography sx={{ color: "#263238", fontWeight: 400, fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>Welcome to our otolaryngology practice, where we specialize in providing expert  care for conditions affecting the ear, nose, and throat. Led by a team of experienced ENT  specialists, we are dedicated to helping you breathe easier, hear better, and improve your  overall quality of life.</Typography>

            <Typography sx={{ color: "#1C4188", fontWeight: 700, fontSize: {xs:"30px", lg:"48px"},mt:{xs: 4, lg:2} }}>Our Services Include:</Typography>

            <Box sx={{ fontSize: { xs: "20px", lg: "24px" }, color: "#263238", mb: 4,  }}>
                <ul style={{ fontWeight: 400, }}>
                    {points.map((items, index) => (
                        <li style={{ margin: "15px 0px" }}>{items}</li>
                    ))}
                </ul>

            </Box>
            <Typography sx={{ color: "#263238", fontSize: {xs:"20px", lg:"25px"},  textAlign: { xs: "justify", lg: "left" }, }}>We understand the impact that ear, nose, and throat conditions can have on your daily life,  and we are committed to providing personalized care to help you find relief and improve  your well-being. Whether you are dealing with a chronic sinus issue or experiencing hearing  loss, our team is here to provide expert diagnosis and treatment options tailored to your  unique needs.</Typography>



        </Box>
    )
}

export default OurServices