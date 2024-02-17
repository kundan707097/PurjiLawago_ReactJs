import React from "react";
import { Route, Routes } from "react-router-dom";
import EditProfile from "../editProfile/EditProfile";
import DashboardNavigationPanel from "./DashboardNavigationPanel";
import NotFound from "../proxy/NotFound";
import { Box } from "@mui/material";

const Dashboard = () => {

    return (
        <>
            <Box sx={{display: "flex", bgcolor:"#F8FCFB"}}>
                <DashboardNavigationPanel />
                <Routes>
                    <Route excat path="/edit/profile" element={<EditProfile />} />
                    <Route excat path="*" element={<NotFound />} />

                </Routes>

            </Box>

        </>
    );
}

export default Dashboard;
