import React from 'react'
import { Box } from '@mui/material'

const InfoBanner = () => {
    return (
        <>
            <Box sx={{ py: "20px", display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" }, mb: 4 }}>
                <Box sx={{ display: { xs: "none", lg: "initial" } }}><img src="../images/Home/Group279.svg" alt="img" style={{ height: "14rem" }} /></Box>
                <Box sx={{ display: { xs: "none", lg: "flex" }, my: 8, justifyContent: "space-between", width: "70%", }}>
                    <Box ><img src="../images/Home/Group274.svg" alt="img" style={{ height: "14rem" }} /></Box>
                    <Box ><img src="../images/Home/Group275.svg" alt="img" style={{ height: "14rem" }} /></Box>
                    <Box ><img src="../images/Home/Group276.svg" alt="img" style={{ height: "14rem" }} /></Box>
                    <Box ><img src="../images/Home/Group277.svg" alt="img" style={{ height: "14rem" }} /></Box>

                </Box>
                <Box sx={{ display: { xs: "flex", lg: "none" }, mb: 6, justifyContent: "center", width: "100%", }}>
                    <Box sx={{mx: 2}}>
                        <Box ><img src="../images/Home/Group274.svg" alt="img" style={{ height: "12rem" }} /></Box>
                        <Box ><img src="../images/Home/Group277.svg" alt="img" style={{ height: "12rem" }} /></Box>

                    </Box>
                    <Box sx={{mx: 2}}>
                        <Box ><img src="../images/Home/Group275.svg" alt="img" style={{ height: "12rem" }} /></Box>
                        <Box ><img src="../images/Home/Group276.svg" alt="img" style={{ height: "12rem" }} /></Box>
                    </Box>

                </Box>

                <Box sx={{ display: { xs: "none", lg: "initial" } }}><img src="../images/Home/Group280.svg" alt="" style={{ height: "14rem" }} /></Box>

            </Box>
        </>
    )
}

export default InfoBanner