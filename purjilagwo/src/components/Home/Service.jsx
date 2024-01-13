import DepartmentCardData from "../DepartmentCardData";
import Marquee from "react-fast-marquee";
import { ServiceCard } from "../ServiceCard";
import { Box, Button, Typography } from "@mui/material";
import HealthCare from "../../assets/image/healthcare.png";
import { Link } from "react-router-dom";

const Service = () => {

  function generateUniqueId(prefix = 'id') {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    return `${prefix}_${timestamp}_${randomNumber}`;
}
  return (
    <>
      <Box display="flex" flexDirection={"column"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center ",
            justifyContent: "center",
          }}
        >
          <img src={HealthCare} alt="" width="4%" height="2%" className="specialities-img"/>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "40px",
              textAlign: "center",
              mb: "2rem",
              mt: "4rem",
              mx: "1rem",
            }}
          >
            Specialities
          </Typography>
        </Box>

        <Marquee pauseOnHover speed={100}>

          {DepartmentCardData.map((val, index) => {
            return (
              <ServiceCard
                key={generateUniqueId}
                imgsrc={val.imgsrc}
                department={val.departmentName}
                link={val.link}
              />
            );
          })}
        </Marquee>

        <Link style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Button
            variant="contained"
            sx={{ background: "#42A5F5", borderRadius: "12px", mt: "20px", mb: "40px" }}
          >
            View All Specialities
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Service;
