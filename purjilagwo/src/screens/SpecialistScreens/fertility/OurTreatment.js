import { Box, Typography } from '@mui/material'
import React from 'react'

const OurTreatment = () => {
    const points = ["Regular Medical Check-ups and Monitoring", "Emphasize Balanced Diet for Maternal and Fetal Health", "Vitamins and Minerals for Optimal Development", "Tailored Activities to Enhance Physical Well-being", "Promote Emotional Stability During Pregnancy"]

    return (
        <Box sx={{  my: { xs: 5, lg: 15 }, display: "flex", justifyContent: "center", flexDirection: { xs: "column", lg: "row" }, mt:0}}>

            <Box sx={{ width: { xs: "100%", lg: "50rem" } }}>
                <img src="../images/Fertility/img9.svg" alt="" height={"100%"} width={"100%"} />
            </Box>
            <Box sx={{ ml: { xs: 1, lg: 10 }, position: "relative", width: "100%", my: { xs: 2, lg: 0 }, display:"flex", alignItems:"center"}}>
                <Box sx={{ mt: { xs: 3, lg: 0 }, }}>
                    {points.map((point, index) => {
                        return (

                            <Box sx={{ display: "flex",  alignItems: "center", mb: 2, ml: { xs: 1, lg: 0 } }} key={index}>
                                <Box sx={{ p: { xs: 1, lg: 2 }, bgcolor: "#42A5F5", borderRadius: "4px", mr: 2, height: "10px" }} />
                                <Typography sx={{ color: "#1C4188", fontSize: { xs: "18px", lg: "30px" }, fontWeight: 500, }}>{point}</Typography>
                            </Box>
                        )
                    })}

                </Box>

                <Box sx={{ display:{xs: "none", lg: "block"}, bgcolor: "#64EBB6", position: "absolute", top: { xs: "6rem", lg: "12rem" }, right: { xs: "-5.4rem", lg: "-6.9em" }, transform: "rotate(-90deg)", p: 2, px: 4 }}><Typography sx={{ color: "white", fontFamily: "Plaster", fontSize: { xs: "18px", lg: "22px" } }}>Our Treatment</Typography></Box>


            </Box>

        </Box>
    )
}

export default OurTreatment