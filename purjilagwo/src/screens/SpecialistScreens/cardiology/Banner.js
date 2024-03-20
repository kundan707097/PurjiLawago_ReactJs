import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
    const displayData = [
        {
            label: "Nausea,Indigestion",
            img: "../images/Cardiology/img5.svg"
        },
        {
            label: "Shortness of Breath",
            img: "../images/Cardiology/img6.svg"
        },
        {
            label: "Pain in Other Areas of the Body",
            img: "../images/Cardiology/img7.svg"
        },
        {
            label: "Chest Pain or Discomfort",
            img: "../images/Cardiology/img8.svg"
        },
    ]
    return (

            <Box sx={{ px: { xs: 5, lg: 15 }, py: { xs: 3, lg: 5 },bgcolor: "#F0F6FF", }}>

                <Box sx={{ width: { xs: "100%", lg: "70%" }, mx: "auto", textAlign: { xs: "justify", lg: "center" }, mb: { xs: 10, lg: 4 } }}>
                    <Typography sx={{ fontSize: { xs: "24px", lg: "40px" }, fontWeight: 600, color: "#64EBB666", textAlign: "center", fontFamily: "Plaster" }}>
                        Heart Attack
                    </Typography>

                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", m: 6, mx: { xs: 6, lg: 15 }, flexDirection: { xs: "column", lg: "row" }, mt: { xs: -4, lg: 6 } }}>
                    {displayData.map((items, index) => {
                        return (
                            <Box sx={{ width: { xs: "100%", lg: "20%" }, mb: { xs: 6, lg: 0 } }}>
                                <Box sx={{ bgcolor: "white", p: 4, borderRadius:"10px" }}>
                                    <Box sx={{ bgcolor: "#42A5F5", width: "60%", borderRadius: "200px",p:1, border: "1px solid #EB5757", mx:"auto",  }}>
                                        <img src={items.img} alt="" style={{ padding: "10px" }} width={"100%"} />
                                    </Box>

                                </Box>

                                <Box sx={{  p: 2, }}>
                                    <Typography sx={{ fontWeight: 400, fontSize: "15px", color: "#1C4188", textAlign: "center" }}>{items.label}</Typography>
                                </Box>
                            </Box>
                        )
                    })}

                </Box>

            </Box>


    )
}

export default Banner