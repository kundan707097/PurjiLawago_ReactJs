import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const LiveCounter = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                
                <Box sx={{ backgroundColor: "#42A5F5", padding: "20px", display: "flex", justifyContent: "space-evenly", flexDirection: { xs :"column" ,sm: "row"} }}>
                    <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                        {/* <HealthAndSafetyIcon style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black", fontSize: "50px" }} /> */}
                        {counterOn && (<>
                        <Box style={{fontSize: "40px"}} >
                        <CountUp start={0}  end={1000} duration={3} delay={0} style={{marginRight: "4px"}} />
                        <span>+</span>
                        </Box>
                        </>)}
                        
                        <Typography sx={{ my: "10px", fontWeight: 800, fontSize: "30px" }}>Active Visitors</Typography>
                    </Box>
                    <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                        {/* <HealthAndSafetyIcon style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black", fontSize: "50px" }} /> */}
                        {counterOn && (<>
                        <Box style={{fontSize: "40px"}} >
                        <CountUp start={0}  end={500} duration={2} delay={0} style={{marginRight: "4px"}} />
                        <span>+</span>
                        </Box>
                        </>)}
                        
                        <Typography sx={{ my: "10px", fontWeight: 800, fontSize: "30px" }}>Doctors</Typography>
                    </Box>
                    <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                        {/* <HealthAndSafetyIcon style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black", fontSize: "50px" }} /> */}
                        {counterOn && (<>
                        <Box style={{fontSize: "40px"}} >
                        <CountUp start={0}  end={10000} duration={4} delay={0} style={{marginRight: "4px"}} />
                        <span>+</span>
                        </Box>
                        </>)}
                        
                        <Typography sx={{ my: "10px", fontWeight: 800, fontSize: "30px" }}>Patient Treated</Typography>
                    </Box>
    
    
    
                </Box>
    
                </ScrollTrigger>
    </>
  )
}

export default LiveCounter