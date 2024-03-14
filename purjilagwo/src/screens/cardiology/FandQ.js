import React from 'react'
import { Box } from '@mui/material';
import FandQComponent from '../../components/FandQComponent'

const FandQ = () => {
    const question = [
        {
          question: "What are the common risk factors for heart disease?",
          answer: " Common risk factors for heart disease include high blood pressure, high cholesterol levels, smoking, obesity, lack of physical activity, diabetes, and a family history of heart disease.",
          panel: "panel1"
        },
        {
          question: "How often should one check their blood pressure for heart health?",
          answer: "Regular monitoring of blood pressure is important. Individuals with normal blood pressure should check it at least once a year, while those with hypertension or other risk factors may need more frequent checks as advised by their healthcare provider.",
          panel: "panel2"
        },
        {
          question: "What role does exercise play in heart health?",
          answer: "Regular exercise is crucial for heart health. It helps maintain a healthy weight, lowers blood pressure, improves cholesterol levels, and enhances overall cardiovascular function. Aim for at least 150 minutes of moderate-intensity exercise per week.",
          panel: "panel3"
        },
        {
          question: "How does stress impact heart health?",
          answer: "Chronic stress can contribute to heart disease by triggering unhealthy habits like overeating, smoking, or increased alcohol consumption. Stress management techniques such as meditation, exercise, and adequate sleep can positively impact heart health.",
          panel: "panel4"
        },
        {
          question: "What dietary choices promote a healthy heart?",
          answer: "A heart-healthy diet includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Limiting saturated and trans fats, sodium, and added sugars can help prevent cardiovascular diseases.",
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