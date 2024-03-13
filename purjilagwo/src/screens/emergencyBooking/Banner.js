import React from 'react'
import { Box, Typography } from '@mui/material'

const Banner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", m: 6, mx: { xs: 6, lg: 15 }, flexDirection: { xs: "column", lg: "row" }, mt: { xs: -4, lg: 6 } }}>
                <Box sx={{ width: { xs: "100%", lg: "24%" }, border: "1px solid #64EBB6", boxShadow: "0 0 4px #00000040", p: 2, mb: { xs: 3, lg: 0 } }}>
                    <Box sx={{ bgcolor: "#64EBB633", width: "80px" }}>
                        <img src="../images/EmergencyBooking/image222.svg" alt="" style={{ padding: "10px" }} width={"100%"} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "22px", color: "black", my: 1 }}>Emergency Doctor</Typography>
                        <Typography sx={{ fontSize: "18px", color: "#9099AB", fontWeight: 400, textAlign: "justify" }}>Emergency doctors are trained to
                            quickly assess patients and diag
                            nose their conditions,</Typography>
                    </Box>

                </Box>
                <Box sx={{ width: { xs: "100%", lg: "24%" }, border: "1px solid #64EBB6", boxShadow: "0 0 4px #00000040", p: 2, mb: { xs: 3, lg: 0 } }}>
                    <Box sx={{ bgcolor: "#64EBB633", width: "80px" }}>
                        <img src="../images/EmergencyBooking/image223.svg" alt="" style={{ padding: "10px" }} width={"100%"} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "22px", color: "black", my: 1 }}>Emergency Ambulance</Typography>
                        <Typography sx={{ fontSize: "18px", color: "#9099AB", fontWeight: 400, textAlign: "justify" }}>Emergency doctors are trained to
                            quickly assess patients and diag
                            nose their conditions,</Typography>
                    </Box>

                </Box>
                <Box sx={{ width: { xs: "100%", lg: "24%" }, border: "1px solid #64EBB6", boxShadow: "0 0 4px #00000040", p: 2, mb: { xs: 3, lg: 0 } }}>
                    <Box sx={{ bgcolor: "#64EBB633", width: "80px" }}>
                        <img src="../images/EmergencyBooking/image224.svg" alt="" style={{ padding: "10px" }} width={"100%"} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "22px", color: "black", my: 1 }}>Emergency Booking</Typography>
                        <Typography sx={{ fontSize: "18px", color: "#9099AB", fontWeight: 400, textAlign: "justify" }}>Emergency doctors are trained to
                            quickly assess patients and diag
                            nose their conditions,</Typography>
                    </Box>

                </Box>
                <Box sx={{ width: { xs: "100%", lg: "24%" }, border: "1px solid #64EBB6", boxShadow: "0 0 4px #00000040", p: 2, mb: { xs: 3, lg: 0 } }}>
                    <Box sx={{ bgcolor: "#64EBB633", width: "80px" }}>
                        <img src="../images/EmergencyBooking/image225.svg" alt="" style={{ padding: "10px" }} width={"100%"} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "22px", color: "black", my: 1 }}>Medical Services</Typography>
                        <Typography sx={{ fontSize: "18px", color: "#9099AB", fontWeight: 400, textAlign: "justify" }}>Emergency doctors are trained to
                            quickly assess patients and diag
                            nose their conditions,</Typography>
                    </Box>

                </Box>
            </Box>
  )
}

export default Banner