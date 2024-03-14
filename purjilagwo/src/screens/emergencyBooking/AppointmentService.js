import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorsList from '../../components/DoctorsListCard'
import DoctorService from '../../services/Doctor.services'
import Loading from '../../components/Loading'
import { useSnackbar } from 'notistack'
// import { dummy_data } from '../dummyData/DummyData'

const AppointmentService = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [cardData, setCardData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        (async () => {
            try {
                setLoading(true);
                // setCardData(dummy_data)
                const response = await DoctorService.GetDoctorListInEmergency();
                if (response.status === 200) {
                    console.log(response.data);
                    setCardData(response.data);
                    setLoading(false);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                enqueueSnackbar(error, { variant: "error" })
            }
        })()
    }, [])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Box sx={{ mx: { xs: 5, lg: 15 }, my: { xs: 3, lg: 10 } }}>

                    <Stack spacing={{ xs: 2, sm: 6 }} direction="row" useFlexGap flexWrap="wrap" sx={{ justifyContent: "center", py: "20px", }}>
                        <Typography sx={{ fontSize: { xs: "24px", lg: "40px" }, fontWeight: 600, }}>
                            <span style={{ color: "#1C4188" }}>Appointment </span><span style={{ color: "#42A5F5" }}>Services</span>
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", lg: "row" } }}>
                            <Typography sx={{ color: "#9099AB", fontSize: { xs: "18px", md: "20px" }, width: { xs: "100%", lg: "60%" }, textAlign: "justify" }}>Heart attacks often cause prolonged discomfort in the chest, feeling like pressure, squeezing, or pain.</Typography>
                            <Link to="/doctorlist" style={{ zIndex: 999 }}>
                                <Box sx={{ backgroundColor: "#42A5F5", width: { xs: "150px", lg: "250px" }, textAlign: "center", p: { xs: .6, lg: 1.3 }, borderRadius: 3, fontSize: { xs: "12px", lg: "15px" }, fontWeight: 500, color: "white", border: "2px solid #42A5F5", "&:hover": { color: "#42A5F5", backgroundColor: "white" }, mx: "auto", my: { xs: 2, lg: 0 } }}>
                                    View All
                                </Box>
                            </Link>
                        </Box>
                        {cardData && cardData.length > 0 && (
                            <>
                                {cardData.map((data,index) =>{
                                    return <DoctorsList key={index} data={data} />
                                })}
                            </>
                        )}


                    </Stack>


                </Box>
            )}
        </>

    )
}

export default AppointmentService