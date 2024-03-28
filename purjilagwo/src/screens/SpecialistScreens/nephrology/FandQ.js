import React from 'react'
import { Box } from '@mui/material';
import FandQComponent from '../../../components/FandQComponent'

const FandQ = () => {
    const question = [
        {
          question: "What does a nephrologist specialize in?",
          answer: "Nephrologists are specialists in kidney health, diagnosing and treating conditions such as chronic kidney disease (CKD), kidney stones, and kidney infections.",
          panel: "panel1"
        },
        {
          question: "What treatment options do nephrologists offer?",
          answer: "Nephrologists provide a range of treatment options, including medication management, dialysis for kidney failure, and kidney transplantation for suitable candidates.",
          panel: "panel2"
        },
        {
          question: "How can one prevent kidney problems?",
          answer: "Preventive measures for kidney health include staying hydrated, maintaining a balanced diet low in sodium and processed foods, regular exercise, avoiding smoking, and managing conditions like diabetes and hypertension.",
          panel: "panel3"
        },
        {
          question: "When should someone see a nephrologist?",
          answer: "It's advisable to see a nephrologist if experiencing symptoms such as persistent changes in urine output, blood in the urine, uncontrolled high blood pressure, or swelling in the legs or face.",
          panel: "panel4"
        },
        {
          question: "How does a nephrologist collaborate with other healthcare professionals?",
          answer: "Nephrologists work closely with primary care physicians, urologists, dietitians, and other specialists to provide comprehensive care tailored to each patient's needs.",
          panel: "panel5"
        },
      ]
    
    
      return (
        <Box sx={{ mx: { xs: 2, lg: 25 },  my:{xs: 2, lg:10} }}>
          <FandQComponent question={question} />
        </Box>
      )
}

export default FandQ