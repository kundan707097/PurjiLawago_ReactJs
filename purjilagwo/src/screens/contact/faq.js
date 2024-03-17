import { Box ,Typography,Grid  } from '@mui/material'
import React from 'react'


import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
const Faq = () => {
  return (
    <>
      
{/* this section is for mobile view  */}

<Box sx={{pt:10,display:{xs:'block' ,sm:'none'}}}   >
        
<img src="../images/contact/faq.png" alt=""  style={{ float: "right",height: "80px", width: "120px"}} />

      <Box  sx={{marginBottom:"30px", marginLeft:"20px",marginTop:"20px"}}>
          <Typography sx={{ fontSize: "25px", fontWeight: "800" }}> <span style={{ color: "#42a5f5" }}>FAQ </span> <span style={{ color: "#83efc5" }}>QUESTION ASK</span></Typography>
          </Box>
      </Box>

{/* this section is for dekstop view  */}
<Box sx={{pt:10,display:{xs:'none' ,sm:'block'}}}   >
        
<img src="../images/contact/faq.png" alt=""  style={{ float: "right",height: "94px", width: "143px"}} />

      <Box  sx={{marginLeft:"100px",marginBottom:"30px"}}>
          <Typography sx={{ fontSize: "60px", fontWeight: "800" }}> <span style={{ color: "#42a5f5" }}>FAQ </span> <span style={{ color: "#83efc5" }}>QUESTION ASK</span></Typography>
          </Box>
      </Box>







            <div class="container">
      <Accordion defaultExpanded sx={{ mt: { xs: 2, lg: 0 }, padding: "20px", color: "black", backgroundColor: "#f2f6f9", border: "2px solid green" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         1. How can I get in touch with your customer support team?
        </AccordionSummary>
        <AccordionDetails>
         You can reach our customer support team by filling out the contact form on this page, sending us an email at support@example.com, or calling us at [phone number]. Our team is available [hours of operation] to assist you with any inquiries or concerns.
        </AccordionDetails>
      
      </Accordion>
      <Accordion sx={{ mt: { xs: 2, lg: 0 }, padding: "20px", color: "black", backgroundColor: "#f2f6f9", border: "2px solid green" }}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         2. What is your response time for inquiries submitted through the contact form?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: { xs: 2, lg: 0 }, padding: "20px", color: "black", backgroundColor: "#f2f6f9", border: "2px solid green" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         3. Can I visit your office in person?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
     <Accordion sx={{ mt: { xs: 2, lg: 0 }, padding: "20px", color: "black", backgroundColor: "#f2f6f9", border: "2px solid green" }}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         4. Do you have a physical store where I can purchase your products/services?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: { xs: 2, lg: 0 }, padding: "20px", color: "black", backgroundColor: "#f2f6f9", border: "2px solid green" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        5. How can I stay updated on news and promotions from your company?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>   
    </>
  )
}

export default Faq