import { Box, Typography, Container, Paper, Stack, Avatar, Button } from '@mui/material';
import React from 'react'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
// import { Link, useParams } from 'react-router-dom';

const Appointment_section = () => {
  return (
      <>

<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box Container sx={{ display: { xs: 'none', sm: 'block' } }}>
          

<Box  sx={{fontSize:"40px" ,fontWeight:"500", marginLeft:"274px"}}>
<span style={{ color: "#1c4188" }}  > APPOINTMENT
</span> <span style={{ color:"#42a5f5"}}>SERVICES
</span> 
          </Box>
          
          <Box sx={{display:"flex",marginLeft:"274px",marginTop:"15px"}}>
            <Typography>
Heart attacks often cause prolonged discomfort in the chest, feeling like pressure, squeezing, or pain.
            </Typography> 
            <Button sx={{marginLeft:"150px",border:"2px solid green", borderRadius:"9px"}}>
              VIEW ALL
            </Button>
          </Box>
<Box sx={{ display: { xs: "flex" },justifyContent:'center',marginTop:"20px"}} >
{/* 1 box this is testing code of cards  start*/}
            <Box sx={{ width: "313px", backgroundColor: "#F0F6FF", height: "399px", marginLeft:"5px",marginRight:"5px", }}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* 2 this is testing code of cards  start*/}

<Box sx={{ width: "313px", backgroundColor: "#F0F6FF", height:"399px" ,marginLeft:"5px",marginRight:"5px", }}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* 3 this is testing code of cards  start*/}


<Box sx={{ width: "313px", backgroundColor: "#F0F6FF", height:"399px" ,marginLeft:"5px",marginRight:"5px", }}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}
</Box>
{/* next box started */}
<Box Container sx={{ display: { xs: "flex" },justifyContent:"center", marginTop: "20px", }} >
<Box sx={{ width: "313px", backgroundColor: "#F0F6FF", height:"399px" ,marginLeft:"5px",marginRight:"5px",}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}
<Box sx={{ width: "313px", backgroundColor: "#F0F6FF", height:"399px" ,marginLeft:"5px",marginRight:"5px",}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}
<Box sx={{ width: "313px", backgroundColor: "#F0F6FF", height:"399px" ,marginLeft:"5px",marginRight:"5px",}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}

</Box>
</Box>
</Box>

     {/* for mobile view  */}

      
<Box sx={{ display: { xs: 'block ', sm: 'none' } }}>

<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
<Box className="container" sx={{pt:10 ,fontSize:"28px" ,textAlign:"center"}}>
<span style={{ color: "#1c4188" }}  > APPOINTMENT
</span> <span style={{ color:"#42a5f5"}}>SERVICES
</span> 
</Box>
<Box sx={{ display: { xs: "block" },justifyContent:'space-evenly',marginTop:"20px" ,    paddingLeft:"32px"}} >

{/* this is testing code of cards  start*/}

<Box sx={{ width: "350px", backgroundColor: "#F0F6FF", height:"399px" ,marginBottom:"20px"}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}



{/* this is testing code of cards  start*/}

<Box sx={{ width: "350px", backgroundColor: "#F0F6FF", height:"399px" ,marginBottom:"20px"}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}


{/* this is testing code of cards  start*/}

<Box sx={{ width: "350px", backgroundColor: "#F0F6FF", height:"399px",marginBottom:"20px" }}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}


{/* this is testing code of cards  start*/}

<Box sx={{ width: "350px", backgroundColor: "#F0F6FF", height:"399px" ,marginBottom:"20px"}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}

</Box>
<Box sx={{ display: { xs: "block" },justifyContent:'space-evenly' ,marginTop:"20px", paddingLeft:"32px"}} >

{/* this is testing code of cards  start*/}

<Box sx={{ width: "350px", backgroundColor: "#F0F6FF", height:"399px",marginBottom:"20px" }}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}


{/* this is testing code of cards  start*/}

<Box sx={{ width: "350px", backgroundColor: "#F0F6FF", height:"399px" ,marginBottom:"20px"}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}


{/* this is testing code of cards  start*/}

<Box sx={{ width: "350px", backgroundColor: "#F0F6FF", height:"399px" ,marginBottom:"20px"}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}


{/* this is testing code of cards  start*/}

<Box sx={{ width: "350px", backgroundColor: "#F0F6FF", height:"399px" ,marginBottom:"20px"}}>
{/* Avatar and price box */}
<Box sx={{ display: "flex", backgroundColor: "#42A5F5", width: "100%", justifyContent: "start", alignItems: "center", }}>
<Avatar alt="Remy Sharp" src="../../images/doc-1.jpg" sx={{ width: 130, height: 130, position: "relative", top: 25, mx: 4 }} />
<Box sx={{ mx: 2, mt: 3 }} >
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}
>doctor</Typography>
<Box sx={{ display: "flex", alignItems: "center" }}>
<AccessAlarmsIcon sx={{ fontSize: "12px", mr: 1, color: "white" }} />
<Typography sx={{ fontSize: "12px", fontWeight: 400, color: "white" }}>
doc ₹</Typography>
</Box>
</Box>
</Box>
{/* Bottom box */}
<Box sx={{ backgroundColor: "#F0F6FF", pt: 4, pl: 5, height: 250 }}>
<Typography sx={{ fontSize: "22px", fontWeight: 600, mb: 2 }}>doctor?.user_Name</Typography>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/location.svg" alt="" style={{ height: 20 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Location: doctor?.doctor_Address</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/science.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>Experience : doctor?.experience</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
<img src="../../images/DoctorList/ecg.svg" alt="" style={{ height: 18 }} />
<Typography sx={{ fontSize: "16px", fontWeight: 500, ml: 1, mr: 2, color: "#9099AB" }}>doctor?.speciality</Typography>
</Box>
</Box>
{/* Consult Now link button */}
<Box sx={{ width: "200px", mx: "auto", marginTop:"-43px",marginBottom:"24px"}}>
<Box sx={{ textAlign: "center", p: 1, borderRadius: 3, fontSize: "15px", fontWeight: 600, color: "#42A5F5", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
Book Now
</Box>
</Box>
</Box>
{/* this is testing code of cards  end*/}

</Box>
</Box>
</Box>
</>
  ) 
}

export default Appointment_section