import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Loading from '../../components/Loading';
import { Search } from '@carbon/icons-react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DateRangeSelector from '../../components/DateRangeSelector';
import { Link } from 'react-router-dom';
import { CancelDialogBox } from '../../components/DialogBox';


const PateintAppointmentDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [todayDate, setTodayDate] = useState("");
    const [cssProperty, setCssProperty] = useState("#E8C804");
    const [openCancelDialog, setOpenCancelDialog] = useState(false);
    useEffect(() => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const today = new Date();

        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);
        setTodayDate(formattedDate);
    }, [])

    const handleCancel = () => {
        console.log("Cancel the booking")
        setOpenCancelDialog(false)
    }
    return (
        <>
            {loading ? (<Loading />) : (
                <>
                    <Box sx={{ width: "100%", p: 4, py: 6, }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>

                            <Box sx={{ color: "#8E999A", width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
                                <Typography sx={{ fontSize: { xs: "25px", md: "35px" }, fontWeight: 800 }}>My Appointment</Typography>
                            </Box>

                            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "end" }, flexDirection: { xs: "column-reverse", md: "row" } }}>

                                    {/* <Box component={"button"} sx={{ display: "flex", alignItems: "center", border: "none", bgcolor: "#42A5F5", mr: 2, borderRadius: "12px", py: 1 }}>
                                    <CalendarHeatMap style={{ width: '22px', height: "22px", color: "white" }} />
                                    <Typography sx={{ color: "white", ml: 1 }}>{todayDate}</Typography>
                                    <ChevronDown style={{ width: '25px', color: "white" }} />
                                </Box> */}
                                    <Box sx={{ width: { xs: "80%", lg: "50%", }, bgcolor: "#42A5F5", borderRadius: "12px", py: 1, mx: { xs: "auto", md: 1 }, ml: 0 }}>
                                        <DateRangeSelector />
                                    </Box>


                                    <Box
                                        sx={{
                                            border: "1px solid #64EBB6",
                                            borderRadius: "12px",
                                            width: { xs: "80%", lg: "50%", },
                                            backgroundColor: "#F0F6FF",
                                            py: { xs: "4px", lg: "6px" },
                                            my: { xs: 2, md: 0 },
                                            mx: { xs: "auto", md: 0 },
                                        }}
                                    >
                                        <input
                                            id="doctorsName"
                                            type="text"
                                            style={{
                                                border: "none",
                                                color: "",
                                                marginLeft: "6px",
                                                width: "85%",
                                                backgroundColor: "#F0F6FF",
                                                fontSize: "14px",
                                            }}
                                            placeholder="Search Doctor "
                                            list="doctorsList"
                                            // value={searchName}
                                            onInput={(e) => {
                                                // setSearchName(e.target.value);
                                                // setIsVisible({ nameVisible: true });
                                            }}
                                        />
                                        <Search />

                                    </Box>

                                </Box>
                            </Box>
                        </Box>

                        <TableContainer sx={{ mt: 3, display: { xs: "none", md: "block" } }}>
                            <Table >
                                <TableHead >
                                    <TableRow>
                                        <StyledTableCell>Booking No.</StyledTableCell>
                                        <StyledTableCell align="center">Time</StyledTableCell>
                                        <StyledTableCell align="center">Doctor Name</StyledTableCell>
                                        <StyledTableCell align="center">Location</StyledTableCell>
                                        <StyledTableCell align="center">Visit Details</StyledTableCell>
                                        <StyledTableCell align="center">Status</StyledTableCell>
                                        <StyledTableCell align="center">Cancel Booking</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.booking}>
                                            <StyledTableCell sx={{}}>{row.booking}</StyledTableCell>
                                            <StyledTableCell sx={{ color: "#8E999A" }} align="center">{row.date}</StyledTableCell>
                                            <StyledTableCell sx={{ color: "#64EBB6" }} align="center">{row.name}</StyledTableCell>
                                            <StyledTableCell sx={{ color: "#8E999A" }} align="center">{row.location}</StyledTableCell>
                                            <StyledTableCell sx={{ color: "#8E999A" }} align="center"><Link style={{ color: "#1C4188", fontWeight: 500 }}>View</Link></StyledTableCell>

                                            <StyledTableCell align="center">
                                                <Box sx={{
                                                    color: cssProperty, p: "8px", borderRadius: "12px", border: `1px solid ${cssProperty}`, width: "100%"
                                                }}>
                                                    <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>{row.status}</Typography>
                                                </Box>
                                            </StyledTableCell>

                                            <StyledTableCell align="center">
                                                <Box sx={{
                                                    color: "#EB5757", my: "auto", p: "8px", borderRadius: "12px", border: "1px solid #EB5757", bgcolor: "white", ":hover": {
                                                        color: "white", bgcolor: "#EB5757", transition: "0.3s"
                                                    },
                                                }} component={"button"} onClick={() => setOpenCancelDialog(true)}>
                                                    <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", width: "7rem" }}>Cancel</Typography>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {rows.map((row) => (
                            <Box sx={{ display: { xs: "block", md: "none" }, my: 2, borderRadius: "6px", p: 4, border: `1px solid #00B69B` }} key={row.booking}>

                                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                                    <Box sx={{ width: "50%" }}>
                                        <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Booking No.</Typography>
                                        <Typography sx={{ fontSize: "14px" }}>{row.booking}</Typography>
                                    </Box>
                                    <Box sx={{ width: "50%", ml: 2 }}>
                                        <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Time</Typography>
                                        <Typography sx={{ fontSize: "14px" }}>{row.date}</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, }}>
                                    <Box sx={{ width: "50%" }}>
                                        <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Doctor Name</Typography>
                                        <Typography sx={{ fontSize: "14px" }}>{row.name}</Typography>
                                    </Box>
                                    <Box sx={{ width: "50%", ml: 2 }}>
                                        <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Phone No.</Typography>
                                        <Typography sx={{ fontSize: "14px" }}>6205316232</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                                    <Box sx={{ width: "50%" }}>
                                        <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Location</Typography>
                                        <Typography sx={{ fontSize: "14px" }}>{row.location}</Typography>
                                    </Box>
                                    <Box sx={{ width: "50%", ml: 2 }}>
                                        <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Visiting Time</Typography>
                                        <Typography sx={{ fontSize: "14px" }}>2</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                                    <Box sx={{
                                        color: "#00B69B", p: "8px", borderRadius: "12px", border: "1px solid #00B69B", width: "48%"
                                    }}>
                                        <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>Completed</Typography>
                                    </Box>
                                    <Box sx={{
                                        color: "#42A5F5", my: "auto", p: "8px", borderRadius: "12px", border: "1px solid #42A5F5", bgcolor: "white", ":hover": {
                                            color: "white", bgcolor: "#42A5F5", transition: "0.3s"
                                        }, width: "48%"
                                    }} component={"button"}>
                                        <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>Book Again</Typography>
                                    </Box>

                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Box sx={{
                                        color: "#42A5F5", my: "auto", p: "8px", borderRadius: "12px", border: "1px solid #42A5F5", bgcolor: "white", ":hover": {
                                            color: "white", bgcolor: "#42A5F5", transition: "0.3s"
                                        }, width: "48%"
                                    }} component={"button"}>
                                        <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>View Details</Typography>
                                    </Box>
                                    <Box sx={{
                                        color: "#EB5757", my: "auto", p: "8px", borderRadius: "12px", border: "1px solid #EB5757", bgcolor: "white", ":hover": {
                                            color: "white", bgcolor: "#EB5757", transition: "0.3s"
                                        }, width: "48%"
                                    }} component={"button"} onClick={() => setOpenCancelDialog(true)}>
                                        <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>Cancel</Typography>
                                    </Box>

                                </Box>


                            </Box>
                        ))}
                    </Box>

                    <CancelDialogBox opendialog={openCancelDialog} closeDialog={() => setOpenCancelDialog(false)} handleCancel={() => handleCancel()} />

                </>
            )}

        </>
    )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#1C4188",
        color: "white",
        fontSize: "16px"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#42A5F51A",
    },
    // hide last border
    'td, th': {
        border: 0,
    },
}));

function createData(booking, date, name, visit, location, status) {
    return { booking, date, name, visit, location, status };
}

const rows = [
    createData("1234564890123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Pending"),
    createData("1234567895123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Canceled"),
    createData("1234672890123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Completed"),
    createData("1234567890123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Completed"), /// we also need the approve by doctor
    createData("1234567898123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Canceled"),
    createData("1234567390123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Pending"),
    createData("1234507890123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Completed"),
    createData("1234567820123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Pending"),
];


export default PateintAppointmentDashboard