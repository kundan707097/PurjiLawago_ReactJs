import { useState, useEffect, useRef } from "react";
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Specialities = () => {

  const swipeerRef = useRef(null);
  const [count, setCount] = useState(6);
  const [departmentData, setDepartmentData] = useState([]);

  const specialities = [
    {
      imgsrc: "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
      departmentName: "Cardiology",
      groupId: 1,
      to: "/cardiology"
    },
    {
      imgsrc: "https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png",
      departmentName: "Eye Care",
      groupId: 2,
      to: "/eyecare"
    },
    {
      imgsrc: "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
      departmentName: "Dentist",
      groupId: 3,
      to: "/dentist"
    },
    {
      imgsrc: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      departmentName: "Ent",
      groupId: 4,
      to: "/ent"
    },
    {
      imgsrc: "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
      departmentName: "Nephrology",
      groupId: 5,
      to: "/nephrology"
    },
    {
      imgsrc: "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
      departmentName: "Paediatric",
      groupId: 6,
      to: "/paediatric"
    },
    {
      imgsrc: "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
      departmentName: "Fertiltity",
      groupId: 7,
      to: "/fertiltity"
    },
  ]


  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 600) {
      setCount(1);
    } else if (width > 600 && width < 900) {
      setCount(2);
    } else if (width > 900) {
      setCount(6);
    }
  };

  useEffect(() => {

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (

    <Box sx={{ background: "#42A5F5", py: 6, px: 6, position: "relative", mb: 6 }}>
      <img src="../images/Home/image49.svg" alt="" style={{ position: "absolute", top: 0, left: 0, height: "100%" }} />
      <img src="../images/Home/image50.svg"alt="" style={{ position: "absolute", top: 0, right: 0, height: "30%" }} />
      <Typography sx={{ fontSize: "50px", textAlign: "center", fontWeight: 600, color: "white", pb: 3 }}>
        Specialities
      </Typography>


      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        sx={{ boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)", mx: "10px", color: "#1AE5BE", backgroundColor: "white", position: "absolute", top: "55%", left: "1rem", zIndex: 99 }}
        size="large"
        onClick={() => swipeerRef.current.swiper.slidePrev()}

      >
        <ChevronLeft size={24} />
      </IconButton>
      {/* Slider */}
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={count} ref={swipeerRef} >

        {specialities.map((item) => {
          return (
            <SwiperSlide>
              <SpecialitiesCard
                key={item.groupId}
                imgsrc={item.imgsrc}
                department={item.departmentName}
                to={item.to} />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        sx={{ boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)", mx: "10px", backgroundColor: "white", color: "#1AE5BE", position: "absolute", top: "55%", right: "1rem", zIndex: 99 }}
        size="large"
        onClick={() => swipeerRef.current.swiper.slideNext()}

      >
        <ChevronRight size={24} />
      </IconButton>

    </Box>

  )
}

// Card for caurosal

const SpecialitiesCard = (props) => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "200px", lg: "auto" },
          border: "2px solid white",
          background: "#DBEEFC",
          py: 3,
          px: 4,
          borderRadius: "10px",
          mx: "auto"
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={props.imgsrc}
          sx={{ width: 90, height: 90, mx: "auto", background: "white" }}
        />
        {/* <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "100px",
            width: 90,
            height: 90,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={props.imgsrc ? props.imgsrc : svg3} alt="" />
        </Box> */}

        <Typography
          sx={{
            color: "#1C4188",
            fontSize: "18px",
            fontWeight: 500,
            textAlign: "center",
            mt: 5,
          }}
        >
          {props.department ? props.department : "Cardiology"}
        </Typography>
        <Typography
          sx={{
            color: "#8E999A",
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "center",
            mt: 1,
          }}
        >
          123+ Doctors
        </Typography>

        <Link
          to={props.to}
          style={{ color: "#00B69B" }}
        >
          <Box
            sx={{
              p: "8px 24px",
              border: "1px solid #00B69B",
              borderRadius: "10px",
              textAlign: "center",
              mt: 2,
              "&:hover": {
                backgroundColor: "#00B69B",
                color: "white",
              },
              transitionDuration: "100ms",
            }}
          >
            <Typography>Book Now</Typography>
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Specialities;

