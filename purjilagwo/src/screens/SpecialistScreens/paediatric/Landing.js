import { Search } from '@carbon/icons-react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Landing = () => {
  return (

    <Box sx={{ bgcolor: "#42A5F5", pt: { xs: 0, lg: 0 }, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", lg: "row" }, position: "relative" }}>


      <Box sx={{ height: { xs: "3rem", lg: "20rem" }, position: "absolute", bottom: { xs: "4%", lg: "10%" }, left: { xs: "85%", lg: "0" }, zIndex: 0,display: {xs: "none", lg: "block"} }}>
        <img src="../images/Paediatric/img2.svg" alt="" height={"100%"} />
      </Box>


      <Box>

        <Box sx={{ background: {xs: "transparent", lg:"linear-gradient(-90deg, rgba(255, 255, 255, 0.22) 0%, #64EBB6 100%)"}, width: { xs: "100%", lg: "40%" }, p: 1, my: { xs: 2, lg: 0 }, ml: { xs: 0, lg: 22 } }}>
          <Typography sx={{ color: "white", fontSize: { xs: "20px", lg: "32px" }, textAlign: { xs: "center", lg: "left" } }}>
            “Join the best Be the best”
          </Typography>
        </Box>

        <Box sx={{ color: "white", textAlign: { xs: "center", lg: "left" }, px: { xs: 2, lg: 0 }, pl: { xs: 2, lg: 22 }, zIndex: 999 }}>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: "30px", lg: "60px" }, lineHeight: 0.8, mt: 2 }}>Baby Care  and</Typography>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: "30px", lg: "60px" } }}>Physical, Emotional</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: "18px", lg: "20px" }, width: { xs: "100%", lg: "70%" } }}>Taking care of a baby involves a mix of medical advice, practical knowledge, and a lot of love and attention</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, pl: { xs: 0, lg: 22 }, pt: { xs: 3, lg: 6 }, mx: { xs: 1, lg: 0 }, pb: { xs: 4, lg: 0 }, }}>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              border: "1px solid #42A5F5",
              px: 0,
              backgroundColor: "white",
              flexDirection: "row",
              color: "black", borderRadius: "12px",
              width: { xs: "100%", lg: "45rem" },
              zIndex: 999

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

      <Box sx={{ height: { xs: "23rem", lg: "30rem" }, py: {xs: 0,lg:2 }}}>

        <img src="../images/Paediatric/img1.svg " alt="" height={"100%"} />

      </Box>

      <Box sx={{ height: { xs: "3rem", lg: "8rem" }, position: "absolute", top: { xs: "4%", lg: "10%" }, right: { xs: "85%", lg: "40%" }, zIndex: 0, display: {xs: "none", lg: "block"} }}>
        <img src="../images/Paediatric/img3.svg" alt="" height={"100%"} />
      </Box>
      <Box sx={{ height: { xs: "6rem", lg: "8rem" }, position: "absolute", bottom: { xs: "85%", lg: "-6px" }, right: { xs: "-10px", lg: "33%" }, zIndex: 0 }}>
        <img src="../images/Paediatric/img4.svg" alt="" height={"100%"} />
      </Box>


    </Box>

  )
}

export default Landing