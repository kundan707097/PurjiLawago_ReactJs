import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


import svg1 from "../assets/vectors/LiveCounterVector/image 60.svg"
import svg2 from "../assets/vectors/LiveCounterVector/image 61.svg"
import svg3 from "../assets/vectors/LiveCounterVector/image 62.svg"


const LiveCounter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <Box sx={{ width: "85%", backgroundColor: "#42A5F5", p: 6, display: "flex", justifyContent: "space-between", position: "relative", mx: "auto", borderRadius: "10px 10px 0 0", flexDirection: {xs: "column", lg: "row"}, alignItems: "center"  }}>

          <Box sx={{ display: "flex", flexDirection: {xs: "column", lg: "row"}, alignItems: "center", mt: {xs: 4, lg:0}  }}>
            <img src={svg1} alt="" height={90} width={90} />
            {counterOn && (<>
              <Box sx={{ fontSize: "40px", color: "white", fontWeight: 900, ml: {xs: 0, lg:3}, mt: {xs: 2, lg:0}, textAlign: "center" }} >
                <CountUp start={0} end={1000} duration={3} delay={0} style={{ marginRight: "4px", }} />
                <span>+</span>
                <Typography sx={{ fontSize: {xs: "20px" , lg: "24px"}, color: "white", mt:2  }}>ACTIVE VISITORS</Typography>
              </Box>
            </>)}
          </Box>

          <Box sx={{ display: "flex", flexDirection: {xs: "column", lg: "row"} , alignItems: "center" ,mt: {xs: 4, lg:0} }}>
            <img src={svg3} alt="" height={90} width={90} />
            {counterOn && (<>
              <Box sx={{ fontSize: "40px", color: "white", fontWeight: 900, ml: {xs: 0, lg:3}, mt: {xs: 2, lg:0}, textAlign: "center"}} >
                <CountUp start={0} end={500} duration={2} delay={0} style={{ marginRight: "4px" }} />
                <span>+</span>
                <Typography sx={{ fontSize: {xs: "20px" , lg: "24px"},color: "white", mt:2 }}>TREATMENT OF PATIENT</Typography>
              </Box>
            </>)}
          </Box>

          <Box sx={{ display: "flex", flexDirection: {xs: "column", lg: "row"}, alignItems: "center", mt: {xs: 4, lg:0} }}>
            <img src={svg2} alt="" height={90} width={90} />
            {counterOn && (<>
              <Box sx={{ fontSize: "40px", color: "white", fontWeight: 900, ml: {xs: 0, lg:3}, mt: {xs: 2, lg:0}, textAlign: "center" }} >
                <CountUp start={0} end={100} duration={4} delay={0} style={{ marginRight: "4px" }} />
                <span>+</span>
                <Typography sx={{ fontSize: {xs: "20px" , lg: "24px"}, color: "white", mt:2 }}>ACTIVE DOCTORS</Typography>
              </Box>
            </>)}
          </Box>

        </Box>
      </ScrollTrigger>
    </>
  )
}

export default LiveCounter