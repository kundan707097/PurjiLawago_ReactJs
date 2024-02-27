import React, { useState } from 'react';

import { ChevronDown } from '@carbon/icons-react'
import { Box, Typography } from '@mui/material'

import PropTypes from 'prop-types';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

export const DoctorTableHeader = () => {
  return (
    <>
      <Box sx={{ p: "4px", mb: 2, display: "flex", alignContent: "center", width: "100%", bgcolor: "#1C4188", color: "white", }}>

        <Box sx={{ width: "25%", }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, textAlign: "left" }}>Booking No.</Typography>
        </Box>
        <Box sx={{ width: "19.4%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Time</Typography>
        </Box>
        <Box sx={{ width: "20%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Pateint Name</Typography>
        </Box>
        {/* <Box sx={{ width: "11%", textAlign: "center" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Age</Typography>
        </Box> */}
        <Box sx={{ width: "20%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Phone No.</Typography>
        </Box>
        {/* <Box sx={{ textAlign: "center", width: "13%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Disease</Typography>
        </Box> */}
        <Box sx={{ width: "15%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Status/Update</Typography>
        </Box>
      </Box>
    </>
  )
}

export const DoctorTableRow = () => {

  const [status, setStatus] = useState("Pending");
  const [cssProperty, setCssProperty] = useState("#E8C804");

  const createHandleMenuClick = (menuItem, color) => {
    return () => {
      setStatus(menuItem);
      setCssProperty(color);
      console.log(`Clicked on ${menuItem}`);
    };
  };


  return (
    <>
      <Box sx={{ borderRadius: "6px", border: `1px solid #64EBB6`, p: "4px", my: 2, display: "flex", justifyContent: "space-between", alignContent: "center", width: "100%", bgcolor: "white", color: "#8E999A", ":hover": { bgcolor: "#8BC8F7", transition: "0.3s", color: "white", position: "relative" } }} component={"button"}>
        <Box sx={{ width: "25%" }} >
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, textAlign: "left" }}>1234567891123456</Typography>
        </Box>
        <Box sx={{ width: "20%", textAlign: "left" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, }}>10am - 11am</Typography>
        </Box>
        <Box sx={{ color: "#64EBB6", width: "20%", textAlign: "left" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Vicky Jaiswal</Typography>
        </Box>
        {/* <Box sx={{ width: "8%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>45 Yrs</Typography>
        </Box> */}
        <Box sx={{ width: "20%", textAlign: "left" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>6205316232</Typography>
        </Box>
        {/* <Box sx={{ width: "13%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Diabetes ,er</Typography>
        </Box> */}
        {/* <Box sx={{
          color: "#EB5757", width: "13%", my: "auto", mr: 2, p: "8px", borderRadius: "12px", border: "1px solid #EB5757", bgcolor: "white", ":hover": {
            color: "white", bgcolor: "#EB5757", transition: "0.3s"
          }
        }} component={"button"}>
          <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>Emergency<ChevronDown style={{ width: '25px', marginLeft: "4px" }} /></Typography>
        </Box> */}
        {/* <Box sx={{
          color: "#E8C804", width: "13%", my: "auto", mr: 2, p: "8px", borderRadius: "12px", border: "1px solid #E8C804", bgcolor: "white", ":hover": {
            color: "white", bgcolor: "#E8C804", transition: "0.3s"
          }
        }} component={"button"}>
          <Typography sx={{ fontSize: "16px", fontWeight: 600, textAlign: "center", }}>Pending<ChevronDown style={{ width: '25px', marginLeft: "4px" }} /></Typography>
        </Box> */}

        <Dropdown>
          <MenuButton sx={{ color: cssProperty, border: `1px solid ${cssProperty}`, ":hover": { bgcolor: cssProperty } }}>
            {status}<ChevronDown style={{ marginLeft: "4px" }} />
          </MenuButton>
          <Menu slots={{ listbox: Listbox }}>
            <MenuItem onClick={createHandleMenuClick('Pending', "#E8C804")} sx={{ color: status === "Pending" ? "white" : "#E8C804", bgcolor: status === "Pending" && "#E8C804" }}>Pending</MenuItem>
            <MenuItem onClick={createHandleMenuClick('Completed', "#00B69B")} sx={{ color: status === "Completed" ? "white" : "#00B69B", bgcolor: status === "Completed" && "#00B69B" }}>
              Completed
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick('Cancel', "#EB5757")} sx={{ color: status === "Cancel" ? "white" : "#EB5757", bgcolor: status === "Cancel" && "#EB5757" }}>Cancel</MenuItem>
          </Menu>
        </Dropdown>


      </Box>
    </>
  )
}

export const DoctorResponsiveCard = () => {

  const [status, setStatus] = useState("Pending");
  const [cssProperty, setCssProperty] = useState("#E8C804");

  const createHandleMenuClick = (menuItem, color) => {
    return () => {
      setStatus(menuItem);
      setCssProperty(color);
      console.log(`Clicked on ${menuItem}`);
    };
  };


  return (
    <>
      <Box sx={{border: `1px solid ${cssProperty}`, my:2, borderRadius: "6px", p:4, }}>

        <Box sx={{display: "flex", justifyContent: "space-between",mb:2 }}>
          <Box sx={{width: "50%"}}>
            <Typography sx={{color: "#1C4188", fontSize: "16px"}}>Booking No.</Typography>
            <Typography sx={{fontSize: "14px"}}>1234567890123456</Typography>
          </Box>
          <Box  sx={{width: "50%"}}>
            <Typography sx={{color: "#1C4188", fontSize: "16px"}}>Time</Typography>
            <Typography sx={{fontSize: "14px"}}>10am - 11am</Typography>
          </Box>
        </Box>

        <Box sx={{display: "flex", justifyContent: "space-between",mb:2 }}>
          <Box  sx={{width: "50%"}}>
            <Typography sx={{color: "#1C4188", fontSize: "16px"}}>Pateint Name</Typography>
            <Typography sx={{fontSize: "14px"}}>Vicky Jaiswal</Typography>
          </Box>
          <Box  sx={{width: "50%"}}>
            <Typography sx={{color: "#1C4188", fontSize: "16px"}}>Phone No.</Typography>
            <Typography sx={{fontSize: "14px"}}>6205316232</Typography>
          </Box>

        </Box>


        <Dropdown>
          <MenuButton sx={{ color: cssProperty, border: `1px solid ${cssProperty}`, ":hover": { bgcolor: cssProperty }, width: {xs: "100%", sm: "50%", md: "inital"} }}>
            {status}<ChevronDown style={{ marginLeft: "4px" }} />
          </MenuButton>
          <Menu slots={{ listbox: Listbox }}>
            <MenuItem onClick={createHandleMenuClick('Pending', "#E8C804")} sx={{ color: status === "Pending" ? "white" : "#E8C804", bgcolor: status === "Pending" && "#E8C804" }}>Pending</MenuItem>
            <MenuItem onClick={createHandleMenuClick('Completed', "#00B69B")} sx={{ color: status === "Completed" ? "white" : "#00B69B", bgcolor: status === "Completed" && "#00B69B" }}>
              Completed
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick('Cancel', "#EB5757")} sx={{ color: status === "Cancel" ? "white" : "#EB5757", bgcolor: status === "Cancel" && "#EB5757" }}>Cancel</MenuItem>
          </Menu>
        </Dropdown>

      </Box>
    </>
  )
}

const Listbox = styled('ul')(
  ({ theme }) => `
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: white;
  border: 1px solid #DAE2ED;
  color: #1C2025;
  box-shadow: 0px 4px 30px #DAE2ED;
  z-index: 1;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  font-family: "Nunito Sans", "Plaster", sans-serif;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid #99CCF3;
    background-color: #E5EAF2;
    color: #1C2025;
  }

  &.${menuItemClasses.disabled} {
    color: #B0B8C4;
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: #F0F7FF;
    color: #003A75;
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  padding: 8px 0px;
  border-radius: 8px;
  transition: all 200ms ease;
  cursor: pointer;
  background: white;
  color: #00B69B;
  margin: auto 0;
  width: 15%;
  margin-right: 12px;
  font-family: "Nunito Sans", "Plaster", sans-serif;

  &:hover {
    color: white;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px #99CCF3;
    outline: none;
  }
  `,
);

