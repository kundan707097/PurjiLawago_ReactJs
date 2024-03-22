import { Box, Typography } from '@mui/material'
import React from 'react'

const OwnHealthCare = () => {

    const points = [
        "Attend regular prenatal check-ups for thorough monitoring of maternal and fetal health.",
        "Follow a balanced diet rich in fruits, veggies, lean proteins, whole grains, and dairy for maternal and fetal nutrition.",
        "Drink plenty of water to stay hydrated and support the body's physiological changes during pregnancy.",
        "Engage in safe and moderate physical activity, such as walking or prenatal yoga, to promote circulation, flexibility, and overall well-being"
    ]
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", my: { xs: 5, lg: 15 }, flexDirection: { xs: "column", lg: "row" } }}>
            <Box sx={{ pl: { xs: 1, lg: 15 }, fontSize: {xs: "16px", lg: "20px"}, pr: { xs: 1, lg: 4 }, textAlign: "justify" }}>
                <Typography sx={{ fontSize: {xs: "24px", lg:"40px"}, fontWeight: 700, textAlign:{xs: "center", lg:"left"} }}><span style={{ color: "#64EBB6" }}>Own </span><span style={{ color: "#1C4188" }}>HealthCare</span></Typography>
                <ul style={{ fontWeight: 400, }}>
                    {points.map((items, index) => (
                        <li style={{ margin: "15px 0px" }}>{items}</li>
                    ))}
                </ul>

            </Box>
            <Box sx={{ height: "25rem" }}>
                <img src="../images/Cardiology/img10.svg" alt="" height={"100%"} />
            </Box>
        </Box>

    )
}

export default OwnHealthCare