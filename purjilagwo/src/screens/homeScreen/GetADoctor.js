import { Box, Typography } from '@mui/material';

const GetADoctor = () => {
    return (
        <>
            <Box sx={{ position: "relative", mt: { xs: 20, lg: 10 } }}>
                <Box sx={{ display: "flex", width: "100%", justifyContent: "center",  }}>
                    <Typography sx={{ fontWeight: 400, fontSize: { xs: "60px", lg: "80px" }, fontFamily: "Plaster", color: "#64EBB633", position: "absolute", left: { xs: 4, lg: "16%" }, top: { xs: "-10rem", lg: 0 }, }}>HOW GET</Typography>

                    <Typography sx={{ fontWeight: 400, fontSize: { xs: "60px", lg: "80px" }, fontFamily: "Plaster", color: "#64EBB633", position: "absolute", right: { xs: 4, lg: "11.5%" }, top: { xs: "-6rem", lg: 0 } }}>A DOCTOR</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column", lg: "row" } }}>
                    <Box sx={{ mt: { xs: 5, lg: 15 }, mb: { xs: 3, lg: 0 } }} >
                        <Box sx={{ mr: 20, mb: 3 }}>
                            <img src="../images/Home/ChoiceDoctor.svg" alt="" style={{ height: "150px" }} />
                        </Box>
                        <Box sx={{ ml: 10 }}>
                            <img src="../images/Home/MakeApporintment.svg" alt="" style={{ height: "150px" }} />
                        </Box>
                    </Box>
                    <Box sx={{ height: { xs: "25rem", lg: "30rem" } }}>
                        <img src="../images/Home/HeroImage.svg" alt="" style={{ height: "100%" }} />
                    </Box>
                    <Box sx={{ mt: { xs: 5, lg: 15 }, }}>
                        <Box sx={{ ml: 10, mb: 3 }}>
                            <img src="../images/Home/PaymentDue.svg" alt="" style={{ height: "150px" }} />
                        </Box>
                        <Box sx={{ ml: 13 }}>
                            <img src="../images/Home/CallNow.svg" alt="" style={{ height: "150px" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default GetADoctor