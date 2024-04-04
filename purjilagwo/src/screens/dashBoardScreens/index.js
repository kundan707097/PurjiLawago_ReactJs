import React , {lazy} from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";


import EditProfile from "../editProfile/EditProfile";
import DashboardNavigationPanel from "./DashboardNavigationPanel";
import NotFound from "../proxy/NotFound";
import DoctorAppointmentDashboard from "../doctorInformationScreen/DoctorAppointmentDashboard";
import AdminDashboard from "../admin/AdminDashboard";
const PateintAppointmentDashboard = lazy(() => import('../pateintScreens/PateintAppointmentDashboard'));

const Dashboard = () => {
    

    return (
        <>
            <Box sx={{display: "flex", bgcolor:"#F8FCFB"}}>
                
                <DashboardNavigationPanel />
                <Routes>
                    <Route excat path="/edit/profile" element={<EditProfile />} />
                    {(localStorage.getItem("role") === "Doctor" && localStorage.getItem("isDocotrsOrPatiets") === "true") && (<Route exact path="/appointment&details" element={<DoctorAppointmentDashboard />} />)}
                    {(localStorage.getItem("role") === "Pateint" && localStorage.getItem("isDocotrsOrPatiets") === "false") && (<Route exact path="/appointment&details" element={<PateintAppointmentDashboard />} />)}
                    {(localStorage.getItem("role") === "Admin" && localStorage.getItem("isDocotrsOrPatiets") === "false") &&  (<Route excat path="doctor/registration" element={<AdminDashboard />} />)}
                    
                    <Route excat path="*" element={<NotFound />} />

                </Routes>

            </Box>

        </>
    );
}

export default Dashboard;
