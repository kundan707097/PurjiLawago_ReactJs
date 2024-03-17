import React from 'react'
import Footer from '../../components/Footer'
import LiveCounter from '../../components/LiveCounter'
import { Box,Typography,Grid } from '@mui/material'
import T_Banner from './t_banner'
import T_content from './t_content'
const Terms = () => {
  return (
      <>
          
          <T_Banner />
          <T_content/>
     <LiveCounter/>
    <Footer/>
    </>
  )
}

export default Terms