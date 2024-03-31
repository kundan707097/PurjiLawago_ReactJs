import React from 'react'
import { Box } from '@mui/material';
import FandQComponent from '../../../components/FandQComponent'

const FandQ = () => {
    const question = [
        {
          question: "What does an ENT specialist treat?",
          answer: " ENT specialists, or otolaryngologists, treat disorders related to the ear, nose, throat, and structures of the head and neck. This includes conditions like hearing loss, sinus infections, voice disorders, and head and neck cancers.",
          panel: "panel1"
        },
        {
          question: "When should I see an ENT doctor?",
          answer: "You should consult an ENT specialist if you experience persistent issues such as chronic ear pain, nasal congestion, difficulty swallowing, persistent sore throat, or any concerns related to hearing loss.",
          panel: "panel2"
        },
        {
          question: " How are ear infections diagnosed and treated by ENT specialists?",
          answer: "ENT specialists diagnose ear infections through examinations and may use tools like otoscopes. Treatment often involves antibiotics for bacterial infections, ear drops, and in some cases, surgical interventions for chronic or severe cases.",
          panel: "panel3"
        },
        {
          question: "Can an ENT specialist help with snoring and sleep apnea?",
          answer: "Yes, ENT specialists can assist with snoring and sleep apnea. They may recommend lifestyle changes, CPAP therapy, or surgical interventions like uvulopalatopharyngoplasty (UPPP) to address these sleep-related issues.",
          panel: "panel4"
        },
        {
          question: "What is a common procedure performed by ENT specialists for sinus issues?",
          answer: " Functional endoscopic sinus surgery (FESS) is a common procedure for addressing chronic sinusitis. ENT specialists use an endoscope to remove obstructions and improve sinus drainage, providing relief to patients with persistent sinus problems.",
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