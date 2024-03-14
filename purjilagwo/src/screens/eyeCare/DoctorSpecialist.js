import { Typography, Box } from '@mui/material'
import React from 'react'

const DoctorSpecialist = () => {

    const displayData = [
        {
            label: "Retina Specialist",
            img: "../images/EyeCare/img1.svg"
        },
        {
            label: "Cornea Specialist",
            img: "../images/EyeCare/img2.svg"
        },
        {
            label: "Glaucoma",
            img: "../images/EyeCare/img3.svg"
        },
        {
            label: " Ophthalmologist",
            img: "../images/EyeCare/img4.svg"
        },
    ]
    return (
        <Box sx={{ mx: { xs: 5, lg: 15 }, my: { xs: 3, lg: 5 } }}>

            <Box sx={{ width: {xs: "100%", lg:"70%"}, mx: "auto", textAlign: {xs: "justify", lg:"center"}, mb:{xs:10, lg:4} }}>
                <Typography sx={{ fontSize: { xs: "24px", lg: "40px" }, fontWeight: 600, color: "#1C4188", textAlign:"center" }}>
                    Eye Doctor Specialties
                </Typography>
                <Typography sx={{ color: "#9099AB", fontSize: { xs: "18px", md: "20px" }, mt: 2 }}>These specialists focus on the diagnosis and treatment of diseases affecting the retina and vitreous, such as diabetic retinopathy, age-related macular degeneration, and retinal detachments.These specialists focus on the diagnosis and treatment of diseases affecting .</Typography>

            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", m: 6, mx: { xs: 6, lg: 15 }, flexDirection: { xs: "column", lg: "row" }, mt: { xs: -4, lg: 6 } }}>
                {displayData.map((items, index) => {
                    return (
                        <Box sx={{ width: { xs: "100%", lg: "24%" }, mb: { xs: 6, lg: 0 }, position: "relative" }}>
                            <Box sx={{ width: "100%" }}>
                                <img src={items.img} alt="" width={"100%"} />
                            </Box>
                            <Box sx={{ bgcolor: "#42A5F5", p: 2, position: "absolute", bottom: "-1.3rem", left: "16%", width: "70%" }}>
                                <Typography sx={{ fontWeight: 400, fontSize: "15px", color: "white", textAlign: "center" }}>{items.label}</Typography>
                            </Box>
                        </Box>
                    )
                })}

            </Box>

        </Box>
    )
}

export default DoctorSpecialist