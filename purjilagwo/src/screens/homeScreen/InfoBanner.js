import React from 'react'
import { Box } from '@mui/material'

import svg1 from "../../assets/vectors/Group 279.svg"
import svg2 from "../../assets/vectors/Group 280.svg"
import svg3 from "../../assets/vectors/Group 274.svg"
import svg4 from "../../assets/vectors/Group 275.svg"
import svg5 from "../../assets/vectors/Group 276.svg"
import svg6 from "../../assets/vectors/Group 277.svg"

const InfoBanner = () => {
    return (
        <>
            <Box sx={{ py: "20px", display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" }, mb: 4 }}>
                <Box sx={{ display: { xs: "none", lg: "initial" } }}><img src={svg1} alt="img" style={{ height: "14rem" }} /></Box>
                <Box sx={{ display: { xs: "none", lg: "flex" }, my: 8, justifyContent: "space-between", width: "70%", }}>
                    <Box ><img src={svg3} alt="img" style={{ height: "14rem" }} /></Box>
                    <Box ><img src={svg4} alt="img" style={{ height: "14rem" }} /></Box>
                    <Box ><img src={svg5} alt="img" style={{ height: "14rem" }} /></Box>
                    <Box ><img src={svg6} alt="img" style={{ height: "14rem" }} /></Box>

                </Box>
                <Box sx={{ display: { xs: "flex", lg: "none" }, mb: 6, justifyContent: "center", width: "100%", }}>
                    <Box sx={{mx: 2}}>
                        <Box ><img src={svg3} alt="img" style={{ height: "12rem" }} /></Box>
                        <Box ><img src={svg6} alt="img" style={{ height: "12rem" }} /></Box>

                    </Box>
                    <Box sx={{mx: 2}}>
                        <Box ><img src={svg4} alt="img" style={{ height: "12rem" }} /></Box>
                        <Box ><img src={svg5} alt="img" style={{ height: "12rem" }} /></Box>
                    </Box>

                </Box>

                <Box sx={{ display: { xs: "none", lg: "initial" } }}><img src={svg2} alt="" style={{ height: "14rem" }} /></Box>

            </Box>
        </>
    )
}

export default InfoBanner