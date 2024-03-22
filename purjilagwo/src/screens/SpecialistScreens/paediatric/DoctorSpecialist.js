import { Typography, Box } from '@mui/material'
import React from 'react'

const DoctorSpecialist = () => {

    const displayData = [
        {
            label: "24/7 Doctor",
            img: "../images/Paediatric/img5.svg"
        },
        {
            label: "Baby Delivery",
            img: "../images/Paediatric/img6.svg"
        },
        {
            label: "Mother care",
            img: "../images/Paediatric/img7.svg"
        },
        {
            label: "Baby Care",
            img: "../images/Paediatric/img8.svg"
        },
    ]
    return (
        <Box sx={{ mx: { xs: 5, lg: 15 }, my: { xs: 3, lg: 5 } }}>

            <Box sx={{ width: {xs: "100%", lg:"70%"}, mx: "auto", textAlign: {xs: "justify", lg:"center"}, mb:{xs:10, lg:4} }}>
                <Typography sx={{ fontSize: { xs: "24px", lg: "40px" }, fontWeight: 600, color: "#1C4188", textAlign:"center" }}>
                Baby care Specialties
                </Typography>
                <Typography sx={{ color: "#9099AB", fontSize: { xs: "18px", md: "20px" }, mt: 2 }}>Schedule regular check-ups with your pediatrician for vaccinations, growth monitoring, and developmental assessments. Don’t hesitate to contact your doctor if you notice any concerning symptoms or behavior in your baby.</Typography>

            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", m: 6, mx: { xs: 6, lg: 15 }, flexDirection: { xs: "column", lg: "row" }, mt: { xs: -4, lg: 6 } }}>
                {displayData.map((items, index) => {
                    return (
                        <Box sx={{ width: { xs: "100%", lg: "24%" }, mb: { xs: 6, lg: 0 }, position: "relative", bgcolor: "#42A5F5" }}>
                            <Box sx={{ width: "100%" }}>
                                <img src={items.img} alt="" width={"100%"} />
                            </Box>
                            <Box sx={{ bgcolor: "#64EBB6", p: 2, position: "absolute", bottom: "-1.3rem", left: "16%", width: "70%" }}>
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