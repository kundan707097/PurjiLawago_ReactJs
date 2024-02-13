import { Box, Typography } from "@mui/material"

import svg1 from "../../assets/vectors/Video Items.svg"

const WhyUs = () => {

    const title_1 = [
        "Expertise Doctor visits ", "Compassionate Care", "Comprehensive Services", "Cutting-edge Technology"
    ]
    const title_2 = [
        "Patient-Centered Approach", "Convenient Locations", "Timely Appointments", "Transparent Communication"
    ]

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", my: 20, flexDirection: { xs: "column-reverse", lg: "row" }, alignItems: { xs: "center", lg: 'normal' } }}>
                <Box sx={{ width: { xs: "100%", lg: "50%" }, mt: { xs: 4, lg: 0 }, px: { xs: 1, lg: 0 }, pl: { lg: 13 }, }} >
                    <Typography sx={{ fontSize: "15px", fontWeight: 600, color: "#9099AB" }} >
                        We Are Perfect
                    </Typography>
                    <Box sx={{ width: "5rem", height: "3px", backgroundColor: "#02A0E7", mt: 1 }}></Box>
                    <Typography sx={{ color: "#1C4188", fontSize: { xs: "30px", lg: "40px" }, fontWeight: 700, mt: 4 }}>WHY CHOICE OUR</Typography>
                    <Typography sx={{ color: "#42A5F5", fontSize: { xs: "30px", lg: "40px" }, fontWeight: 700 }}>DOCTOR OR SERVICE</Typography>

                    <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            {title_1.map((item) => {
                                return (
                                    <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
                                        <Box sx={{ border: "2px dashed white", backgroundColor: "#42A5F5", width: "20px", height: "20px", borderStyle: "dashed", display: "flex", alignItems: "center", }}>
                                            <Box sx={{ width: "10px", height: "10px", borderRadius: "20px", backgroundColor: "white", mx: "auto" }}></Box>
                                        </Box>
                                        <Typography sx={{ fontWeight: 400, fontSize: { xs: "13px", lg: "20px" }, ml: { xs: 1, lg: 3 }, color: "#9099AB" }}>{item}</Typography>
                                    </Box>
                                )
                            })}
                        </Box>
                        <Box>
                            {title_2.map((item) => {
                                return (
                                    <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
                                        <Box sx={{ border: "2px dashed white", backgroundColor: "#42A5F5", width: "20px", height: "20px", borderStyle: "dashed", display: "flex", alignItems: "center", }}>
                                            <Box sx={{ width: "10px", height: "10px", borderRadius: "20px", backgroundColor: "white", mx: "auto" }}></Box>
                                        </Box>
                                        <Typography sx={{ fontWeight: 400, fontSize: { xs: "13px", lg: "20px" }, ml: { xs: 1, lg: 3 }, color: "#9099AB" }}>{item}</Typography>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ height: { xs: "18rem", lg: "28rem" }, }} >
                    <img src={svg1} alt="" style={{ height: "100%" }} />
                </Box>

            </Box>
        </>
    )
}

export default WhyUs