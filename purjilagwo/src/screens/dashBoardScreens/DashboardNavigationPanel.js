import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { InventoryManagement, ListDropdown, Logout, Password, PhoneVoice, ResultDraft } from '@carbon/icons-react';

const DashboardNavigationPanel = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("isDocotrsOrPatiets")

    if (window.location.pathname === "/") {
      // Reload the page
      window.location.reload();
    } else {
      navigate("/");
    }
  };
  return (

    <Box sx={{ width: "24rem", mt: 6, display:{xs: "none", lg: "block"}}}>

      <Box sx={{ background: "white", width: "100%", height: "30rem", borderRadius: "0px 15px 15px 0", py: 5 }}>

      <Link to="/dashboard/doctor/registration" style={{ my: 1 }}>
          <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/doctor/registration" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/doctor/registration" ? "white" : "black", bgcolor: location.pathname === "/dashboard/doctor/registration" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/doctor/registration" ? "white" : "#5D6566",boxShadow: location.pathname === "/dashboard/doctor/registration" && "0 0 4px #D8DEE8" }}>
            <ListDropdown style={{ width: "22px", height: "22px", }} />
            <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Doctor Registration List</Typography>
          </Box>
        </Link>


        <Link to="/dashboard/appointment&details" style={{ my: 1 }}>
          <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/appointment&details" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/appointment&details" ? "white" : "black", bgcolor: location.pathname === "/dashboard/appointment&details" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/appointment&details" ? "white" : "#5D6566",boxShadow: location.pathname === "/dashboard/appointment&details" && "0 0 4px #D8DEE8" }}>
            <InventoryManagement style={{ width: "22px", height: "22px", }} />
            <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Appointment & Details</Typography>
          </Box>
        </Link>

        <Link to="/dashboard/edit/profile" style={{ my: 1 }}>
          <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/edit/profile" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/edit/profile" ? "white" : "black", bgcolor: location.pathname === "/dashboard/edit/profile" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/edit/profile" ? "white" : "#5D6566", boxShadow: location.pathname === "/dashboard/edit/profile" && "0 0 4px #D8DEE8" }}>
            <ResultDraft style={{ width: "22px", height: "22px", }} />
            <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>View / Update Profile</Typography>
          </Box>
        </Link>

        <Link to="/dashboard/edit/password" style={{ my: 1 }}>
          <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/edit/password" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/edit/password" ? "white" : "black", bgcolor: location.pathname === "/dashboard/edit/password" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/edit/password" ? "white" : "#5D6566",boxShadow: location.pathname === "/dashboard/edit/password" && "0 0 4px #D8DEE8" }}>
            <Password style={{ width: "22px", height: "22px", }} />
            <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Update Password</Typography>
          </Box>
        </Link>

        <Link to="/dashboard/edit/phone" style={{ my: 1 }}>
          <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/edit/phone" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/edit/phone" ? "white" : "black", bgcolor: location.pathname === "/dashboard/edit/phone" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/edit/phone" ? "white" : "#5D6566",boxShadow: location.pathname === "/dashboard/edit/phone" && "0 0 4px #D8DEE8" }}>
            <PhoneVoice style={{ width: "22px", height: "22px", }} />
            <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Update Phone No.</Typography>
          </Box>
        </Link>

        <Box component={"button"} type='button' sx={{ border: "none",py: 2, pl: 4, bgcolor: "white", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: "black", bgcolor: "#E9FAF3" }, color: "#5D6566", width: "100%"}} onClick={handleLogout}>
          <Logout style={{ width: "22px", height: "22px", }} />
          <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Logout</Typography>
        </Box>

      </Box>
    </Box>
  )
}

export default DashboardNavigationPanel