import { Box, Button, Typography } from "@mui/material";
import { ChevronRight } from "@carbon/icons-react";
import { Link } from "react-router-dom";

import svg1 from "../../src/assets/vectors/Group 346.svg";
import svg2 from "../../src/assets/vectors/FooterVector/distance.svg";
import svg3 from "../../src/assets/vectors/FooterVector/drafts.svg";
import svg4 from "../../src/assets/vectors/FooterVector/add_call.svg";
import svg5 from "../../src/assets/vectors/FooterVector/Arrow 1.svg";
import svg6 from "../../src/assets/vectors/FooterVector/facebook.svg";
import svg7 from "../../src/assets/vectors/FooterVector/pininterest.svg";
import svg8 from "../../src/assets/vectors/FooterVector/twitter.svg";
import svg9 from "../../src/assets/vectors/FooterVector/instagram.svg";

const section_1 = [
  {
    name: "General Information",
    to: "",
  },
  {
    name: "Blood Bank",
    to: "",
  },
  {
    name: "Medical Research",
    to: "",
  },
  {
    name: "Emergency Services",
    to: "",
  },
  {
    name: "Ambulance",
    to: "",
  },
  {
    name: "Easy Payment",
    to: "",
  },
];

const section_2 = [
  {
    name: "About Us",
    to: "",
  },
  {
    name: "Contact Us",
    to: "",
  },
  {
    name: "Privacy and Policy",
    to: "",
  },
  {
    name: "Emergency Services",
    to: "",
  },
  {
    name: "Payment Method",
    to: "",
  },
  {
    name: "Return or Refund",
    to: "",
  },
];

const section_3 = [
  {
    name: "Pharmaceuticals",
    to: "",
  },
  {
    name: "Medical Devices",
    to: "",
  },
  {
    name: "Personal Care Products",
    to: "",
  },
  {
    name: "Orthopedic Supplies",
    to: "",
  },
  {
    name: "Orthopedic Supplies",
    to: "",
  },
  {
    name: "Mobility Aids",
    to: "",
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
        <Box sx={{ width: "5%", mt: 7,display: {xs: "none", lg: "block"} }}>
          <img src={svg1} alt="" />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", lg: "row" },
            pl: {xs: 4, lg:0}
          }}
        >
          <Box>
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: 700, mb: 3 }}
            >
              ACTIVE VISITORS
            </Typography>
            {section_1.map((item) => {
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

          <Box>
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: 700, mb: 3 }}
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

          <Box>
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: 700, mb: 3 }}
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
        </Box>

        <Box sx={{ width: {xs: "100%", lg:"40%"}, mr: 1, pl: {xs: 2, lg:0}, my: {xs: 4, lg:0} }}>
          <Typography
            sx={{ color: "white", fontSize: "28px", fontWeight: 700, mb: 3 }}
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
              mt: { xs: "20px", sm: "0px", md: 6 },
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
                <img src={svg2} alt="" height={"20px"} />
                <Typography sx={{ color: "white", fontSize: "16px", ml: 3 }}>
                  Bashakhi Siwan, Bihar (841226)
                </Typography>
              </Box>
            </Link>
            <Link to="">
              <Box sx={{ display: "flex", my: 2, alignItems: "center" }}>
                <img src={svg3} alt="" height={"20px"} />
                <Typography sx={{ color: "white", fontSize: "16px", ml: 2 }}>
                  Purjilagwo@gmail.com
                </Typography>
              </Box>
            </Link>
            <Link to="" key="">
              <Box sx={{ display: "flex", my: 1.5, alignItems: "center" }}>
                <img src={svg4} alt="" height={"20px"} />
                <Typography sx={{ color: "white", fontSize: "16px", ml: 2 }}>
                  895646456454
                </Typography>
              </Box>
            </Link>
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
          <img src={svg5} alt="" height={"18px"} />
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
        <Box>
          <Typography>LOGO</Typography>
        </Box>
        <Box sx={{ color: "#CBCCCE", fontSize: "18px", fontWeight: 300, my: {xs: 2, lg:0} }}>
          Copyright © 2024  All Rights Reserved
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link to="" style={{ marginRight: "10px" }}>
            <Box sx={{ backgroundColor: "#42A5F5", p: 1 }}>
              <img src={svg6} alt="" height={"20px"} />
            </Box>
          </Link>

          <Link to="" style={{ marginRight: "10px" }}>
            <Box sx={{ backgroundColor: "#DB4220", p: 1 }}>
              <img src={svg7} alt="" height={"20px"} />
            </Box>
          </Link>
          <Link to="" style={{ marginRight: "10px" }}>
            <Box sx={{ backgroundColor: "#42A5F599", p: 1 }}>
              <img src={svg8} alt="" height={"20px"} />
            </Box>
          </Link>

          <Link to="" style={{ marginRight: "10px" }}>
            <Box sx={{ backgroundColor: "#68B807", p: 1 }}>
              <img src={svg9} alt="" height={"20px"} />
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
