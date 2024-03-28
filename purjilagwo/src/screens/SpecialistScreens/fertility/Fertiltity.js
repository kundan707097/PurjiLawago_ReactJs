import React from 'react'
import Landing from './Landing'
import TopDoctors from './TopDoctors'
import HowGetADoctor from '../../../components/HowGetADoctor'
import FandQ from './FandQ'
import Stages from './Stages'
import OurTreatment from './OurTreatment'
import OwnHealthCare from './OwnHealthCare'
import LiveCounter from '../../../components/LiveCounter'
import Footer from '../../../components/Footer'
import OurServices from './OurServices'

const Fertiltity = () => {
  return (
    <>
      <Landing />
      <TopDoctors />
      <OurServices />
      <Stages />
      <OurTreatment />
      <HowGetADoctor />
      <OwnHealthCare />
      <FandQ />
      <LiveCounter />
      <Footer />
    </>

  )
}

export default Fertiltity