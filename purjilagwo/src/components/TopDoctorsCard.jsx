import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Hero from "../assets/image/bg-1.jpg";
import { Link } from "react-router-dom";
import {  StarFilled, LocationFilled } from "@carbon/icons-react";

export default function TopDoctorsCard() {
  return (
    <Link>
      <Card sx={{ maxWidth: 345, boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)", mb: "4rem", borderRadius: "12px", border: "1px solid #E5EAF2", mx:"auto" }}>
        <CardActionArea>
          <CardMedia component="img" height="180" image={Hero} alt="Doctor" />
          <CardContent>
            <Box display="flex" alignItems="start" justifyContent="space-between">
              <Box>
                <Typography gutterBottom sx={{ fontSize: "25px", mt: 0, mb: "5px" , fontWeight: 700}}>
                  Dr. John Doe
                </Typography>
                <Typography gutterBottom sx={{fontSize: "13px", }} color="text.secondary">
                  Specialities
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center" mt="4px">
                <Box display="flex" alignItems="center" justifyContent="center" sx={{backgroundColor: "#FFBC11", px: "5px" , py: "4px", borderRadius: "8px"}}><StarFilled  color="white"/><Typography sx={{ml: "2px",fontSize: "13px", fontWeight: 400, color: "white"}}>4.0</Typography></Box>
                <Typography sx={{fontSize: "13px", mx: '4px'}} color="text.secondary">(35)</Typography>
              </Box>
            </Box>

            <Box display={"flex"} alignItems={"start"} sx={{mt: "10px"}}>
              <LocationFilled size={20}  style={{color: "grey"}}/>
            <Typography variant="body2" color="text.secondary" ml="5px">
              Siwaan, Bihar 
            </Typography>

            </Box>


          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
