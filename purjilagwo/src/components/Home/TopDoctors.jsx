import { ChevronLeft, ChevronRight } from "@carbon/icons-react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import TopDoctorsCard from "../TopDoctorsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TopDoctors = () => {
  const swipeerRef = useRef(null);
  const [count, setCount] = useState(3);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 600) {
      setCount(1);
    }else if( width>600 && width<900){
      setCount(2);
    }else if (width>900){
      setCount(3);
    }
  };

  return (
    <>
      <Container>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center ",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "40px",
                textAlign: "center",
                my: "4rem",
              }}
            >
              Top Rated Doctors
            </Typography>
            <Box>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                sx={{ boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)", mx: "10px" }}
                size="large"
                onClick={() => swipeerRef.current.swiper.slidePrev()}
                
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                sx={{ boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)", mx: "10px" }}
                size="large"
                onClick={() => swipeerRef.current.swiper.slideNext()}
                
              >
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={count} ref={swipeerRef} >
              
            <SwiperSlide  ><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>
            <SwiperSlide><TopDoctorsCard /></SwiperSlide>

             
        </Swiper>
      </Container>
    </>
  );
};

export default TopDoctors;
