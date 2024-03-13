import React from 'react'
import { Box, Typography, AccordionSummary, AccordionDetails, Accordion, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FandQComponent = ({question}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>

      {/* Experince heading */}

      <Box sx={{ display: "flex", mx: 2, borderBottom: "2px dashed #64EBB6", width: { xs: "70%", sm: "20%" } }}>
        <Typography sx={{ color: "#1492F7", fontSize: "30px", fontWeight: 800, pb: 1, }}>FAQ</Typography>
      </Box>

      {/* Experince content */}

      <Box sx={{ my: 4, mx: 2, }}>

        {question.map((item, index) =>(
          <Accordion expanded={expanded === item.panel} onChange={handleExpand(item.panel)} sx={{ my: 2, boxShadow: 0, border: "1px solid #42A5F599", py: 2, borderRadius: 2, bgcolor: "#F2F6F9" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1bh-content"
            // id="panel1bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0, color: "#1C4188", fontSize: { xs: "14px", lg: "18px" }, fontWeight: 700 }}>
              {index+1}. {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ px: 2.5, fontSize: { xs: "14px", lg: "16px" } }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
        ))}

      </Box>

    </Box>
  )
}

export default FandQComponent