import React, {useState} from 'react';
import { Box, Typography } from '@mui/material';
import icon from "../../assets/dashboard/icon.png";
import Upcomming_icon from "../../assets/dashboard/Upcomming icon.png";
import bed_icon from "../../assets/dashboard/Bed icon.png";
import book_icon from "../../assets/dashboard/book icon.png";
import Cancel_icon from "../../assets/dashboard/Cancel Icon.png";
import group_265 from "../../assets/dashboard/Group 265.png";
import red from "../../assets/dashboard/red.png";
import green from "../../assets/dashboard/green.png";
import yellow from "../../assets/dashboard/yellow.png";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none'
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#42A5F5",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius:"4px"
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#8BC8F7",
  borderColor:"#8BC8F7",
  fontSize: "0.675rem",
}));

function createData(name, calories, fat, carbs, protein, pro, pro2) {
  return { name, calories, fat, carbs, protein, pro, pro2 };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread2', 356, 16.0, 49, 3.9),
  createData('Gingerbread3', 356, 16.0, 49, 3.9),
];

const HomeDashboard = () => {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container spacing={1} >
      <Grid item xs={3}>
        <Box  sx={{border: "1px solid", borderRadius: 1, p:1, borderColor: "#f3efef"}}>
          <Typography sx={{fontSize: "0.675rem"}} >
            Total Number of patient
            <img style={{"padding": "10px"}} height="50" width="50" src={icon} alt="Logo" className="" />
          </Typography>
          <Typography variant="h4">4500</Typography>
          <Typography sx={{fontSize: "0.675rem", paddingTop: "36px"}}>Last month successful 140 patients</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{border: "1px solid", borderRadius: 1, p:1, borderColor: "#f3efef"}}>
          <Typography sx={{fontSize: "0.675rem"}}>
            Total Upcoming Apartment
            <img style={{"padding": "10px"}} height="50" width="50" src={Upcomming_icon} alt="Logo" className="" />
          </Typography>
          <Typography variant="h4">1147</Typography>
          <Typography sx={{paddingTop: "36px", fontSize: "0.675rem"}}>Last Month Positive 217 Reviews</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
      <Box sx={{border: "1px solid", borderRadius: 1, p:1, borderColor: "#f3efef"}}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Item sx={{fontSize: "0.675rem"}}>My Last Month Treatment</Item>
            <Item>
              <Box display="flex" justifyContent="space-between">
                <Typography>
                  <img height="25" width="25" src={bed_icon} alt="Logo" className="" />
                </Typography>
                <Typography>
                  <img height="25" width="25" src={book_icon} alt="Logo" className="" />
                </Typography>
                <Typography>  
                  <img height="25" width="25" src={Cancel_icon} alt="Logo" className="" />
                </Typography>
              </Box>
            </Item>
            <Item>
              <Box display="flex" justifyContent="space-between">
                <Typography>
                  <img src={green} alt="Logo" className="" />
                  <span> 115</span>
                </Typography>
                <Typography>
                  <img src={yellow} alt="Logo" className="" />
                  <span> 215</span>
                </Typography>
                <Typography>  
                  <img src={red} alt="Logo" className="" />
                  <span> 85</span>
                </Typography>
              </Box>
            </Item>
            <Item>
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{fontSize: "0.675rem"}}>Total Booking</Typography>
                <Typography sx={{fontSize: "0.675rem"}}>Total Pending</Typography>
                <Typography sx={{fontSize: "0.675rem"}}>Total Cancel</Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{padding:0, marginLeft: "38px", marginTop: "-8px"}}><img src={group_265} alt="Logo" className="" /></Item>
          </Grid>
        </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  Date
                </StyledTableCell>
                <StyledTableCell align="right">
                <Box
                    sx={{
                      width: 200,
                      maxWidth: '100%',
                    }}
                  >
                  <StyledTextField fullWidth label="Search" id="fullWidth" />
                </Box>
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell><Button variant="contained">PDF</Button></StyledTableCell>
                <StyledTableCell><Button variant="contained">Excel</Button></StyledTableCell>
                <StyledTableCell><Button style={{backgroundColor: "#fff"}} variant="outlined">Make new Appointment</Button></StyledTableCell>
              </TableRow>
            </TableHead>
              
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <StyledInputLabel id="">All</StyledInputLabel>
                      <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="All"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <StyledInputLabel id="">All</StyledInputLabel>
                      <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="All"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <StyledInputLabel id="">All</StyledInputLabel>
                      <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="All"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <StyledInputLabel id="">All</StyledInputLabel>
                      <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="All"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <StyledInputLabel id="">All</StyledInputLabel>
                      <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="All"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <StyledInputLabel id="">All</StyledInputLabel>
                      <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="All"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <StyledInputLabel id="">All</StyledInputLabel>
                      <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="All"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  <StyledTableCell align="right">{row.pro}</StyledTableCell>
                  <StyledTableCell align="right">{row.pro2}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default HomeDashboard;
