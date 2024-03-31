import React from 'react'
import { Box } from '@mui/material';
import FandQComponent from '../../../components/FandQComponent'

const FandQ = () => {
    const question = [
        {
          question: "How often should I visit the dentist for a check-up?",
          answer: "It is generally recommended to visit the dentist every six months for a routine check-up and cleaning. However, your dentist may suggest a different schedule based on your individual oral health needs.",
          panel: "panel1"
        },
        {
          question: "What is the importance of flossing in dental care?",
          answer: "Flossing is crucial in dental care as it helps remove plaque and debris from between the teeth and along the gumline. This reduces the risk of cavities, gum disease, and promotes overall oral hygiene.",
          panel: "panel2"
        },
        {
          question: "Are electric toothbrushes more effective than manual ones?",
          answer: "Electric toothbrushes can be more effective at removing plaque and preventing gingivitis, as they often have rotating or oscillating brush heads that can reach areas that may be challenging with a manual toothbrush.",
          panel: "panel3"
        },
        {
          question: "How can I prevent cavities?",
          answer: "To prevent cavities, maintain a consistent oral hygiene routine, including brushing your teeth twice a day with fluoride toothpaste, flossing daily, limiting sugary snacks, and attending regular dental check-ups.",
          panel: "panel4"
        },
        {
          question: "What role does diet play in dental care?",
          answer: "A balanced diet contributes significantly to dental health. Limiting sugary and acidic food and drinks helps prevent tooth decay. Consuming foods rich in calcium and vitamin D, like dairy products, supports strong teeth and bones.",
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