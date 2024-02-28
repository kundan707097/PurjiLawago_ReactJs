import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import { Box, Typography, TablePagination } from '@mui/material'
import { Search } from '@carbon/icons-react'
import { DoctorTableHeader, DoctorTableRow } from '../../components/TableRow'
import TablePaginationDemo from '../../components/Pagination'
import DateRangeSelector from '../../components/DateRangeSelector'
import DoctorService from '../../services/Doctor.services'
import { DoctorAppointmentDashboardTable } from '../../models/Index'
import DataNotFound from '../../components/DataNotFound'

const DoctorAppointmentDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tableData, setTableData] = useState([]);
    const [statistics, setstatistics] = useState({});
    const [id, setID] = useState(localStorage.getItem('id'));
    useEffect(() => {
        if (localStorage.getItem('id') !== null) {
            setID(localStorage.getItem('id'))
        }
    }, [localStorage.getItem('id')]);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    useEffect(() => {
        (async () => {
            try {
                if (parseInt(id) !== 0) {
                    setLoading(true)

                    const data = DoctorAppointmentDashboardTable;
                    data.Id = parseInt(id);
                    console.log(data)
                    const response = await DoctorService.DoctorDashboardData(data);

                    if (response.status === 200) {
                        console.log('Profile data:', response.data);
                        setTableData(response.data.doctorsDashboardRecords.items)
                        setstatistics(response.data.doctorsDashboardRecords.statics)
                    }
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();

    }, [DoctorService.DoctorDashboardData])


    return (
        <>
            {loading ? (<Loading />) : (
                <Box sx={{ backgroundColor: "#F8FCFB", width: "100%", p: { xs: 1, sm: 2, md: 4 }, my: 2, display: "flex" }}>
                    <Box sx={{ width: "100%" }}>
                        {/* Top Box */}
                        {statistics !== null && (
                            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                                <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "27%" }, mr: 2.5, mb: { xs: 2, md: 0 } }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                                        <Typography sx={{ color: "#898989", fontSize: "15px" }}>Total Number of Pateint</Typography>
                                        <Box>
                                            <img src="../images/DoctorAppointmentDashboard/icon.svg" alt="img" />
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: "#3A3F51", fontSize: "28px", fontWeight: 700, }}>4500</Typography>
                                    <Typography sx={{ color: "#CBCCCE", fontSize: "15px", fontWeight: 500, pt: 2.6 }}>Total {" "}<span style={{ color: "#64EBB6", fontWeight: 600 }}>{statistics.totalBookingInLast30Days? statistics.totalBookingInLast30Days : (0)}</span> Booking In Last 30 Days</Typography>
                                </Box>
                                <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "27%" }, mr: 2.5, mb: { xs: 2, md: 0 } }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                                        <Typography sx={{ color: "#898989", fontSize: "15px" }}>Total Upcoming Booking</Typography>
                                        <Box>
                                            <img src="../images/DoctorAppointmentDashboard/Upcommingicon.svg" alt="img" />
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: "#3A3F51", fontSize: "28px", fontWeight: 700, }}>{statistics.upcomingBooking ? statistics.upcomingBooking : (0)}</Typography>
                                    <Typography sx={{ color: "#CBCCCE", fontSize: "15px", fontWeight: 500, pt: 2.6 }}>Last Month Positive {" "}<span style={{ color: "#EB5757", fontWeight: 600, }}> 217 Reviews</span></Typography>
                                </Box>
                                <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "46%" }, position: "relative" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                                        <Typography sx={{ color: "#898989", fontSize: "15px" }}>My Today Treatment</Typography>
                                        <Box sx={{ position: "absolute", right: 0, top: 0 }}>
                                            <img src="../images/DoctorAppointmentDashboard/Group265.svg" alt="img" />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", }}>
                                        <Box sx={{ width: "28%", mr: 2 }}>
                                            <Box sx={{}}>
                                                <img src="../images/DoctorAppointmentDashboard/Bedicon.svg" alt="" />
                                            </Box>
                                            <Box sx={{ height: "13px", display: "flex", alignItems: "center", justifyContent: "left", pl: 3, mt: 1.6 }}>
                                                <img src="../images/DoctorAppointmentDashboard/green.svg" alt="" height={"100%"} />
                                                <Typography sx={{ color: "#00B69B", fontSize: "14px", ml: 1 }}>{statistics.todayTotalBooking ? statistics.todayTotalBooking : (0)}</Typography>
                                            </Box>
                                            <Typography sx={{ color: "#CBCCCE", fontSize: "15px" }}>Total Booking</Typography>
                                        </Box>
                                        <Box sx={{ width: "28%", mr: 2 }}>
                                            <Box sx={{}}>
                                                <img src="../images/DoctorAppointmentDashboard/bookicon.svg" alt="" />
                                            </Box>
                                            <Box sx={{ height: "13px", display: "flex", alignItems: "center", justifyContent: "left", pl: 3, mt: 1.6 }}>
                                                <img src="../images/DoctorAppointmentDashboard/yellow.svg" alt="" height={"100%"} />
                                                <Typography sx={{ color: "#00B69B", fontSize: "14px", ml: 1 }}>{statistics.todayCancelledBooking ? statistics.todayCancelledBooking : (0)}</Typography>
                                            </Box>
                                            <Typography sx={{ color: "#CBCCCE", fontSize: "15px" }}>Total Pending</Typography>
                                        </Box>
                                        <Box sx={{ width: "28%" }}>
                                            <Box sx={{}}>
                                                <img src="../images/DoctorAppointmentDashboard/CancelIcon.svg" alt="" />
                                            </Box>
                                            <Box sx={{ height: "13px", display: "flex", alignItems: "center", pl: 3, mt: 1.3, }}>
                                                <img src="../images/DoctorAppointmentDashboard/red.svg" alt="" height={"100%"} />
                                                <Typography sx={{ color: "#00B69B", fontSize: "14px", ml: 1 }}>{statistics.totalPendingBooking ? statistics.totalPendingBooking : (0)}</Typography>
                                            </Box>
                                            <Typography sx={{ color: "#CBCCCE", fontSize: "15px" }}>Total Cancel</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        )}


                        {/* Bottom Table */}

                        <Box sx={{ my: 4, }}>

                            <Box sx={{ bgcolor: "#42A5F5", borderTopLeftRadius: "6px", borderTopRightRadius: "6px", p: { xs: 2, sm: 3 }, py: 2, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>

                                <Box sx={{ display: "flex", alignItems: "center", width: { xs: "100%", md: "50%" }, mb: { xs: 1, md: 0 }, justifyContent: { xs: "space-between", md: "initial" }, flexDirection: { xs: "column", md: "row" } }}>

                                    <Box sx={{ width: { xs: "100%", lg: "50%", }, mb: { xs: 2, md: 0 }, border: { xs: "1px solid white", md: "none" }, p: { xs: "6px", md: 0 }, borderRadius: "12px" }}>
                                        <DateRangeSelector />
                                    </Box>

                                    <Box
                                        sx={{
                                            border: "1px solid #64EBB6",
                                            borderRadius: "12px",
                                            width: { xs: "100%", md: "50%" },
                                            backgroundColor: "#F0F6FF",
                                            py: { xs: "4px", lg: "6px" },
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
                                            placeholder="Search Patients "
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

                                <Box sx={{ display: 'flex', alignItems: "center", mx: "auto", mr: 0 }}>
                                    <Box component={"button"} sx={{ border: "1px solid #FFFFFF", borderRadius: "10px", width: "6rem", py: "6px", bgcolor: "#42A5F5", color: "white", display: "flex", justifyContent: "center", alignItems: "center", mr: 2, ":hover": { color: "#42A5F5", bgcolor: "white", transitionDuration: "100ms" } }} >
                                        <img src="../images/DoctorAppointmentDashboard/image29.svg" alt="" />
                                        <Typography sx={{ fontSize: "14px", ml: "5px" }}>Pdf</Typography>
                                    </Box>
                                    <Box component={"button"} sx={{ border: "1px solid #FFFFFF", borderRadius: "10px", width: "6rem", py: "6px", bgcolor: "#42A5F5", color: "white", display: "flex", justifyContent: "center", alignItems: "center", mr: { xs: 0, md: 2 }, ":hover": { color: "#42A5F5", bgcolor: "white", transitionDuration: "100ms" } }} >
                                        <img src="../images/DoctorAppointmentDashboard/image28.svg" alt="" />
                                        <Typography sx={{ fontSize: "14px", ml: "5px" }}>Excel</Typography>
                                    </Box>
                                    <Box component={"button"} sx={{ border: "1px solid #64EBB6", borderRadius: "10px", p: "6px", bgcolor: "white", color: "#42A5F5", px: "10px", ":hover": { color: "white", bgcolor: "#42A5F5", transitionDuration: "100ms" }, display: { xs: "none", md: "block" } }} >
                                        <Typography sx={{ fontSize: "14px", }}> Make a appointment</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box>
                                <DoctorTableHeader />
                                {tableData.length === 0 ? (
                                    <DataNotFound />
                                ) : (
                                    <>
                                        {tableData.map((data, index) => {
                                            return (
                                                <DoctorTableRow key={index} data={tableData[index]} />
                                            )
                                        })}
                                    </>
                                )}

                            </Box>

                        </Box>

                        <TablePagination
                            component="div"
                            count={100}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            sx={{ ".css-ew7dpx-MuiTablePagination-selectLabel": { mb: 0 }, ".css-3wlpfe-MuiTablePagination-displayedRows ": { mb: 0 }, ".css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar": { alignItems: "center" }, }}
                        />

                    </Box>
                    {/* Doctor Image and details */}
                    {/* <Box sx={{ width: "30%", bgcolor: "red" }}>
                        Doctor image and details
                    </Box> */}
                </Box>
            )}
        </>
    )
}


export default DoctorAppointmentDashboard