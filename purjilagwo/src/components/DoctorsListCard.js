import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { Link } from 'react-router-dom';

const DoctorsList = ({ data }) => {
    return (
        <>
            <Box sx={{ width: "350px", backgroundColor: "#F0F6FF", }}>
                <Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
                    <Avatar
                        alt="Remy Sharp"
                        src={data.profile_Picture ? data.profile_Picture : "../../images/DoctorList/doctor.png"}
                        sx={{ width: 120, height: 120, position: "relative", top: 25, ml: 4, mr: 2 }}
                    />
                    <Box sx={{ mt: 3, mr: 1 }} >
                        
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            {/* <AccessAlarmsIcon sx={{ fontSize: "24px", mr: "3px", color: "white" }} /> */}
                            <Typography sx={{ fontSize: "15px", fontWeight: 400, color: "white" }}>{data?.doctorsTimeAvailability}</Typography>
                        </Box>
                        <Typography sx={{ fontSize: "15px", fontWeight: 400, color: "white" }}>{data?.consultantFee} ₹</Typography>
                    </Box>
                </Box>

                {/* Bottom box */}
                <Box sx={{ backgroundColor: "#F0F6FF", pt: 6, pl: 5, height: 250 }}>
                    <Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2, color: "black" }}>{data.user_Name ? data.user_Name : "Dr. Prof. Ettie Mertz"}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location:  {data.doctor_Address ? data.doctor_Address : "86550 Rosenbaum Lights"}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : {data.experience ? data.experience : "5 Years"}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>{data.speciality ? data.speciality : "Internal Medicine"}</Typography>
                    </Box>
                    {/* <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Education : {data?.education}</Typography>
                    </Box> */}
                    {/* <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                        <img src="../../images/DoctorList/language.svg" alt="" style={{ height: 18 }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Language : Hindi , English</Typography>
                    </Box> */}
                </Box>

                <Box sx={{ width: "200px", my: 3, mx: "auto" }}>
                    <Link to={`/doctorsdetails/${data.id}`}>
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