import { useState, useEffect, useRef } from "react";
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import DepartmentCardData from "../../components/DepartmentCardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import svg1 from "../../assets/vectors/image 49.svg"
import svg2 from "../../assets/vectors/image 50.svg"
import svg3 from "../../assets/vectors/image 43.svg";

const Specialities = () => {

  const swipeerRef = useRef(null);
  const [count, setCount] = useState(6);
  const [departmentData, setDepartmentData] = useState([]);


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

  useEffect(() => {
    // Extract only imgsrc values from the existing DepartmentCardData
    const imgsrcValues = DepartmentCardData.map((item) => item.imgsrc);

    // Fetch additional data from the API for the remaining fields
    const fetchAdditionalData = async () => {
      try {
        const response = await fetch("https://localhost:44324/DoctorsGroup/GetDoctorsGroup");
        const apiData = await response.json();
        debugger;
        // Map the API data to the format expected in the component state
        const updatedDepartmentData = imgsrcValues.map((imgsrc, index) => ({
          imgsrc,
          departmentName: apiData[index]?.specialty || "", // You can add an appropriate default value or leave it empty
          disc: apiData[index]?.description || "", // You can add an appropriate default value or leave it empty
          //link: apiData[index]?.link || "javascript:void(0)",
          groupId: apiData[index]?.id || null,
        }));

        setDepartmentData(updatedDepartmentData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchAdditionalData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  function generateUniqueId(prefix = 'id') {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    return `${prefix}_${timestamp}_${randomNumber}`;
  }

  return (
    <>
      {departmentData.length !== 0 && (
        <>
          <Box sx={{ background: "#42A5F5", py: 6, px: 6, position: "relative", mb: 6 }}>
            <img src={svg1} alt="" style={{ position: "absolute", top: 0, left: 0, height: "100%" }} />
            <img src={svg2} alt="" style={{ position: "absolute", top: 0, right: 0, height: "30%" }} />
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
              {/* here you need to change the DepartmentCardData to departmentData */}
              {departmentData.map((item) => {
                return (
                  <SwiperSlide>
                    <SpecialitiesCard
                      key={generateUniqueId()}
                      imgsrc={item.imgsrc}
                      department={item.departmentName}
                      groupId={item.groupId} />
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
        </>
      )}

    </>
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
          src={props.imgsrc ? props.imgsrc : svg3}
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
          to={`/doctorlistbyId/${props.groupId}`}
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
            Book Now
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Specialities;

