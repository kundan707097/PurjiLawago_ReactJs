import React from 'react'
import { Box, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

const MobileAppBanner = () => {
    return (
        <Box sx={{ display: "flex", mb: {xs: 0, lg:15}, mt: 4, justifyContent: { xs: "center", lg: "space-between" }, width: "100%" }}>

            {/* Mobile photo */}
            
            <Box sx={{ display: "flex", px: { xs: 2, lg: 20 }, width: "50%" }}>
                <Box sx={{ height: { xs: "40%", lg: "100%" }, mt: 8, mr: { xs: 0, lg: 3 } }}>
                    <img src="../../images/MobileApp/image134.svg" alt="" height={"100%"} />
                </Box>
                <Box sx={{ height: { xs: "40%", lg: "100%" }, ml: { xs: 0, lg: 3 } }}>
                    <img src="../../images/MobileApp/image135.svg" alt="" height={"100%"} />
                </Box>
            </Box>

            {/* Mobile app text ans logo */}
            <Box sx={{ width: "50%" ,ml: {xs: 4, lg:10} }}>
                <Typography sx={{ color: "#1C4188", fontSize: { xs: "20px", lg: "62px" }, fontWeight: 900 }}>MOBILE APP</Typography>
                <Typography sx={{ color: "#1C4188", fontSize: { xs: "20px", lg: "62px" }, fontWeight: 900 }}>COMING SOON</Typography>

                <Box sx={{ display: "flex", my: 4 }}>

                    <Box sx={{ height: { xs: "4rem", lg: "100%" }, mr: { xs: 1, lg: 3 }, bgcolor: "#DBEEFC", p: 2, borderRadius: "100px" }}>
                        <img src="../../images/MobileApp/image138.svg" alt="" height={"100%"} />
                    </Box>

                    <Box sx={{ height: { xs: "4rem", lg: "100%" }, ml: { xs: 1, lg: 3 }, bgcolor: "#DBEEFC", p: 2, borderRadius: "100px" }}>
                        <img src="../../images/MobileApp/image137.svg" alt="" height={"100%"} />
                    </Box>

                </Box>

                <Box sx={{width: { xs: "150px", lg: "250px" },}}>
                    <Link to="/" >
                        <Box sx={{ backgroundColor: "white",  textAlign: "center", p: 1.4, py: { xs: 1.2, lg: 2 }, borderRadius: 2, fontSize: { xs: "12px", lg: "15px" }, fontWeight: 500, color: "#1C4188", border: "2px solid #42A5F5", "&:hover": { backgroundColor: "#42A5F5", color: "white" }, }}>
                            LEARN MORE
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default MobileAppBanner