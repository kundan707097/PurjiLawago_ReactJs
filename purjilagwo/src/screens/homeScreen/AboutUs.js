import { Box, Typography } from '@mui/material'

const AboutUs = () => {
    return (
        <>
            <Box sx={{ display: "flex", position: "relative", justifyContent: "space-between", my: 15, flexDirection: { xs: "column-reverse", lg: "row" }, alignItems: { xs: "center", lg: "normal" } }}>
                <Box>
                    <Box sx={{ pl: { xs: 2, lg: 15 }, mt: { xs: 4, lg: 0 } }}>
                        <Typography sx={{ fontSize: "30px", fontWeight: 700, color: "#1C4188", }}>About <span style={{ color: "#42A5F5" }}>Us</span></Typography>
                        {/* <img src="../images/Home/Line23.svg" alt="" height={"3px"} /> */}
                        {/* <Typography sx={{ fontSize: "15px", color: "#9099AB", fontWeight: 400, mt: 3 }}>
                            HealthPrime was founded by a team of healthcare professionals with a shared passion for improving access to reliable healthcare resources. With backgrounds in medicine, pharmacy, and technology, we bring a wealth of knowledge and expertise to our platform.
                        </Typography> */}
                    </Box>
                    <Box sx={{ my: 3, display: "flex" }}>
                        {/* <Box sx={{display: {xs: "none", lg: "initial"}}}>
                            <img src="../images/Home/Group346.svg" alt="" />
                        </Box> */}
                        <Typography sx={{ fontWeight: 600, fontSize: "30px", color: "#1C4188", mx: {xs: 4, lg:14}, textAlign: {xs: "center", lg:"justify"} }}>
                            “We understand the importance of trust when it comes to matters of health. That's why we are committed to providing accurate and up-to-date informaion, sourced from reputable medical ”
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "18px", fontWeight: 400, color: "#9099AB", ml: {xs: 3, lg:12} }}>
                        HealthPrime was founded by a team of healthcare professionals with a shared passion for improving access to reliable healthcare resources. With backgrounds in medicine, pharmacy, and technology, we bring a wealth of knowledge and expertise to our platform.
                    </Typography>
                </Box>
                {/* <Box sx={{ height: { xs: "22rem", lg: "30rem" } }}>
                    <img src="../images/Home/ImageItems.svg" alt="" style={{ height: "100%" }} />
                </Box> */}
            </Box>

        </>
    )
}

export default AboutUs