
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box, Typography, ListItemText, ListItemButton, ListItem, List, Paper, Divider, Drawer, Collapse, ListItemIcon, Avatar } from '@mui/material'
import { User } from "@carbon/icons-react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./style/Header.css";
import { whats_app } from "../constants/socialMedia";


function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openSpacialities, setOpenSpacialities] = useState(false);


  const handleClick = () => {
    setOpenSpacialities(!openSpacialities);
  };
  const handleNavigate = (to) => {
    // setOpen(false);
    navigate(to);
  }

  const first_navbar_items = [
    {
      name: "Find Doctor",
      to: '/doctorlist'
    },
    {
      name: "Emergency Booking",
      to: "/emergency_booking"
    },
  ]

  const specialities = [

    {
      name: "Cardiologist",
      to: "/cardiology"
    },
    {
      name: "Eye Care",
      to: "/eyecare"
    },
    {
      name: "Dentist",
      to: '/dentist'
    },
    {
      name: "ENT",
      to: "/ent"
    },
    {
      name: "Nephrology",
      to: "/nephrology"
    },
    {
      name: "Paediatric",
      to: "/paediatric"
    },
    {
      name: "Fertility",
      to: "/fertiltity"
    }
  ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">

      <List>
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Link to="/" className="navbar-brand">
            <img src="/images/Logo/Logo2.png" alt="Logo" height={"100%"} />
          </Link>
          <Box>
            <ListItemButton onClick={() => setOpen(false)} sx={{ px: 0 }}>
              <ListItemIcon >
                <ClearIcon sx={{ mx: "auto", }} />
              </ListItemIcon>
            </ListItemButton>
          </Box>
        </ListItem>
      </List>

      <List>
        {first_navbar_items.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleNavigate(text.to)}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary={"Specialities"} />
            {openSpacialities ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openSpacialities} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {specialities.map((subItem, index) => {
              return (
                <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate(subItem.to)}>
                  <ListItemText primary={subItem.name} />
                </ListItemButton>
              )
            })}

          </List>
        </Collapse>

      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"About Us"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Contact Us"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <LoginedAction />
        </ListItem>
      </List>
    </Box>
  );

  const first_row = [
    {
      img: "/images/Header/heart.svg",
      label: "Cadiology",
      to: "/cardiology",
      hindiLabel: "हृदय"
    },
    {
      img: "/images/Header/heart.svg",
      label: "Eye Care",
      to: "/eyecare",
      hindiLabel: "आंखों की देखभाल"
    },
    {
      img: "/images/Header/dentist.svg",
      label: "Dentist",
      to: "/dentist",
      hindiLabel: "दाँतों का डॉक्टर"
    },

    {
      img: "/images/Header/ear.svg",
      label: "Ent",
      to: "/ent",
      hindiLabel: "कान, नाक, गला"
    },

  ]

  const second_row = [

    {
      img: "/images/Header/kidney.svg",
      label: "Nephrology",
      to: "/nephrology",
      hindiLabel: "किडनी रोग विशेषज्ञ"
    },
    {
      img: "/images/Header/mother.svg",
      label: "Paediatric",
      to: "/paediatric",
      hindiLabel: "बाल चिकित्सा"
    },
    {
      img: "/images/Fertility/img7.svg",
      label: "Fertility",
      to: "/fertiltity",
      hindiLabel: "गर्भधारण"
    },

  ]

  return (
    <>
      <header className="pageHeader">
        <nav
          className="navbar navbar-expand-lg navbar-light navbar-white"
          aria-label="Eighth navbar example"
          style={{ zIndex: 999 }}
        >
          <div className="px-3 py-2 w-100 d-flex justify-content-between align-items-center">
            <Link to="/" className="navbar-brand">
              <img src="/images/Logo/Logo2.png" alt="Logo" height={"100%"} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarsExample07"
              aria-controls="navbarsExample07"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpen(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/doctorlist"
                    style={{
                      color: location.pathname === "/doctorlist" && "#fff", textDecoration : location.pathname === "/doctorlist" && "underline", fontWeight: location.pathname === "/doctorlist" && "700" 
                    }}
                  >
                    Doctors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/emergency_booking"
                    style={{
                      color: location.pathname === "/emergency_booking" && "black",
                    }}
                  >
                    Emergency Booking
                  </Link>
                </li>
                <li className="nav-item specialities-hover">
                  <div
                    className="nav-link"
                    style={{
                      position: "relative"
                    }}
                  >
                    <Box className="d-flex align-iteems-start">Specialities<KeyboardArrowDownIcon/> </Box>
                    <Box sx={{ position: "absolute", bgcolor: "#F8FCFB", top: "40px", boxShadow: "3px 19px 20px 0px #0000001A", p: 2, left: "-250px", zIndex: 999, }} className="specialities-box">
                      <Box sx={{ display: "flex", mt: 2, mb: 4, color: "black" }}>
                        {first_row.map((items, index) => {
                          return (
                            <Box sx={{ width: "180px", "&:hover": { translate: "0 -10px", transition: "all", transitionDuration: "300ms" }, transitionDuration: "300ms", }} key={index}>
                              <Link to={items.to}>
                                <Avatar
                                  alt="Remy Sharp"
                                  src={items.img !== "" ? items.img : "../images/Header/heart.svg"}
                                  sx={{ width: 70, height: 70, mx: "auto", background: "white" }}
                                />
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, mt: 1, color: "black", textAlign: "center" }}>
                                  {items.label}
                                </Typography>
                                <Typography sx={{ fontSize: "15px", textAlign: "center", color: "gray", fontWeight: 500 }}>
                                  {items.hindiLabel}
                                </Typography>
                              </Link>
                            </Box>
                          )
                        })}
                      </Box>

                      <Box sx={{ display: "flex", mb: 2, color: "black" }}>
                        {second_row.map((items, index) => {
                          return (
                            <Box sx={{ width: "180px", "&:hover": { translate: "0 -10px", transition: "all", transitionDuration: "300ms" }, transitionDuration: "300ms", }} key={index}>
                              <Link to={items.to}>
                                <Avatar
                                  alt="Remy Sharp"
                                  src={items.img !== "" ? items.img : "../images/HomeVector/Header/heart.svg"}
                                  sx={{ width: 70, height: 70, mx: "auto", background: "white" }}
                                />
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, mt: 1, color: "black", textAlign: "center" }}>
                                  {items.label}
                                </Typography>
                                <Typography sx={{ fontSize: "15px", textAlign: "center", color: "gray", fontWeight: 500 }}>
                                  {items.hindiLabel}
                                </Typography>
                              </Link>
                            </Box>
                          )
                        })}
                      </Box>

                    </Box>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/surgeries"
                    style={{
                      color: location.pathname === "/surgeries" && "black",
                    }}
                  >
                    Surgeries
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center flex-sm-wrap rightNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/about_us"
                      style={{
                        color: location.pathname === "/about_us" && "black",
                      }}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item" style={{ marginRight: "5px" }}>
                    <Link
                      className="nav-link"
                      to="/contact_us"
                      style={{
                        color: location.pathname === "/contact_us" && "black",
                      }}
                    >
                      Contact Us
                    </Link>
                  </li>

                </ul>
                <LoginedAction />
                {/* <Link to={whats_app} style={{ marginRight: "10px", color: "white" }}>
                  <Box sx={{ backgroundColor: "#68B807", p: 1 }}>
                    <WhatsAppIcon color="white" />
                  </Box>
                </Link> */}
                {/* <WhatsAppIcon style={{ color: "68B807", fontSize: "30px", cursor: "pointer" }} /> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>


    </>
  );
}

const LoginedAction = () => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    // Retrieve the token from local storage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);

      // Retrieve email and phone number from local storage
      const storedName = localStorage.getItem("fullName");

      if (storedName) {
        setName(storedName);
      }
    }
  }, []);

  return (
    <>
      {token ? (
        <div className="dropdown">
          <Link to={localStorage.getItem('role') === 'Admin' ? "/dashboard/doctor/registration" : "/dashboard/appointment&details"}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "white",
                display: "flex",
                p: "10px",
                alignItems: "center",
                mr: "10px",
                border: "2px solid #42A5F5",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            // className="nav-link dropdown-toggle"
            // id="dropdown07"
            // data-bs-toggle="dropdown"
            // aria-expanded="false"
            >
              <User
                style={{
                  color: "white",
                  marginRight: "5px",
                  backgroundColor: "#42A5F5",
                  width: "35px",
                  height: "35px",
                  padding: 8,
                  borderRadius: "8px",
                }}
              />
              <Typography
                sx={{
                  color: "#1C4188",
                  fontSize: "15px",
                  fontWeight: 600,
                  ml: "2px",
                }}
              >
                {name}
              </Typography>
            </Paper>
          </Link>

          {/* <ul
                      className="dropdown-menu liststyle-none"
                      aria-labelledby="dropdown07"
                    >
                      <List sx={{ width: "230px"}}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText sx={{ fontSize: "13px" }}>
                              <Typography sx={{ fontSize: "13px", }}>My Appointment</Typography>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => navigate("/edit/profile")}>
                            <ListItemText sx={{ fontSize: "13px" }}>
                              <Typography sx={{ fontSize: "13px", pl: "5px", color: "#42A5F5" }}>View / Update Profile</Typography>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText sx={{ fontSize: "13px" }}>
                              <Typography sx={{ fontSize: "13px", pl: "5px" }}>Setting</Typography>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton onClick={handleLogout}>
                            <ListItemText sx={{ fontSize: "13px" }}>
                              <Typography sx={{ fontSize: "13px", pl: "5px" }}>Logout</Typography>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </ul> */}
        </div>
      ) : (
        <Link to="/login">
          <Paper
            sx={{
              backgroundColor: "#42a5f5",
              display: "flex",
              px: "12px",
              py: "5px",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "10px",
              color: "white",
              "&:hover": {
                color: "#1C4188",
                backgroundColor: "white",
              },
              transition: "all 0.1s ease-in-out",
              fontWeight: 600,
              border: "2px solid #42A5F5",
            }}
          >
            Login / Signup
          </Paper>
        </Link>
      )}
    </>
  )
}

export default Header;
