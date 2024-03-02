import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { Link } from 'react-router-dom';

const DoctorsList = (props) => {
    return (
        <>
            <Box sx={{ width: "350px", backgroundColor: "#F0F6FF", }}>
                <Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="../../images/doc-1.jpg"
                        sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }}
                    />
                    <Box sx={{ mx: 2, mt: 3 }} >
                        <Typography sx={{ fontSize: "35px", fontWeight: 900, color: "white" }}>$ 55</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <AccessAlarmsIcon sx={{ fontSize: "24px", mr: 1, color: "white" }} />
                            <Typography sx={{ fontSize: "20px", fontWeight: 400, color: "white" }}>8am-6pm</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Bottom box */}
                <Box sx={{ backgroundColor: "#F0F6FF", pt: 6, pl: 5, height: 250 }}>
                    <Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>Dr. Prof. Ettie Mertz</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location:  86550 Rosenbaum Lights</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : 5 Years</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Diagnostic Radiologist</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/language.svg" alt="" style={{ height: 18 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Language : Hindi , English</Typography>
                    </Box>
                </Box>

                <Box sx={{width: "200px",my: 3, mx:"auto" }}>
                    <Link to="/">
                        <Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
                            Book Now
                        </Box>
                    </Link>

                </Box>
            </Box>

        </>
    )
}

export default DoctorsList