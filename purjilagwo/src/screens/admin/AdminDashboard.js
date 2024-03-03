import React, { useEffect, useState } from 'react'


import { Box, Typography } from '@mui/material'
import { Search } from '@carbon/icons-react';
import { AdminTableHeader, AdminTableRow, } from '../../components/TableRow';

import DateRangeSelector from '../../components/DateRangeSelector';
import { AdminDashboardTable } from '../../models/Index';
import AdminService from '../../services/Admin.service';
import Loading from '../../components/Loading';
import DataNotFound from '../../components/DataNotFound';

const AdminDashboard = () => {
  const [id, setID] = useState(parseInt(localStorage.getItem('id')));
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [statistics, setstatistics] = useState({});
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })
  const [searching, setSearching] = useState("");

  // setting the id from the local storage
  useEffect(() => {
    if (localStorage.getItem('id') !== null) {
      setID(parseInt(localStorage.getItem('id')))
    }
  }, [localStorage.getItem('id')]);


  useEffect(() => {
    (async () => {
      try {
        if (id !== 0) {
          if (searching === "" || (searching !== "" && searching.length >= 3)) {
            setLoading(true);
            const data = AdminDashboardTable;
            data.Id = id;
            data.StartDate = dateRange.startDate;
            data.EndDate = dateRange.endDate;
            data.FilterText = searching;
            console.log(data);
            const response = await AdminService.AdminDashboardData(data);

            if (response.status === 200) {
              console.log('Profile data:', response.data);
              setTableData(response.data.doctorsDashboardRecords.items)
              setstatistics(response.data.statistics)
            }
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();

  }, [AdminService.AdminDashboardData, dateRange, id, searching,]);

  return (
    <>
      {statistics === undefined || statistics === null ? (<Loading />) : (
        <Box sx={{ backgroundColor: "#F8FCFB", width: "100%", p: { xs: 1, sm: 2, md: 4 }, my: 2, }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, }}>
            <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "23%" }, mr: 2.5, mb: { xs: 2, md: 0 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                <Typography sx={{ color: "#898989", fontSize: "14px" }}>Doctor total Registration</Typography>
                <Box>
                  <img src="/images/DoctorAppointmentDashboard/icon.svg" alt="" />
                </Box>
              </Box>
              <Typography sx={{ color: "#3A3F51", fontSize: "28px", fontWeight: 700, }}>{"4500"}</Typography>
              <Typography sx={{ color: "#CBCCCE", fontSize: "15px", fontWeight: 500, pt: 2.6 }}><span style={{ color: "#64EBB6", fontWeight: 600 }}>{"233"}</span> Doctor Joined Last Month{" "} </Typography>
            </Box>
            <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "23%" }, mr: 2.5, mb: { xs: 2, md: 0 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                <Typography sx={{ color: "#898989", fontSize: "14px" }}>Total No. of <span style={{ color: "#EB5757" }}>Cancel</span></Typography>
                <Box>
                  <img src="/images/DoctorAppointmentDashboard/Upcommingicon.svg" alt="img" />
                </Box>
              </Box>
              <Typography sx={{ color: "#EB5757", fontSize: "28px", fontWeight: 700, }}>{"15310"}</Typography>
              <Typography sx={{ color: "#CBCCCE", fontSize: "15px", fontWeight: 500, pt: 2.6 }}>Total Income : {" "}<span style={{ color: "black", fontWeight: 700, }}>₹ 12,00,000</span></Typography>
            </Box>
            <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "23%" }, mr: 2.5, mb: { xs: 2, md: 0 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                <Typography sx={{ color: "#898989", fontSize: "14px" }}>Total No. of Pending</Typography>
                <Box>
                  <img src="/images/Admin/money.svg" alt="img" />
                </Box>
              </Box>
              <Typography sx={{ color: "#00AFF0", fontSize: "28px", fontWeight: 700, }}>{"342"}</Typography>
              <Typography sx={{ color: "#CBCCCE", fontSize: "15px", fontWeight: 500, pt: 2.6 }}>Total Income : {" "}<span style={{ color: "black", fontWeight: 700, }}>₹ 12,00,000</span></Typography>
            </Box>
            <Box sx={{ p: 2, bgcolor: "white", borderRadius: "5px", boxShadow: "0 0 1px #00000040", width: { xs: "100%", md: "31%" }, position: "relative" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}>
                <Typography sx={{ color: "#898989", fontSize: "15px" }}>My Today Performance</Typography>
                <Box sx={{ position: "absolute", right: 0, top: 0 }}>
                  <img src="/images/DoctorAppointmentDashboard/Group265.svg" alt="img" />
                </Box>
              </Box>
              <Box sx={{ display: "flex", }}>
                <Box sx={{ width: "35%", mr: 2 }}>
                  <Box sx={{}}>
                    <img src="/images/DoctorAppointmentDashboard/bookicon.svg" alt="" />
                  </Box>
                  <Box sx={{ height: "13px", display: "flex", alignItems: "center", justifyContent: "left", pl: 3, mt: 1.6 }}>
                    <img src="/images/DoctorAppointmentDashboard/yellow.svg" alt="" height={"100%"} />
                    <Typography sx={{ color: "#00B69B", fontSize: "14px", ml: 1 }}>{"34"}</Typography>
                  </Box>
                  <Typography sx={{ color: "#CBCCCE", fontSize: "15px" }}>Total Pending</Typography>
                </Box>
                <Box sx={{ width: "35%" }}>
                  <Box sx={{}}>
                    <img src="/images/DoctorAppointmentDashboard/CancelIcon.svg" alt="" />
                  </Box>
                  <Box sx={{ height: "13px", display: "flex", alignItems: "center", pl: 3, mt: 1.3, }}>
                    <img src="/images/DoctorAppointmentDashboard/red.svg" alt="" height={"100%"} />
                    <Typography sx={{ color: "#00B69B", fontSize: "14px", ml: 1 }}>{"34"}</Typography>
                  </Box>
                  <Typography sx={{ color: "#CBCCCE", fontSize: "15px" }}>Total Cancel</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "100%", py: 6, }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>

              <Box sx={{ color: "#8E999A", width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
                <Typography sx={{ fontSize: { xs: "25px", md: "35px" }, fontWeight: 800 }}>Doctor List</Typography>
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
                      placeholder="Search Doctor "
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
            <Box sx={{ my: 1, }}>
              <AdminTableHeader />
              {loading ? (
                <Loading />
              ) : (
                <>
                  {tableData.length === 0 ? (
                    <>
                      {/* <DataNotFound /> */}
                      <AdminTableRow />
                      <AdminTableRow />
                      <AdminTableRow />
                      <AdminTableRow />
                    </>
                  ) : (
                    <>
                      <AdminTableRow />
                      <AdminTableRow />
                      <AdminTableRow />
                      <AdminTableRow />

                    </>
                  )}
                </>

              )}


            </Box>

          </Box>

        </Box>
      )}

    </>
  )
}


export default AdminDashboard