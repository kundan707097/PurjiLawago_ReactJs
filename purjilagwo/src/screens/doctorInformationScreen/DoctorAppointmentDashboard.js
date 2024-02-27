import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import { Box, Typography, TablePagination, TableContainer, Table, TableHead, TableRow, TableBody } from '@mui/material'
import { Search } from '@carbon/icons-react'
import { DoctorResponsiveCard, DoctorTableHeader, DoctorTableRow } from '../../components/TableRow'
import TablePaginationDemo from '../../components/Pagination'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DateRangeSelector from '../../components/DateRangeSelector'
import DoctorService from '../../services/Doctor.services'
import { DoctorAppointmentDashboardTable } from '../../models/Index'

const DoctorAppointmentDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [todayDate, setTodayDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tableData, setTableData] = useState({});
    const [id, setID] = useState(localStorage.getItem('id'));
    useEffect(() => {
      if(localStorage.getItem('id') !==null){
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
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const today = new Date();

        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);
        setTodayDate(formattedDate);
    }, []);

    const rows = [
        createData("1234567891234567", "10am - 11pm", "Vicky Jaiswal", "6205316232"),
        createData("1234567895234567", "10am - 11pm", "Vicky Jaiswal", "6205316232"),
    ];

    function createData(booking, time, name, phone) {
        return { booking, time, name, phone };
    }

    useEffect(() => {
        (async () => {
            try {
                if(parseInt(id) !== 0){
                    setLoading(true)
            
                const data= DoctorAppointmentDashboardTable;
                data.Id = parseInt(id);
                console.log(data)
                const response = await DoctorService.DoctorDashboardData(data);
                
                if (response.status === 200) {
                    console.log('Profile data:', response.data);
                    //setTableData(response.data)
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
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                            <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "27%" }, mr: 2.5, mb: { xs: 2, md: 0 } }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                                    <Typography sx={{ color: "#898989", fontSize: "15px" }}>Total Number of Pateint</Typography>
                                    <Box>
                                        <img src="../images/DoctorAppointmentDashboard/icon.svg" alt="img" />
                                    </Box>
                                </Box>
                                <Typography sx={{ color: "#3A3F51", fontSize: "28px", fontWeight: 700, }}>4500</Typography>
                                <Typography sx={{ color: "#CBCCCE", fontSize: "15px", fontWeight: 500, pt: 2.6 }}>Last Month successful {" "}<span style={{ color: "#64EBB6", fontWeight: 600 }}> 140 Patient</span></Typography>
                            </Box>
                            <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "27%" }, mr: 2.5, mb: { xs: 2, md: 0 } }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                                    <Typography sx={{ color: "#898989", fontSize: "15px" }}>Total Upcoming Appointment</Typography>
                                    <Box>
                                        <img src="../images/DoctorAppointmentDashboard/Upcommingicon.svg" alt="img" />
                                    </Box>
                                </Box>
                                <Typography sx={{ color: "#3A3F51", fontSize: "28px", fontWeight: 700, }}>1147</Typography>
                                <Typography sx={{ color: "#CBCCCE", fontSize: "15px", fontWeight: 500, pt: 2.6 }}>Last Month Positive {" "}<span style={{ color: "#EB5757", fontWeight: 600, }}> 217 Reviews</span></Typography>
                            </Box>
                            <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "46%" }, position: "relative" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                                    <Typography sx={{ color: "#898989", fontSize: "15px" }}>My Last Month Treatment</Typography>
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
                                            <Typography sx={{ color: "#00B69B", fontSize: "14px", ml: 1 }}>115</Typography>
                                        </Box>
                                        <Typography sx={{ color: "#CBCCCE", fontSize: "15px" }}>Total Booking</Typography>
                                    </Box>
                                    <Box sx={{ width: "28%", mr: 2 }}>
                                        <Box sx={{}}>
                                            <img src="../images/DoctorAppointmentDashboard/bookicon.svg" alt="" />
                                        </Box>
                                        <Box sx={{ height: "13px", display: "flex", alignItems: "center", justifyContent: "left", pl: 3, mt: 1.6 }}>
                                            <img src="../images/DoctorAppointmentDashboard/yellow.svg" alt="" height={"100%"} />
                                            <Typography sx={{ color: "#00B69B", fontSize: "14px", ml: 1 }}>115</Typography>
                                        </Box>
                                        <Typography sx={{ color: "#CBCCCE", fontSize: "15px" }}>Total Pending</Typography>
                                    </Box>
                                    <Box sx={{ width: "28%" }}>
                                        <Box sx={{}}>
                                            <img src="../images/DoctorAppointmentDashboard/CancelIcon.svg" alt="" />
                                        </Box>
                                        <Box sx={{ height: "13px", display: "flex", alignItems: "center", pl: 3, mt: 1.3, }}>
                                            <img src="../images/DoctorAppointmentDashboard/red.svg" alt="" height={"100%"} />
                                            <Typography sx={{ color: "#00B69B", fontSize: "14px", ml: 1 }}>115</Typography>
                                        </Box>
                                        <Typography sx={{ color: "#CBCCCE", fontSize: "15px" }}>Total Cancel</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

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

                            {/* Testing Table */}

                            {/* <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Booking No.</StyledTableCell>
                                            <StyledTableCell align="center">Time</StyledTableCell>
                                            <StyledTableCell align="center">Pateint Name</StyledTableCell>
                                            <StyledTableCell align="center">Phone No.</StyledTableCell>
                                            <StyledTableCell align="center">Status/Update</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.booking} sx={{ borderRadius: "6px", border: "1px solid #64EBB6", }}>

                                                <StyledTableCell>{row.booking}</StyledTableCell>
                                                <StyledTableCell align='center'>{row.time}</StyledTableCell>
                                                <StyledTableCell align='center'>{row.name}</StyledTableCell>
                                                <StyledTableCell align='center'>{row.phone}</StyledTableCell>
                                                <StyledTableCell>
                                                    <Box sx={{
                                                        color: "#00B69B", width: "100%", p: "8px", borderRadius: "12px", border: "1px solid #00B69B", bgcolor: "white", ":hover": {
                                                            color: "white", bgcolor: "#00B69B", transition: "0.3s"
                                                        }
                                                    }} component={"button"}>
                                                        <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>Booking<ChevronDown style={{ width: '25px', marginLeft: "4px" }} /></Typography>
                                                    </Box>
                                                </StyledTableCell>

                                            </StyledTableRow>
                                        ))}

                                    </TableBody>

                                </Table>

                            </TableContainer> */}
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <DoctorTableHeader />
                                <DoctorTableRow />
                                <DoctorTableRow />
                                <DoctorTableRow />
                                <DoctorTableRow />
                                <DoctorTableRow />
                                <DoctorTableRow />
                            </Box>
                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <DoctorResponsiveCard />
                                <DoctorResponsiveCard />
                                <DoctorResponsiveCard />
                                <DoctorResponsiveCard />
                                <DoctorResponsiveCard />
                                <DoctorResponsiveCard />
                                <DoctorResponsiveCard />
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
        //backgroundColor: "#42A5F51A",
        // padding: "20px",
        //borderRadius: "6px",

    },
    // hide last border
    'td, th': {
        border: 0,
        // borderRadius: "6px",

    },

}));



export default DoctorAppointmentDashboard