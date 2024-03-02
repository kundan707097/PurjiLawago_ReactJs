import React, { useEffect, useState } from 'react';

import { ChevronDown } from '@carbon/icons-react'
import { Box, Typography } from '@mui/material'
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { useSnackbar } from 'notistack';

import DoctorService from '../services/Doctor.services';
import AdminService from '../services/Admin.service';

export const DoctorTableHeader = () => {
  return (
    <>
      <Box sx={{ p: "4px", mb: 2, display: { xs: "none", md: "flex" }, alignContent: "center", width: "100%", bgcolor: "#1C4188", color: "white", }}>

        <Box sx={{ width: "25%", }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, textAlign: "left" }}>Booking No.</Typography>
        </Box>
        <Box sx={{ width: "19.4%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Time</Typography>
        </Box>
        <Box sx={{ width: "20%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Pateint Name</Typography>
        </Box>
        <Box sx={{ width: "20%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Phone No.</Typography>
        </Box>
        <Box sx={{ width: "15%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Status/Update</Typography>
        </Box>
      </Box>
    </>
  )
}

export const DoctorTableRow = ({ data }) => {

  const [status, setStatus] = useState("Pending");
  const [cssProperty, setCssProperty] = useState("#E8C804");
  const [time, setTime] = useState("");
  const { enqueueSnackbar } = useSnackbar()
  const [id, setID] = useState(parseInt(localStorage.getItem('id')));
  // setting the id from the local storage
  useEffect(() => {
    if (localStorage.getItem('id') !== null) {
      setID(parseInt(localStorage.getItem('id')))
    }
  }, [localStorage.getItem('id')]);


  //This function is used to change the status of the patient

  const handleUpdateStatus = async (menuItem, color, bookingNumber) => {
    try {
      if (id !== 0 || id !== null) {
        const data = {
          id: id,
          patient_Status: menuItem,
          bookingNumber: bookingNumber,
        }
        console.log(data);
        const response = await DoctorService.StatusUpdateByDoctor(data);
        debugger;
        if (response.status === 200) {
          setStatus(menuItem); //this property need to set after the we success true response
          setCssProperty(color);
          console.log(response.data)
        } else {
          enqueueSnackbar("Server not responding", { variant: "error" })
        }
      }
    } catch (error) {
      console.log(error)
      enqueueSnackbar("Server not responding", { variant: "error" })
    }

  };



  useEffect(() => {
    if (data !== null) {
      setStatus(data.patient_Status);
      if (data.patient_Status === "Pending") {
        setCssProperty("#E8C804");
      } else if (data.patient_Status === "Success") {
        setCssProperty("#00B69B");
      } else if (data.patient_Status === "Cancel") {
        setCssProperty("#EB5757");
      }
      const dateObj = new Date(data.bookingDateAndTime);
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(dateObj);
      setTime(formattedDate);
    }
  }, [data])

  return (
    <>
      {data !== null && (
        <>
          <Box sx={{ borderRadius: "6px", border: `1px solid #64EBB6`, my: 1, justifyContent: "space-between", alignContent: "center", width: "100%", bgcolor: "white", color: "#8E999A", ":hover": { bgcolor: "#8BC8F7", transition: "0.3s", color: "white", position: "relative" }, display: { xs: "none", md: "flex" } }} component={"button"}>
            <Box sx={{ width: "25%" }} >
              <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, textAlign: "left" }}>{data.bookingNumber}</Typography>
            </Box>
            <Box sx={{ width: "20%", textAlign: "left" }}>
              <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, }}>{time}</Typography>
            </Box>
            <Box sx={{ color: "black", width: "20%", textAlign: "left" }}>
              <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>{data.patient_Name}</Typography>
            </Box>
            <Box sx={{ width: "20%", textAlign: "left" }}>
              <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>{data.patient_MobileNumber}</Typography>
            </Box>
            <Dropdown>
              <MenuButton sx={{ color: cssProperty, border: `1px solid ${cssProperty}`, ":hover": { bgcolor: cssProperty } }}>
                {status}<ChevronDown style={{ marginLeft: "4px" }} />
              </MenuButton>
              <Menu slots={{ listbox: Listbox }}>
                <MenuItem onClick={() => handleUpdateStatus('Pending', "#E8C804", data.bookingNumber)} sx={{ color: status === "Pending" ? "white" : "#E8C804", bgcolor: status === "Pending" && "#E8C804" }}>Pending</MenuItem>
                <MenuItem onClick={() => handleUpdateStatus('Success', "#00B69B", data.bookingNumber)} sx={{ color: status === "Success" ? "white" : "#00B69B", bgcolor: status === "Success" && "#00B69B" }}>
                  Success
                </MenuItem>
                <MenuItem onClick={() => handleUpdateStatus('Cancel', "#EB5757", data.bookingNumber)} sx={{ color: status === "Cancel" ? "white" : "#EB5757", bgcolor: status === "Cancel" && "#EB5757" }}>Cancel</MenuItem>
              </Menu>
            </Dropdown>
          </Box>

          <Box sx={{ border: `1px solid ${cssProperty}`, my: 2, borderRadius: "6px", p: 4, display: { xs: "block", md: "none" } }}>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Box sx={{ width: "50%" }}>
                <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Booking No.</Typography>
                <Typography sx={{ fontSize: "14px" }}>{data.bookingNumber}</Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Time</Typography>
                <Typography sx={{ fontSize: "14px" }}>{time}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Box sx={{ width: "50%" }}>
                <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Pateint Name</Typography>
                <Typography sx={{ fontSize: "14px" }}>{data.patient_Name}</Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Phone No.</Typography>
                <Typography sx={{ fontSize: "14px" }}>{data.patient_MobileNumber}</Typography>
              </Box>

            </Box>


            <Dropdown>
              <MenuButton sx={{ color: cssProperty, border: `1px solid ${cssProperty}`, ":hover": { bgcolor: cssProperty }, width: { xs: "100%", sm: "50%", md: "inital" } }}>
                {status}<ChevronDown style={{ marginLeft: "4px" }} />
              </MenuButton>
              <Menu slots={{ listbox: Listbox }}>
                <MenuItem onClick={() => handleUpdateStatus('Pending', "#E8C804", data.bookingNumber)} sx={{ color: status === "Pending" ? "white" : "#E8C804", bgcolor: status === "Pending" && "#E8C804" }}>Pending</MenuItem>
                <MenuItem onClick={() => handleUpdateStatus('Success', "#00B69B", data.bookingNumber)} sx={{ color: status === "Success" ? "white" : "#00B69B", bgcolor: status === "Success" && "#00B69B" }}>
                  Success
                </MenuItem>
                <MenuItem onClick={() => handleUpdateStatus('Cancel', "#EB5757", data.bookingNumber)} sx={{ color: status === "Cancel" ? "white" : "#EB5757", bgcolor: status === "Cancel" && "#EB5757" }}>Cancel</MenuItem>
              </Menu>
            </Dropdown>

          </Box>
        </>

      )}
    </>
  )
}

export const AdminTableHeader = () => {
  return (
    <>
      <Box sx={{ p: "4px", mb: 2, display: { xs: "none", md: "flex" }, alignContent: "center", width: "100%", bgcolor: "#1C4188", color: "white", }}>

        <Box sx={{ width: "20%", }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, textAlign: "left" }}>Registration No.</Typography>
        </Box>
        <Box sx={{ width: "16%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Doctor Name</Typography>
        </Box>
        <Box sx={{ width: "16%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Specialist</Typography>
        </Box>
        <Box sx={{ width: "16%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Registration Date</Typography>
        </Box>
        <Box sx={{ width: "16%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Location</Typography>
        </Box>
        <Box sx={{ width: "15%" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>Status/Update</Typography>
        </Box>
      </Box>
    </>
  )
}

export const AdminTableRow = () => {
  const [cssProperty, setCssProperty] = useState("#E8C804");
  const [status, setStatus] = useState("Pending");
  const { enqueueSnackbar } = useSnackbar()
  const [id, setID] = useState(parseInt(localStorage.getItem('id')));

  useEffect(() => {
    if (localStorage.getItem('id') !== null) {
      setID(parseInt(localStorage.getItem('id')))
    }
  }, [localStorage.getItem('id')]);

  const handleUpdateStatus = async (status, color, registrationNumber) => {
    try {
      if (id !== 0 || id !== null) {
        const data = {
          id: id,
          patient_Status: status,
          registrationNumber: registrationNumber,
        }
        console.log(data);
        const response = await AdminService.StatusUpdateByAdmin(data);
        debugger;
        if (response.status === 200) {
          setStatus(status); //this property need to set after the we success true response
          setCssProperty(color);
          console.log(response.data)
        } else {
          enqueueSnackbar("Server not responding", { variant: "error" })
        }
      }
    } catch (error) {
      console.log(error)
      enqueueSnackbar("Server not responding", { variant: "error" })
    }
  }
  return (
    <>
      <Box sx={{ borderRadius: "6px", border: `none`, my: 1, justifyContent: "space-between", alignContent: "center", width: "100%", bgcolor: "white", color: "#8E999A", ":hover": { transition: "0.3s", boxShadow: "1px 18px 20px 0px #0000001A" }, display: { xs: "none", md: "flex" }, }} component={"button"}>
        <Box sx={{ width: "20%" }} >
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, textAlign: "left" }}>{"824829ksl4klj43u89"}</Typography>
        </Box>
        <Box sx={{ color: "black", width: "16%", textAlign: "left" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>{"Vicky Jaiswal"}</Typography>
        </Box>
        <Box sx={{ width: "16%", textAlign: "left" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600 }}>{"Heart Specialist"}</Typography>
        </Box>
        <Box sx={{ width: "16%", textAlign: "left" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, }}>{"12-12-2024"}</Typography>
        </Box>
        <Box sx={{ width: "16%", textAlign: "left" }}>
          <Typography sx={{ p: 2, fontSize: "16px", fontWeight: 600, }}>{"Saidpur Ganesh"}</Typography>
        </Box>
        <Dropdown>
          <MenuButton sx={{ color: "white", border: `1px solid ${cssProperty}`, ":hover": { bgcolor: "white", color: cssProperty, border: `1px solid ${cssProperty}` }, bgcolor: cssProperty }}>
            {status}<ChevronDown style={{ marginLeft: "4px" }} />
          </MenuButton>
          <Menu slots={{ listbox: Listbox }}>
            <MenuItem onClick={() => handleUpdateStatus('Pending', "#E8C804",)} sx={{ color: status === "Pending" ? "white" : "#E8C804", bgcolor: status === "Pending" && "#E8C804" }}>Pending</MenuItem>
            <MenuItem onClick={() => handleUpdateStatus('Approve', "#00B69B",)} sx={{ color: status === "Approve" ? "white" : "#00B69B", bgcolor: status === "Approve" && "#00B69B" }}>
              Approve
            </MenuItem>
            <MenuItem onClick={() => handleUpdateStatus('Refuse', "#EB5757",)} sx={{ color: status === "Refuse" ? "white" : "#EB5757", bgcolor: status === "Refuse" && "#EB5757" }}>Refuse</MenuItem>
          </Menu>
        </Dropdown>
      </Box>

      <Box sx={{ border: `1px solid ${cssProperty}`, my: 2, borderRadius: "6px", p: 4, display: { xs: "block", md: "none" } }}>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Registration No.</Typography>
            <Typography sx={{ fontSize: "14px" }}>{"289ru829r784"}</Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Registration Date</Typography>
            <Typography sx={{ fontSize: "14px" }}>{"12-12-2024"}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Doctor Name</Typography>
            <Typography sx={{ fontSize: "14px" }}>{"Vicky Jaiswal"}</Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Specialist</Typography>
            <Typography sx={{ fontSize: "14px" }}>{"Heart Specialist"}</Typography>
          </Box>

        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ color: "#1C4188", fontSize: "16px" }}>Location</Typography>
            <Typography sx={{ fontSize: "14px" }}>{"Saidpur Ganesh"}</Typography>
          </Box>
        </Box>

        <Dropdown>
          <MenuButton sx={{ color: "white", border: `1px solid ${cssProperty}`, ":hover": { bgcolor: "white", color: cssProperty, border: `1px solid ${cssProperty}` }, width: { xs: "100%", sm: "50%", md: "inital" }, bgcolor: cssProperty }}>
            {status}<ChevronDown style={{ marginLeft: "4px" }} />
          </MenuButton>
          <Menu slots={{ listbox: Listbox }}>
            <MenuItem onClick={() => handleUpdateStatus('Pending', "#E8C804",)} sx={{ color: status === "Pending" ? "white" : "#E8C804", bgcolor: status === "Pending" && "#E8C804" }}>Pending</MenuItem>
            <MenuItem onClick={() => handleUpdateStatus('Approve', "#00B69B",)} sx={{ color: status === "Approve" ? "white" : "#00B69B", bgcolor: status === "Approve" && "#00B69B" }}>
              Approve
            </MenuItem>
            <MenuItem onClick={() => handleUpdateStatus('Refuse', "#EB5757",)} sx={{ color: status === "Refuse" ? "white" : "#EB5757", bgcolor: status === "Refuse" && "#EB5757" }}>Refuse</MenuItem>
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
  margin: 4px 0;
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

