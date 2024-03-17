import React from 'react'
import Footer from '../../components/Footer'
import LiveCounter from '../../components/LiveCounter'
import { Box,Typography,Grid } from '@mui/material'
import P_Banner from './p_banner'
import P_content from './p_content'
const Privacy_policy = () => {
  return (
    <>
      <P_Banner />
      <P_content/>
     <LiveCounter/>
    <Footer/>
    </>
  )
}

export default Privacy_policy