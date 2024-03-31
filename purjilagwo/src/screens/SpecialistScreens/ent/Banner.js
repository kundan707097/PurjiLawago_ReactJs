import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {

    const displayData = [
        {
            label: "Easy Appointment",
            img: "../images/Ent/img10.svg"
        },
        {
            label: "Video Consoling",
            img: "../images/Ent/img11.svg"
        },
        {
            label: "Safe Payments",
            img: "../images/Ent/img12.svg"
        },
        {
            label: "Emergency Service",
            img: "../images/Ent/img13.svg"
        },
    ]

    return (
        <Box sx={{ mx: { xs: 5, lg: 15 }, my: { xs: 3, lg: 15 } }}>

            <Box sx={{ display: "flex", justifyContent: "space-between", m: 6, mx: { xs: 6, lg: 15 }, flexDirection: { xs: "column", lg: "row" }, mt: { xs: 0, lg: 6 } }}>
                {displayData.map((items, index) => {
                    return (
                        <Box sx={{ width: { xs: "100%", lg: "20%" }, mb: { xs: 10, lg: 0 }, position: "relative", bgcolor: "#64EBB626", p: 5, boxShadow: "0 0 4 #00000040", borderRadius: "10px" }}>
                            <Box sx={{ width: "30%", mx: "auto" }}>
                                <img src="../images/Ent/img9.svg" alt="" width={"100%"} />
                            </Box>
                            <Typography sx={{ fontSize: "22px", color: "#1C4188", py: 1, textAlign: "center" }}>{items.label}</Typography>
                            <Box sx={{ bgcolor: "#42A5F5", p: 2, position: "absolute", left: "16%", width: "70%", borderRadius: "10px", height: "80px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                                <Box sx={{ width: "30%",mx: "auto",  }}>
                                    <img src={items.img} alt="" width={"100%"} />
                                </Box>

                            </Box>
                        </Box>
                    )
                })}

            </Box>

        </Box>
    )
}

export default Banner