import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const DoctorService = () => {
    const points = ["Regular Eye Exams", "Wear Protective Eyewear", "Follow a Healthy Lifestyle", "Take Regular Breaks from Screens", "Practice Proper Contact Lens Hygiene"]
    return (

        <Box sx={{ my: { xs: 5, lg: 20 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, ml: { xs: 0, lg: 30 }, alignItems: "center" }}>

            <Box sx={{ width: { xs: "100%", lg: "50rem" } }}>
                <img src="../images/EyeCare/img5.svg" alt="" height={"100%"} width={"100%"} />
            </Box>


            <Box sx={{ ml: { xs: 1, lg: 4 }, position: "relative", width: "100%", mt:{xs:2, lg:0} }}>
                <Box sx={{ mt: { xs: 3, lg: 0 }, }}>
                    {points.map((point, index) => {
                        return (
                            <Box sx={{ display: "flex", width: "100%", alignItems: "center", mb: 2, ml: { xs: 1, lg: 0 } }} key={index}>
                                <Typography sx={{ color: "#1C4188", fontSize: { xs: "18px", lg: "30px" }, fontWeight: 500, }}>{index + 1}. {point}</Typography>
                            </Box>
                        )
                    })}

                </Box>

                <Box sx={{}}>
                    <Box sx={{ height:{xs:"14rem", lg: "19rem"}, position: "absolute", top: 0, right: 0, zIndex: -0 }}>
                        <img src="../images/EyeCare/Group1149.svg" alt="" height={"100%"} />

                    </Box>
                    <Box sx={{ bgcolor: "#64EBB6", position:"absolute", top: {xs:"6rem", lg:"5rem"}, right: {xs:"-5.4rem" ,lg:"-6.8rem"},transform: "rotate(-90deg)",p:2, px:4 }}><Typography sx={{  color: "white", fontFamily: "Plaster", fontSize:{xs:"18px", lg:"22px"} }}>Eye Protection</Typography></Box>

                </Box>

            </Box>

        </Box>
    )
}

export default DoctorService