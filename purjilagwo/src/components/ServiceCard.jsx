import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ServiceCard = (props) => {
  return (
    <Box
      sx={{
        width: "20rem",
        border: "1px solid #E5EAF2",
        borderRadius: "12px",
        m: "2rem",
        p: "2rem",
        boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "ce",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={props.imgsrc}
          sx={{ width: 80, height: 80, border: "1px solid blue", mx: "auto" }}
        />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "15px",
            textAlign: "center",
            mt: "15px",
          }}
        >
          {props.department}
        </Typography>

        <Link
          to={props.link}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Button
            variant="contained"
            sx={{ background: "#42A5F5", borderRadius: "12px", mt: "10px" }}
          >
            Consult Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
