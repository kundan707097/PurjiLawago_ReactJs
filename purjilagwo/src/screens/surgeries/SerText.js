import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SerText = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 5 ,  display: { xs: 'none', sm: 'block' }}}>
      <Grid container spacing={2}>
        <Grid item xs={2 } sx={{marginTop:"200px",}}>
          <Item sx={{padding:"40px",backgroundColor:"#42A5F554"}}></Item>
        </Grid>
        <Grid item xs={10}>
        <Typography  gutterBottom sx={{fontSize:"30px",textAlign:"justify" ,paddingRight:"83px"}}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SerText;
