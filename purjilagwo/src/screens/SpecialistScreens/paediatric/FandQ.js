import React from 'react'
import { Box } from '@mui/material';
import FandQComponent from '../../../components/FandQComponent';

const FandQ = () => {

  const question = [
    {
      question: "What is a pediatrician, and what age group do they care for?",
      answer: "A pediatrician is a medical doctor who specializes in the care of infants, children, and adolescents, typically up to the age of 18 or sometimes older, depending on the healthcare system. They provide medical care, preventive services, and health education tailored to the unique needs of young patients.",
      panel: "panel1"
    },
    {
      question: "What services do pediatricians offer?",
      answer: "Pediatricians offer a wide range of services, including well-child visits, vaccinations, treatment for common childhood illnesses and injuries, developmental screenings, management of chronic conditions, and guidance on nutrition, growth, and behavior.",
      panel: "panel2"
    },
    {
      question: "When should I schedule my child's first pediatrician visit?",
      answer: " It is recommended to schedule your child's first pediatrician visit within the first few weeks after birth. This initial visit, often called a newborn check-up, allows the pediatrician to assess the baby's health, provide guidance on feeding and sleeping, and address any concerns the parents may have.",
      panel: "panel3"
    },
    {
      question: "How often should I take my child to see the pediatrician for routine check-ups?",
      answer: "Pediatricians typically recommend regular well-child visits at specific intervals during infancy, childhood, and adolescence. These visits allow the pediatrician to monitor growth and development, provide age-appropriate screenings and vaccinations, and address any health or developmental concerns.",
      panel: "panel4"
    },
    {
      question: "What should I do if my child is sick or injured outside of regular office hours?",
      answer: "Many pediatric practices offer after-hours care, including evenings and weekends, for urgent medical needs. Additionally, pediatricians often provide guidance on when to seek emergency care or how to manage minor illnesses or injuries at home until the next available appointment.",
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