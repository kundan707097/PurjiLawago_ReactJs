import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import ServiceCard from "../../components/ServiceCard";
//import { ServiceCard } from "../../components/ServiceCard";
import { Box, Button, Typography } from "@mui/material";
import HealthCare from "../../assets/image/healthcare.png";
import { Link } from "react-router-dom";
import DepartmentCardData from "../../components/DepartmentCardData";


const Services = () => {
  const [departmentData, setDepartmentData] = useState([]);

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
      <Box display="flex" flexDirection={"column"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center ",
            justifyContent: "center",
          }}
        >
          <img src={HealthCare} alt="" width="4%" height="2%" className="specialities-img" />

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
          {departmentData.map((val) => (
            <ServiceCard
              key={generateUniqueId()}
              imgsrc={val.imgsrc}
              department={val.departmentName}
              groupId={val.groupId}
            />
          ))}
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

export default Services;
