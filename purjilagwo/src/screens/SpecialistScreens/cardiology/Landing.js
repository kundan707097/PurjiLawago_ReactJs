import { Box, Typography } from '@mui/material'
import React from 'react'

const Landing = () => {
  return (

    <Box sx={{ bgcolor: "#42A5F5", display: "flex", justifyContent: "space-between", alignItems: {xs: "start", lg:"center"}, pt: 3, position: "relative" }}>
      <Box sx={{ height: { xs: "5rem", lg: "15rem" }, display:{xs: "none", lg:"block"} }}>
        <img src="../images/Cardiology/group.svg" alt="" height={"100%"} />
      </Box>
      <Box>
        <Box sx={{ color: "white", textAlign: "left", px: { xs: 3, lg: 10 }, pt: {xs: 3, lg:6}, }}>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: "22px", lg: "60px" }, lineHeight: 0.8 }}>Heart Attack and</Typography>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: "20px", lg: "60px" } }}>Stroke Symptoms</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: "13px", lg: "20px" }, width: { xs: "100%", lg: "70%" } }}>Heart attacks often cause prolonged discomfort in the chest, feeling like pressure, squeezing, or pain.</Typography>
        </Box>


        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, pl: { xs: 0, lg: 10 }, pt: { xs: 3, lg: 6 }, px: { xs: 1, lg: 10 }, pb: { xs: 4, lg: 0 }, position:{xs: "absolute" ,lg: "initial"}, bottom: "-5.5rem"}}>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              border: "1px solid #42A5F5",
              px: 0,
              backgroundColor: "white",
              flexDirection: "row",
              color: "black", borderRadius: "12px",
              width: { xs: "100%", lg: "45rem" }

            }}
          >
            <Box
              sx={{
                borderRight: { xs: "none", sm: "none", md: "2px solid grey" },
                my: "10px",
                mx: { md: "10px" },
                width: "50%",
                py: { xs: 0, lg: "2px" },
                px: { xs: "2px", md: 0 },
                position: "relative",
                zIndex: 999
              }}
            >
              <img src="../../images/DoctorList/location.svg" alt="" style={{ height: "18px" }} />
              <input
                style={{
                  border: "none",
                  width: "80%",
                  marginLeft: "5px",
                }}
                id="searchLocation"
                type="text"
                placeholder="Location"


              />



            </Box>

            <Box
              sx={{
                my: "10px",
                width: "80%",
                mx: { md: "5px" },
                py: { xs: 0, lg: "2px" },
                position: "relative",
                zIndex: 999
              }}
            >
              <img src="../../images/DoctorList/policy.svg" alt="" height={"18px"} />
              <input
                id="doctorsName"
                type="text"
                style={{
                  border: "none",
                  marginLeft: "5px",
                  width: "80%",
                }}
                placeholder="Search doctors, clinics, hospitals,etc"

              />






            </Box>

            <Box sx={{ backgroundColor: "#64EBB6", borderRadius: "8px 12px 12px 8px", display: "flex", px: 2, alignItems: "center", color: "white", cursor: "pointer", width: "40%", justifyContent: "center", border: "none" }} component={"button"} >
              <Typography sx={{ ml: 1, fontSize: { xs: '10px', lg: "15px" }, mr: 1, }}>SEARCH </Typography>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <img src="../../images/DoctorList/arrow_circle_left.svg" alt="" />
              </Box>
            </Box>
          </Box>

        </Box>


      </Box>

      <Box sx={{ height: { xs: "10rem", lg: "30rem" }, }}>

        <img src="../images/Cardiology/img1.svg" alt="" height={"100%"} />

      </Box>

      <Box sx={{ height:  {xs: "3rem", lg: "8rem"}, position: "absolute", bottom: {xs:"20%", lg:"20.5%"}, right: {xs: "30%", lg:"31%"} }}>
        <img src="../images/Cardiology/img2.svg" alt="" height={"100%"} />
      </Box>
      <Box sx={{ height: {xs: "1rem", lg: "8rem"}, position: "absolute", bottom: {xs: "43.5%", lg:"32%"}, right: {xs: "80px", lg:"220px"}, width: {xs: "5rem" , lg:"20rem"}}}>
        <img src="../images/Cardiology/img3.svg" alt="" height={"100%"} width={"100%"} />
      </Box>
      <Box sx={{ height: {xs: "2rem", lg: "8rem"}, position: "absolute", top: "14%", right: "30%", width: "20rem", display:{xs: "none", lg:"block"} }}>
        <img src="../images/Cardiology/img4.svg" alt="" height={"100%"} width={"100%"} />
      </Box>
      <Box sx={{ height: {xs: "3rem", lg: "8rem"} , position: "absolute", bottom: {xs:  "30%", lg:"32%"}, right: {xs: "12%", lg:"10%"} }}>
        <img src="../images/Cardiology/group1.svg" alt="" height={"100%"} />
      </Box>

    </Box>

  )
}

export default Landing