import { Box, Typography } from '@mui/material'
import React from 'react'

const StokeSymptoms = () => {

    const points = [
        "Sudden Numbness or Weakness: Weakness or numbness, often on one side of the body, affecting the face, arm, or leg.",
        "Confusion: Sudden trouble speaking, understanding speech, or confusion.",
        "Trouble Walking: Sudden dizziness, loss of balance, or coordination difficulties, sometimes with a severe headache.",
        "Vision Problems: Sudden trouble seeing, like blurred or blackened vision, in one or both eyes.",
        "Severe Headache: A sudden, severe headache, possibly with vomiting, dizziness, or altered consciousness."
    ]
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", my: { xs: 5, lg: 15 }, flexDirection: { xs: "column", lg: "row" } }}>
            <Box sx={{ pl: { xs: 1, lg: 15 }, fontSize: {xs: "16px", lg: "20px"}, pr: { xs: 1, lg: 4 }, textAlign: "justify" }}>
                <Typography sx={{ fontSize: {xs: "24px", lg:"40px"}, fontWeight: 700, textAlign:{xs: "center", lg:"left"} }}><span style={{ color: "#64EBB6" }}>STOKE </span><span style={{ color: "#1C4188" }}>SYMPTOMS</span></Typography>
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

export default StokeSymptoms