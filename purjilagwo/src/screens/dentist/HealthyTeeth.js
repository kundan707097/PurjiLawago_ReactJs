import React from 'react'
import { Box, Typography } from '@mui/material'

const HealthyTeeth = () => {
    
    const points = ["A Decade of Dental Care Excellence", "Brushing Brilliance: 10 Steps to a Healthy", "Holistic Approaches to Dental Wellness", "A Decadal Guide to Superior Dental Hygiene", "Proven Strategies for Lifelong Dental Wellness"]

    return (
        <Box sx={{ my: { xs: 5, lg: 15 }, display: "flex", justifyContent: "center", flexDirection: { xs: "column", lg: "row" }, bgcolor: "#42A5F5" }}>

            <Box sx={{ width: { xs: "100%", lg: "50rem" } }}>
                <img src="../images/Dentist/img2.svg" alt="" height={"100%"} width={"100%"} />
            </Box>
            <Box sx={{ ml: { xs: 1, lg: 10 }, position: "relative", width: "100%", my: { xs: 2, lg: 0 }, display:"flex", alignItems:"center"}}>
                <Box sx={{ mt: { xs: 3, lg: 0 }, }}>
                    {points.map((point, index) => {
                        return (

                            <Box sx={{ display: "flex",  alignItems: "center", mb: 2, ml: { xs: 1, lg: 0 } }} key={index}>
                                <Box sx={{ p: { xs: 1, lg: 2 }, bgcolor: "#64EBB6", borderRadius: "4px", mr: 2, height: "10px" }} />
                                <Typography sx={{ color: "white", fontSize: { xs: "18px", lg: "30px" }, fontWeight: 500, }}>{point}</Typography>
                            </Box>
                        )
                    })}

                </Box>

                <Box sx={{ display:{xs: "none", lg: "block"}, bgcolor: "#64EBB6", position: "absolute", top: { xs: "6rem", lg: "12rem" }, right: { xs: "-5.4rem", lg: "-6.8rem" }, transform: "rotate(-90deg)", p: 2, px: 4 }}><Typography sx={{ color: "white", fontFamily: "Plaster", fontSize: { xs: "18px", lg: "22px" } }}>Healthy Teeth</Typography></Box>


            </Box>

        </Box>
    )
}

export default HealthyTeeth