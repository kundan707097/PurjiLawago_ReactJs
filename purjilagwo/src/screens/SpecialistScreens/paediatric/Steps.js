import React from 'react'
import { Box, Typography } from '@mui/material'

const Steps = () => {
    return (
        <Box sx={{ my: { xs: 5, lg: 15 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, position: "relative" }}>
            <Box sx={{ height: { xs: "20rem", lg: "35rem" } }}>
                <img src="../images/Paediatric/img9.svg" alt="" height={"100%"} />
            </Box>

            <Box sx={{ pl: { xs: 1, lg: 10 }, mt: { xs: 5, lg: 0 } }}>


                <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between", flexDirection: { xs: "column", lg: 'row' }, alignItems: { xs: "center", lg: "normal" } }}>


                    <Box sx={{ width: { xs: "100%", lg: "100%" }, display: "flex", }}>
                        <Box sx={{ width: { xs: "100%", lg: "50%" }, ml: { lg: 2 }, mx: { xs: 2, lg: 0 }, }}>
                            <Box sx={{ bgcolor: "#64EBB666",  width: {xs: "90%", lg:"70%"}, borderTop: "10px solid #42A5F5", textAlign: "center" }}>
                                <Typography sx={{ color: "#1C4188", fontSize: {xs: "40px", lg: "80px"}, fontWeight: 900, }}>1</Typography>

                                <Typography sx={{ color: "#848A90", fontSize: "15px", fontWeight: 400,px: {xs: 1, lg:3}, pb: 3 }}>
                                    {" "}
                                    Whether you breastfeed or formula-feed
                                </Typography>
                            </Box>

                            <Box sx={{ mt: 8, bgcolor: "#42A5F56E", width: {xs: "90%", lg:"70%"}, borderLeft: "10px solid #64EBB6", textAlign: "center" }}>

                                <Typography sx={{ color: "white", fontSize: {xs: "40px", lg: "80px"}, fontWeight: 900, }}>3</Typography>

                                <Typography sx={{ color: "white", fontSize: "15px", fontWeight: 400, px: {xs: 1, lg:3}, pb: 3 }}>
                                    {" "}
                                    Whether you breastfeed or formula-feed
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: { xs: "100%", lg: "50%" }, ml: { xs: 1, lg: 6 }, mt: 6 }}>

                            <Box sx={{ bgcolor: "#42A5F56E", width: {xs: "90%", lg:"70%"},borderRight: "10px solid #64EBB6", textAlign: "center" }}>

                                <Typography sx={{ color: "white",fontSize: {xs: "40px", lg: "80px"}, fontWeight: 900, }}>2</Typography>

                                <Typography sx={{ color: "white", fontSize: "15px", fontWeight: 400, px: {xs: 1, lg:3}, pb: 3 }}>
                                    {" "}
                                    Whether you breastfeed or formula-feed
                                </Typography>
                            </Box>

                            <Box sx={{ mt: 8, bgcolor: "#64EBB666", width: {xs: "90%", lg:"70%"}, borderBottom: "10px solid #42A5F5", textAlign: "center" }}>
                                <Typography sx={{ color: "#1C4188", fontSize: {xs: "40px", lg: "80px"}, fontWeight: 900, }}>4</Typography>

                                <Typography sx={{ color: "#848A90", fontSize: "15px", fontWeight: 400, px: {xs: 1, lg:3}, pb: 3 }}>
                                    {" "}
                                    Whether you breastfeed or formula-feed
                                </Typography>
                            </Box>
                        </Box>
                    </Box>


                </Box>


            </Box>



        </Box>
    )
}

export default Steps