
import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Skeleton from '@mui/material/Skeleton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { InventoryManagement, ListDropdown, Logout, Password, PhoneVoice, ResultDraft } from '@carbon/icons-react';


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function BottomDrawer(props) {
    const location = useLocation();
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        // height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                        zIndex: 999
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: { xs: 'visible', lg: 'hidden' },
                        right: 0,
                        left: 0,
                        // display: { xs: 'block', lg: 'none' },
                    }}
                >
                    <Puller />
                    <Typography sx={{ p: 2, color: 'text.secondary', textAlign: "center" }}>Navigation</Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        pr: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Box sx={{ background: "white", width: "100%", borderRadius: "0px 15px 15px 0", }}>

                        {(localStorage.getItem("role") === "Admin" && localStorage.getItem("isDocotrsOrPatiets") === "false") && (
                            <Link to="/dashboard/doctor/registration" style={{ my: 1 }}>
                                <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/doctor/registration" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/doctor/registration" ? "white" : "black", bgcolor: location.pathname === "/dashboard/doctor/registration" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/doctor/registration" ? "white" : "#5D6566", boxShadow: location.pathname === "/dashboard/doctor/registration" && "0 0 4px #D8DEE8" }}>
                                    <ListDropdown style={{ width: "22px", height: "22px", }} />
                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Doctor Registration List</Typography>
                                </Box>
                            </Link>
                        )}



                        {localStorage.getItem("role") !== "Admin" && (
                            <Link to="/dashboard/appointment&details" style={{ my: 1 }}>
                                <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/appointment&details" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/appointment&details" ? "white" : "black", bgcolor: location.pathname === "/dashboard/appointment&details" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/appointment&details" ? "white" : "#5D6566", boxShadow: location.pathname === "/dashboard/appointment&details" && "0 0 4px #D8DEE8" }}>
                                    <InventoryManagement style={{ width: "22px", height: "22px", }} />
                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Appointment & Details</Typography>
                                </Box>
                            </Link>
                        )}


                        <Link to="/dashboard/edit/profile" style={{ my: 1 }}>
                            <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/edit/profile" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/edit/profile" ? "white" : "black", bgcolor: location.pathname === "/dashboard/edit/profile" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/edit/profile" ? "white" : "#5D6566", boxShadow: location.pathname === "/dashboard/edit/profile" && "0 0 4px #D8DEE8" }}>
                                <ResultDraft style={{ width: "22px", height: "22px", }} />
                                <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>View / Update Profile</Typography>
                            </Box>
                        </Link>
                        <Link to="/dashboard/edit/password" style={{ my: 1 }}>
                            <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/edit/password" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/edit/password" ? "white" : "black", bgcolor: location.pathname === "/dashboard/edit/password" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/edit/password" ? "white" : "#5D6566", boxShadow: location.pathname === "/dashboard/edit/password" && "0 0 4px #D8DEE8" }}>
                                <Password style={{ width: "22px", height: "22px", }} />
                                <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Update Password</Typography>
                            </Box>
                        </Link>

                        <Link to="/dashboard/edit/phone" style={{ my: 1 }}>
                            <Box sx={{ p: 2, pl: 4, bgcolor: location.pathname === "/dashboard/edit/phone" && "#64EBB6", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: location.pathname === "/dashboard/edit/phone" ? "white" : "black", bgcolor: location.pathname === "/dashboard/edit/phone" ? "#64EBB6" : "#E9FAF3" }, color: location.pathname === "/dashboard/edit/phone" ? "white" : "#5D6566", boxShadow: location.pathname === "/dashboard/edit/phone" && "0 0 4px #D8DEE8" }}>
                                <PhoneVoice style={{ width: "22px", height: "22px", }} />
                                <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Update Phone No.</Typography>
                            </Box>
                        </Link>
                        

                        <Box component={"button"} type='button' sx={{ border: "none", py: 2, pl: 4, bgcolor: "white", borderRadius: "0 15px 15px 0", my: 1, display: "flex", alignItems: "center", "&:hover": { color: "black", bgcolor: "#E9FAF3" }, color: "#5D6566", width: "100%" }}>
                            <Logout style={{ width: "22px", height: "22px", }} />
                            <Typography sx={{ fontWeight: 400, fontSize: "16px", ml: 1, }}>Logout</Typography>
                        </Box>

                    </Box>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

BottomDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default BottomDrawer;
