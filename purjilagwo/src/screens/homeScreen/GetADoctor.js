import { Box, Typography } from '@mui/material';


import svg1 from "../../assets/vectors/Hero Image.svg"
import svg2 from "../../assets/vectors/Choice Doctor.svg";
import svg3 from "../../assets/vectors/Make Apporintment.svg";
import svg4 from "../../assets/vectors/Payment Due.svg";
import svg5 from "../../assets/vectors/Call Now.svg";

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
                            <img src={svg2} alt="" style={{ height: "150px" }} />
                        </Box>
                        <Box sx={{ ml: 10 }}>
                            <img src={svg3} alt="" style={{ height: "150px" }} />
                        </Box>
                    </Box>
                    <Box sx={{ height: { xs: "25rem", lg: "30rem" } }}>
                        <img src={svg1} alt="" style={{ height: "100%" }} />
                    </Box>
                    <Box sx={{ mt: { xs: 5, lg: 15 }, }}>
                        <Box sx={{ ml: 10, mb: 3 }}>
                            <img src={svg4} alt="" style={{ height: "150px" }} />
                        </Box>
                        <Box sx={{ ml: 13 }}>
                            <img src={svg5} alt="" style={{ height: "150px" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default GetADoctor