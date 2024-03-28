import React from 'react'

import { Box, Typography } from '@mui/material'

const Banner = () => {
    const points = ["Specialists in kidney health.", "Medication, dialysis, and transplants available.", "Addressing CKD, stones, and infections.", "Emphasize healthy habits for kidney care.", "Work collaboratively for effective treatment."]

    return (
        <Box sx={{ my: { xs: 5, lg: 15 }, display: "flex", justifyContent: "center", flexDirection: { xs: "column", lg: "row" } }}>

            <Box sx={{ width: { xs: "100%", lg: "75rem" }, border: "30px solid #42A5F5", borderTop: 0, borderLeft: 0 }}>
                <img src="../images/Nephrology/img15.svg" alt="" height={"100%"} width={"100%"} />
            </Box>
            <Box sx={{ ml: { xs: 1, lg: 10 }, width: "100%", mt: { xs: 4, lg: 2 }, }}>
                <Typography sx={{ color: "#1C4188", fontSize: {xs: "25px", lg:"70px"}, fontWeight: 800, lineHeight: 0.6,textAlign:{xs: "center", lg:"left"} }}>Get Expert Kidney</Typography>
                <Typography sx={{ color: "#1C4188", fontSize: {xs: "25px", lg:"70px"}, fontWeight: 800,textAlign:{xs: "center", lg:"left"} }}>Doctor  Services</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ mt: { xs: 2, lg: 0 }, }}>
                        {points.map((point, index) => {
                            return (
                                <Box sx={{ display: "flex", alignItems: "center", mb: 2, ml: { xs: 1, lg: 0 } }} key={index}>
                                    <Box sx={{ p: { xs: 1, lg: 2 }, bgcolor: "#42A5F5", borderRadius: "4px", mr: 2, height: "10px" }} />
                                    <Typography sx={{ color: "#1C4188", fontSize: { xs: "18px", lg: "30px" }, fontWeight: 500, }}>{point}</Typography>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default Banner