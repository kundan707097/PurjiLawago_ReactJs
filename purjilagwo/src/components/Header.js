
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Typography, ListItemText,  ListItemButton, ListItem, List, Paper } from '@mui/material'
import { User } from "@carbon/icons-react";


function Header() {
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Retrieve the token from local storage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);

      // Retrieve email and phone number from local storage
      const storedName = localStorage.getItem("fullName");
      const storedPhoneNumber = localStorage.getItem("phoneNumber");

      if (storedName && storedPhoneNumber) {
        setName(storedName);
        setPhoneNumber(storedPhoneNumber);
      }
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    localStorage.removeItem("phoneNumber");

    if (window.location.pathname === "/") {
      // Reload the page
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <header className="pageHeader">
        <nav
          className="navbar navbar-expand-lg navbar-light navbar-white bg-white"
          aria-label="Eighth navbar example"
          style={{ zIndex: 999 }}
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src="/images/logo.png" alt="Logo" className="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample07"
              aria-controls="navbarsExample07"
              aria-expanded="false"
              aria-label="Toggle navigation"
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
                      color: location.pathname === "/doctorlist" && "black",
                    }}
                  >
                    Find Doctor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/videoConsult"
                    style={{
                      color: location.pathname === "/videoConsult" && "black",
                    }}
                  >
                    Video Consult
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/medicine"
                    style={{
                      color: location.pathname === "/medicine" && "black",
                    }}
                  >
                    Medicine
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/labTest"
                    style={{
                      color: location.pathname === "/labTest" && "black",
                    }}
                  >
                    Lab Test
                  </Link>
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
                {token ? (
                  <div className="dropdown">
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
                      className="nav-link dropdown-toggle"
                      id="dropdown07"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
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
                        Kundan Kumar
                      </Typography>
                    </Paper>
                    <ul
                      className="dropdown-menu liststyle-none"
                      aria-labelledby="dropdown07"
                    >
                      <List sx={{ width: "230px" }}>
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
                    </ul>
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
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
