import React, { useEffect } from 'react'
import Landing from './Landing'
import LiveCounter from '../../components/LiveCounter'
import Footer from '../../components/Footer'

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  }, [])
  
  return (
    <>
    <Landing />
    <LiveCounter/>
    <Footer />
    </>
  )
}

export default Contact