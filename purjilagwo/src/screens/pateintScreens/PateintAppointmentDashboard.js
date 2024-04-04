import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { Search } from '@carbon/icons-react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useSnackbar } from 'notistack';

import { PatientAppointmentDashboardTable } from '../../models/Index';
import DateRangeSelector from '../../components/DateRangeSelector';
import { CancelDialogBox } from '../../components/DialogBox';
import PatientService from '../../services/Patient.service';
import TablePaginationDemo from '../../components/Pagination';
import DataNotFound from '../../components/DataNotFound';
import Loading from '../../components/Loading';


const PateintAppointmentDashboard = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const [backdropLoading, setBackdropLoading] = useState(false)
    const [id, setID] = useState(parseInt(localStorage.getItem('id')));
    const [openCancelDialog, setOpenCancelDialog] = useState(false);
    const [bNo, setBNo] = useState("");
    const [cancelledSuccess, setCancelledSuccess] = useState(false)
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
    })
    const [searching, setSearching] = useState("");
    const [tableData, setTableData] = useState([]);
    const [pagination, setPagination] = useState({
        MaxResultCount: 10,
        SkipCount: 0,
    })
    const [maxCount, setMaxCount] = useState(0);
    const [pageMain, setPageMain] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                if (id != 0) {
                    if (searching === "" || (searching !== "" && searching.length >= 3)) {
                        setLoading(true);
                        const data = PatientAppointmentDashboardTable;
                        data.id = id;
                        data.startDate = dateRange.startDate;
                        data.endDate = dateRange.endDate;
                        data.filterText = searching;
                        data.skipCount = pagination.SkipCount;
                        data.skipCount = (pageMain) * pagination.MaxResultCount;  //if the next or previous button is clicked then it will set the skip count
                        data.maxResultCount = pagination.MaxResultCount;
                        console.log(data);
                        const response = PatientService.PatientDashboardData(data);
                        if (response.status === 200) {
                            setTableData(response.data)
                            console.log("Patient Table Data" + response.data)
                        }
                        setLoading(false);
                    }
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();
    }, [dateRange, id, searching, PatientService.PatientDashboardData, pagination, pageMain])

    const handleCancel = async () => {
        const data = {
            id: id,
            bookingNumber: bNo,
            patient_Status: "Cancel"
        }
        setBackdropLoading(true)
        const res = await PatientService.CancelBookingByPateint(data);
        if (res.status === 200) {
            if (res.data.isSuccess) {
                setCancelledSuccess(true)
                enqueueSnackbar("Booking has cancelled", { variant: "success" });
            } else {
                enqueueSnackbar(res.data.errorMessage, { variant: "error" })
            }
        } else {
            enqueueSnackbar("Server is busy", { variant: "error" })
        }
        setOpenCancelDialog(false)
        setBackdropLoading(false);
    }

    return (

        <>
            <Box sx={{ width: "100%", p: 4, py: 6, }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>

                    <Box sx={{ color: "#8E999A", width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
                        <Typography sx={{ fontSize: { xs: "25px", md: "35px" }, fontWeight: 800 }}>My Appointment</Typography>
                    </Box>

                    <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "end" }, flexDirection: { xs: "column-reverse", md: "row" } }}>

                            <Box sx={{ width: { xs: "80%", lg: "50%", }, bgcolor: "#42A5F5", borderRadius: "12px", py: 1, mx: { xs: "auto", md: 1 }, ml: 0 }}>
                                <DateRangeSelector setDateRange={setDateRange} />
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
                                    placeholder="Search Doctor Name"
                                    list="doctorsList"
                                    value={searching}
                                    onInput={(e) => {
                                        setSearching(e.target.value);
                                    }}
                                />
                                <Search />

                            </Box>

                        </Box>
                    </Box>
                </Box>

                {loading ? (<Loading />) : (
                    <>
                        {tableData.length === 0 ? (
                            <>
                                <TableContainer sx={{ mt: 3, display: { xs: "none", md: "block" } }}>
                                    <Table >
                                        <THead />
                                    </Table>
                                </TableContainer>
                                <DataNotFound />
                            </>
                        ) : (
                            <>
                                <TableContainer sx={{ mt: 3, display: { xs: "none", md: "block" } }}>
                                    <Table >
                                        <THead />
                                        <TableBody>
                                            {tableData.map((data, index) => (
                                                <TBody data={data} key={index} setOpenCancelDialog={setOpenCancelDialog} setBNo={setBNo} cancelledSuccess={cancelledSuccess} bNo={bNo} />
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                {tableData.map((data, index) => {
                                    return (
                                        <Box sx={{ display: { xs: "block", md: "none" }, my: 2, borderRadius: "6px", p: 4, border: `1px solid #00B69B` }} key={index}>

                                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                                                <Box sx={{ width: "50%" }}>
                                                    <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Booking No.</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>{data.bookingNumber}</Typography>
                                                </Box>
                                                <Box sx={{ width: "50%", ml: 2 }}>
                                                    <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Time</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>{data.bookingDateAndTime}</Typography>
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, }}>
                                                <Box sx={{ width: "50%" }}>
                                                    <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Doctor Name</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>{data.DoctorName}</Typography>
                                                </Box>
                                                <Box sx={{ width: "50%", ml: 2 }}>
                                                    <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Phone No.</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>6205316232</Typography>
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                                                <Box sx={{ width: "50%" }}>
                                                    <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Location</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>{data.DoctorAddress}</Typography>
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
                                    )
                                })}

                                <Box sx={{ mb: 15, mt: 3 }}>
                                    <TablePaginationDemo maxCount={maxCount} setPagination={setPagination} pagination={pagination} pageMain={pageMain} setPageMain={setPageMain} />
                                </Box>
                            </>
                        )}



                    </>)}
            </Box>

            <CancelDialogBox opendialog={openCancelDialog} closeDialog={() => setOpenCancelDialog(false)} handleCancel={() => handleCancel()} backdropLoading={backdropLoading} />
        </>


    )
}

const THead = () => {
    return (
        <TableHead >
            <TableRow>
                <StyledTableCell>Booking No.</StyledTableCell>
                <StyledTableCell align="center">Time</StyledTableCell>
                <StyledTableCell align="center">Doctor Name</StyledTableCell>
                <StyledTableCell align="center">Location</StyledTableCell>
                <StyledTableCell align="center">Book Again</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Cancel Booking</StyledTableCell>
            </TableRow>
        </TableHead>
    )
}

const TBody = ({ data, setOpenCancelDialog, setBNo, cancelledSuccess, bNo }) => {

    const [cssProperty, setCssProperty] = useState("#E8C804");
    const [bookingStatus, setBookingStatus] = useState("Pending");

    useEffect(() => {
        setBookingStatus(data.patient_Status)
        if (data.patient_Status === "Pending") {
            setCssProperty("#E8C804");
        } else if (data.patient_Status === "Success") {
            setCssProperty("#00B69B");
        } else if (data.patient_Status === "Cancel") {
            setBookingStatus("Cancelled")
            setCssProperty("#EB5757");
        }
        console.log(cancelledSuccess);
    }, [data])

    useEffect(() => {
        if (cancelledSuccess && bNo === data.bookingNumber) {
            setBookingStatus("Cancelled")
            setCssProperty("#EB5757");
        }
    }, [cancelledSuccess, bNo])


    const handleCancelBooking = (bookingNumber) => {
        setOpenCancelDialog(true)
        setBNo(bookingNumber);
    }


    return (

        <StyledTableRow>
            <StyledTableCell sx={{}}>{data.bookingNumber}</StyledTableCell>
            <StyledTableCell sx={{ color: "#8E999A" }} align="center">{data.bookingDateAndTime}</StyledTableCell>
            <StyledTableCell sx={{ color: "black" }} align="center">{data.DoctorName}</StyledTableCell>
            <StyledTableCell sx={{ color: "#8E999A" }} align="center">{data.DoctorAddress}</StyledTableCell>
            <StyledTableCell sx={{ color: "#8E999A" }} align="center"><Link style={{ color: "#1C4188", fontWeight: 500 }}>Visit</Link></StyledTableCell>

            <StyledTableCell align="center">
                <Box sx={{
                    color: cssProperty, p: "8px", borderRadius: "12px", border: `1px solid ${cssProperty}`, width: "100%"
                }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>{bookingStatus}</Typography>
                </Box>
            </StyledTableCell>

            <StyledTableCell align="center">
                <Box sx={{
                    color: bookingStatus !== "Pending" ? "gray" : "#EB5757", my: "auto", p: "8px", borderRadius: "12px", border: `1px solid ${bookingStatus !== "Pending" ? "gray" : "#EB5757"} `, bgcolor: "white", ":hover": {
                        color: bookingStatus !== "Pending" ? "gray" : "white", bgcolor: bookingStatus !== "Pending" ? "white" : "#EB5757", transition: "0.3s"
                    },
                }} component={"button"} onClick={() => handleCancelBooking(data.bookingNumber)} disabled={bookingStatus !== "Pending"} >
                    <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", width: "7rem" }}>Cancel</Typography>
                </Box>
            </StyledTableCell>
        </StyledTableRow>
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

function createData(bookingNumber, bookingDateAndTime, DoctorName, visit, DoctorAddress, patient_Status) {
    return { bookingNumber, bookingDateAndTime, DoctorName, visit, DoctorAddress, patient_Status };
}

const rows = [
    createData("1234564890123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Pending"),
    createData("1234567895123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Success"),
    createData("1234672890123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Cancel"),
    createData("1234567890123456", "10am - 11pm", "Vicky Jaiswal", "2nd Time", "Siwan", "Pending"),

];


export default PateintAppointmentDashboard