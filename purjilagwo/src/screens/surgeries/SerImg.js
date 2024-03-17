import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import imgt from "../../assets/image/box2.png";
import imgser from '../../assets/image/ourmob.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SerImg = () => {
  const v = [1, 2];
  const [img, setImg] = useState(v);

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
        <Grid container spacing={5} sx={{ display: "flex" , py:5, px:2 }}>
          {img.map((item, index) => {
            return (
              <Grid className="fghj" item xs={6} sx={{ display: "flex",}}>
                <img src={imgt} alt="img" />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className='dfgytr' sx={{ display: { xs: 'block', sm: 'none' } }}>
      <img src={imgser} alt="img"/>
      </Box>
    </div>
  );
};

export default SerImg;
