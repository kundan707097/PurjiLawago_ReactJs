import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import "./Home.css";
import svg1 from "../../assets/vectors/Line 23.svg";
import svg2 from "../../assets/vectors/Ellipse 54.svg";
import svg3 from "../../assets/vectors/Ellipse 55.svg";
import svg5 from "../../assets/vectors/Wavy_Lst-11_Single-07-ai 1.svg";
import svg6 from "../../assets/vectors/calendar_month.svg";
import svg7 from "../../assets/vectors/respiratory_rate.svg";
import svg8 from "../../assets/vectors/add_card.svg";
import svg9 from "../../assets/vectors/blood_pressure.svg";
import svg10 from "../../assets/vectors/Emergency.svg";

const BookingSystem = () => {
  return (
    <>
      <Box sx={{position:"relative"}}>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#9099AB",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          How Book Doctor
        </Typography>
        <Box
          sx={{
            width: "5rem",
            height: "3px",
            backgroundColor: "#02A0E7",
            my: 1,
            mx: "auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#1C4188",
              fontSize: "30px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            OUR <span style={{ color: "#42A5F5" }}>BOOKING</span> SYSTEMS
          </Typography>
          <img src={svg1} alt="" height={"3px"} />
        </Box>
        <Box sx={{ display: "flex", mt: 8, justifyContent: "space-between" ,flexDirection: {xs: "column", lg: 'row'}, alignItems: {xs: "center", lg: "normal"} }}>

          <Box sx={{ width: "13%", display: {xs: "none", lg: "initial"} }}>
            <Box sx={{ ml: 3 }}>
              <img src={svg3} alt="" style={{ height: "30px" }} />
            </Box>
            <Box sx={{ position: "relative", top: "20rem", right: "-5rem" }}>
              <img src={svg2} alt="" style={{ height: "60px" }} />
            </Box>
          </Box>

          <Box sx={{ width: {xs: "100%", lg:"40%"}, display: "flex", mt: 6, }}>
            <Box sx={{ width: {xs: "100%", lg:  "50%"},  ml: {lg:2 }, mx:{xs:2, lg:0}, }}>
              <Box>
                <img
                  src={svg6}
                  alt=""
                  style={{
                    height: "70px",
                    padding: 15,
                    backgroundColor: "#F0F6FF",
                    borderRadius: "4px",
                    width: "70px",
                  }}
                />
                <Typography
                  sx={{
                    color: "#8B8B8B",
                    fontSize: "18px",
                    fontWeight: 700,
                    mt: 2,
                  }}
                >
                  {" "}
                  Book Appointment{" "}
                  <span style={{ color: "#02A0E7" }}>(01)</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#848A90",
                    fontSize: "15px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  {" "}
                  It is a long established fact that by the readable content of
                  a The point of using Lorem Ipsu
                </Typography>
              </Box>

              <Box sx={{ mt: 8 }}>
                <img
                  src={svg8}
                  alt=""
                  style={{
                    height: "70px",
                    padding: 15,
                    backgroundColor: "#F0F6FF",
                    borderRadius: "4px",
                    width: "70px",
                  }}
                />
                <Typography
                  sx={{
                    color: "#8B8B8B",
                    fontSize: "18px",
                    fontWeight: 700,
                    mt: 2,
                  }}
                >
                  {" "}
                  Payment Clear <span style={{ color: "#02A0E7" }}>(03)</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#848A90",
                    fontSize: "15px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  {" "}
                  It is a long established fact that by the readable content of
                  a The point of using Lorem Ipsu
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: {xs: "100%", lg:  "50%"}, ml: {xs:1, lg:6}, mt: 6 }}>
              <Box>
                <img
                  src={svg7}
                  alt=""
                  style={{
                    height: "70px",
                    padding: 15,
                    backgroundColor: "#F0F6FF",
                    borderRadius: "4px",
                    width: "70px",
                  }}
                />
                <Typography
                  sx={{
                    color: "#8B8B8B",
                    fontSize: "18px",
                    fontWeight: 700,
                    mt: 2,
                  }}
                >
                  {" "}
                  Select Doctor <span style={{ color: "#02A0E7" }}>(02)</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#848A90",
                    fontSize: "15px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  {" "}
                  It is a long established fact that by the readable content of
                  a The point of using Lorem Ipsu
                </Typography>
              </Box>

              <Box sx={{ mt: 8 }}>
                <img
                  src={svg9}
                  alt=""
                  style={{
                    height: "70px",
                    padding: 15,
                    backgroundColor: "#F0F6FF",
                    borderRadius: "4px",
                    width: "70px",
                  }}
                />
                <Typography
                  sx={{
                    color: "#8B8B8B",
                    fontSize: "18px",
                    fontWeight: 700,
                    mt: 2,
                  }}
                >
                  {" "}
                  Booking Time <span style={{ color: "#02A0E7" }}>(04)</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#848A90",
                    fontSize: "15px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  {" "}
                  It is a long established fact that by the readable content of
                  a The point of using Lorem Ipsu
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{height: {xs: "30rem", lg:"40rem"}}}>
            <img src={svg5} alt=""  style={{height: "100%"}} />
          </Box>
        </Box>

        {/* put emergency number here */}
        <Link to="">
          <Box sx={{position: "absolute", right: 0, top:{xs: "-11rem", lg:"-4rem"} }}>
            <img src={svg10} alt="" height={200} />
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default BookingSystem;
