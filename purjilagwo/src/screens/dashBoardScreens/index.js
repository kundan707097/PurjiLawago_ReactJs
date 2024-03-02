import React from "react";
import { Route, Routes } from "react-router-dom";
import EditProfile from "../editProfile/EditProfile";
import DashboardNavigationPanel from "./DashboardNavigationPanel";
import NotFound from "../proxy/NotFound";
import { Box } from "@mui/material";
import DoctorAppointmentDashboard from "../doctorInformationScreen/DoctorAppointmentDashboard";
import PateintAppointmentDashboard from "../pateintScreens/PateintAppointmentDashboard";
import AdminDashboard from "../admin/AdminDashboard";

const Dashboard = () => {
    

    return (
        <>
            <Box sx={{display: "flex", bgcolor:"#F8FCFB"}}>
                
                <DashboardNavigationPanel />
                <Routes>
                    <Route excat path="/edit/profile" element={<EditProfile />} />
                    {localStorage.getItem("isDocotrsOrPatiets") === "true" && (<Route exact path="/appointment&details" element={<DoctorAppointmentDashboard />} />)}
                    {localStorage.getItem("isDocotrsOrPatiets") === "false" && (<Route exact path="/appointment&details" element={<PateintAppointmentDashboard />} />)}
                    <Route excat path="doctor/registration" element={<AdminDashboard />} />
                    
                    <Route excat path="*" element={<NotFound />} />

                </Routes>

            </Box>

        </>
    );
}

export default Dashboard;
