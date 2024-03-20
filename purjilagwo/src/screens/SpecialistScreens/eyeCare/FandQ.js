import React from 'react'
import { Box } from '@mui/material';
import FandQComponent from '../../../components/FandQComponent';

const FandQ = () => {

  const question = [
    {
      question: "How often should I have an eye exam to maintain optimal eye health?",
      answer: "It is generally recommended to have a comprehensive eye exam every two years, or more frequently if advised by your eye care professional.",
      panel: "panel1"
    },
    {
      question: "What are common symptoms of eye strain, and how can I alleviate them?",
      answer: "Symptoms include headaches, blurred vision, and fatigue. To alleviate eye strain, take regular breaks, adjust screen brightness, and follow the 20-20-20 rule (every 20 minutes, look at something 20 feet away for at least 20 seconds).",
      panel: "panel2"
    },
    {
      question: "Are there specific foods that promote good eye health?",
      answer: "Yes, foods rich in vitamins A, C, and E, as well as omega-3 fatty acids, can contribute to good eye health. Include leafy greens, fish, nuts, and colorful fruits and vegetables in your diet.",
      panel: "panel3"
    },
    {
      question: "How can I protect my eyes from harmful UV rays?",
      answer: "Wear sunglasses that block 100% of UVA and UVB rays. Additionally, wear a wide-brimmed hat for added protection, especially during peak sunlight hours.",
      panel: "panel4"
    },
    {
      question: "What steps can I take to maintain healthy eyes while working long hours on a computer?",
      answer: "Practice the 20-20-20 rule, adjust your screen to reduce glare, ensure proper lighting, and consider using artificial tears to prevent dry eyes. Regular eye exams are crucial for monitoring any potential issues.",
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