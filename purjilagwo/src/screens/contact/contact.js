import React from 'react'
import Landing from './Landing'
import LiveCounter from '../../components/LiveCounter'
import Footer from '../../components/Footer'
import {Box ,Typography} from "@mui/material"
import { green } from '@mui/material/colors'
import Banner from './banner'
import Map  from './map'
import Faq  from './faq'
import Privacy from './privacy'
import Icon from './icon'
import Contact_us_input from './contact_us_input'
import Counter1 from './counter1'
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Banner />
      <Icon />
      <Contact_us_input/>
     <Map/>
     <Faq/>
      {/* <LiveCounter />  */}
      <Counter1/>
   <Privacy/>
    <LiveCounter/>
    <Footer/>
    </>
  )
}

export default Contact