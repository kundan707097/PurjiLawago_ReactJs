import { Box, Button, Typography } from "@mui/material";
import { ChevronRight } from "@carbon/icons-react";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { email, facebook_link, instagam_link, phone_number, whats_app } from "../constants/socialMedia";

const section_2 = [
  {
    name: "About Us",
    to: "/about_us",
  },
  {
    name: "Contact Us",
    to: "/contact_us",
  },
  {
    name: "Privacy and Policy",
    to: "/privacypolicy",
  },
  {
    name: "Emergency Services",
    to: "/emergency_booking",
  },
  {
    name: "Return or Refund",
    to: "return_refund",
  },
];

const section_3 = [
  {
    name: "Cardiology",
    to: "/cardiology",
  },
  {
    name: "Eye Care",
    to: "/eyecare",
  },
  {
    name: "Ent",
    to: "/ent",
  },
  {
    name: "Dentist",
    to: "/dentist",
  },
  {
    name: "Fertiltity",
    to: "/fertiltity",
  },

];

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };


  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1C4188",
          pt: 8,
          pb: 4,
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          borderBottom: "1px solid white",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box sx={{ width: "5%", mt: 7, display: { xs: "none", lg: "block" } }}>
          <img src="../images/Home/Group346.svg" alt="" />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", lg: "row" },
            pl: { xs: 4, lg: 0 }
          }}
        >


          <Box sx={{ my: { xs: 2, lg: 0 } }}>
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: 700, mb: { xs: 1, lg: 3 } }}
            >
              OUR SERVICES
            </Typography>
            {section_2.map((item) => {
              return (
                <>
                  <Link to={item.to} key={item.name}>
                    <Box
                      sx={{ display: "flex", my: 1.5, alignItems: "center" }}
                    >
                      <ChevronRight color="white" size={18} />
                      <Typography sx={{ color: "white" }}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Link>
                </>
              );
            })}
          </Box>

          <Box sx={{ my: { xs: 2, lg: 0 } }}>
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: 700, mb: { xs: 1, lg: 3 } }}
            >
              OUR CATEGORIES
            </Typography>
            {section_3.map((item) => {
              return (
                <>
                  <Link to={item.to} key={item.name}>
                    <Box
                      sx={{ display: "flex", my: 1.5, alignItems: "center" }}
                    >
                      <ChevronRight color="white" size={18} />
                      <Typography sx={{ color: "white" }}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Link>
                </>
              );
            })}
          </Box>

          <Box sx={{ width: { xs: "100%", lg: "40%" }, my: { xs: 2, lg: 0 } }}>
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: 700, mb: { xs: 1, lg: 3 } }}
            >
              NEWSLETTER
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "2px solid white",
                p: { xs: "0px", sm: "30px", md: "0" },
                borderRadius: "12px",
                width: "100%",
                mb: "30px",
                mt: { xs: "20px", sm: "0px", md: 0 },
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  my: { xs: "10px" },
                  width: { md: "70%" },
                  mx: { md: "5px" },
                }}
              >
                <input
                  id="doctorsName"
                  type="text"
                  style={{
                    border: "none",
                    color: "white",
                    marginLeft: "5px",
                    width: "80%",
                    backgroundColor: "transparent",
                    "&:placeholder": {
                      color: "white",
                    },
                  }}
                  placeholder="Your Email"
                />
              </Box>

              <Box
                sx={{
                  backgroundColor: "#42A5F5",
                  borderRadius: "0px 12px 12px 0",
                  display: "flex",
                  px: 2,
                  alignItems: "center",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ ml: 1 }}>Subcription</Typography>
              </Box>
            </Box>

            <Box>
              <Link to="">
                <Box sx={{ display: "flex", my: 1.5, alignItems: "center" }}>
                  <img src="../images/Footer/distance.svg" alt="" height={"20px"} />
                  <Typography sx={{ color: "white", fontSize: "16px", ml: 3 }}>
                    Bashakhi Siwan, Bihar (841226)
                  </Typography>
                </Box>
              </Link>
              <a href={`mailto:${email}`} >
                <Box sx={{ display: "flex", my: 2, alignItems: "center" }}>
                  <img src="../images/Footer/drafts.svg" alt="" height={"20px"} />
                  <Typography sx={{ color: "white", fontSize: "16px", ml: 2 }}>
                    Purjilagwo@gmail.com
                  </Typography>
                </Box>
              </a>
              <a href={`tel:+${phone_number}`} >
                <Box sx={{ display: "flex", my: 1.5, alignItems: "center" }}>
                  <img src="../images/Footer/add_call.svg" alt="" height={"20px"} />
                  <Typography sx={{ color: "white", fontSize: "16px", ml: 2 }}>
                    895646456454
                  </Typography>
                </Box>
              </a>
              <Link to="/terms" key="">
              <Box sx={{ display: "flex", my: 1.5, alignItems: "center" }}>
               <ChevronRight color="white" size={18} />
                <Typography sx={{ color: "white", fontSize: "16px", ml: 2 }}>
                  Terms and condition
                </Typography>
              </Box>
            </Link>
            </Box>
          </Box>
        </Box>

        <Button
          color="primary"
          sx={{
            backgroundColor: "#64EBB6C2",
            position: "absolute",
            right: "2rem",
            borderRadius: "100px",
            py: 2,
            bottom: "30px",
          }}
          onClick={scrollToTop}
        >
          <img src="../images/Footer/Arrow.svg" alt="" height={"18px"} />
        </Button>
      </Box>

      <Box
        sx={{
          backgroundColor: "#1C4188",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          py: 5,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box height={"3rem"}>
          <img src="../images/Logo/Logo2.png" alt="" height={"100%"} />
        </Box>
        <Box sx={{ color: "#CBCCCE", fontSize: "18px", fontWeight: 300, my: { xs: 2, lg: 0 } }}>
          Copyright © 2024  All Rights Reserved
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link to={whats_app} style={{ marginRight: "10px", color: "white" }}>
            <Box sx={{ backgroundColor: "#68B807", p: 1 }}>
              <WhatsAppIcon color="white" />
            </Box>
          </Link>
          <Link to={facebook_link} style={{ marginRight: "10px" }}>
            <Box sx={{ backgroundColor: "#42A5F5", p: 1 }}>
              <img src="../images/Footer/facebook.svg" alt="" height={"20px"} />
            </Box>
          </Link>

          <Link to={instagam_link} style={{ marginRight: "10px" }}>
            <Box sx={{ backgroundColor: "#E24AA6", p: 1 }}>
              <img src="../images/Footer/instagram.svg" alt="" height={"20px"} />
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
