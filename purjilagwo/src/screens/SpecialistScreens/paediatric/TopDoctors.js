import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import DemoDoctorCardList from '../../../components/DemoDoctorCardList'

const TopDoctors = () => {
    return (
        <Box sx={{ mx: { xs: 5, lg: 15 }, my: { xs: 10, lg: 4 } }}>

            <Stack spacing={{ xs: 2, sm: 6 }} direction="row" useFlexGap flexWrap="wrap" sx={{ justifyContent: "center", py: "20px", }}>
                <Typography sx={{ fontSize: { xs: "24px", lg: "40px" }, fontWeight: 600, color: "#1C4188" }}>
                    Top Pediatric Specialist
                </Typography>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", lg: "row" } }}>
                        <Typography sx={{ color: "#9099AB", fontSize: { xs: "18px", md: "20px" }, width: { xs: "100%", lg: "70%" }, textAlign: "justify" }}> ENT care focuses on enhancing the overall well-being of patients through comprehensive and personalized medical attention.</Typography>
                        <Link to="/doctorlist" style={{ zIndex: 999 }}>
                            <Box sx={{ backgroundColor: "#42A5F5", width: { xs: "150px", lg: "250px" }, textAlign: "center", p: { xs: .6, lg: 1.3 }, borderRadius: 3, fontSize: { xs: "12px", lg: "15px" }, fontWeight: 500, color: "white", border: "2px solid #42A5F5", "&:hover": { color: "#42A5F5", backgroundColor: "white" }, mx: "auto", my: { xs: 2, lg: 0 } }}>
                                View All
                            </Box>
                        </Link>
                    </Box>

                </Container>
                <DemoDoctorCardList />
                <DemoDoctorCardList />
                <DemoDoctorCardList />


            </Stack>


        </Box>
    )
}

export default TopDoctors