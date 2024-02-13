import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User } from "@carbon/icons-react";
import Paper from "@mui/material/Paper";

const drawerWidth = 240;
const navItems = [
  {
    name: "Find Doctor",
    to: "/doctorlist",
  },
  {
    name: "Video Consult",
    to: "/videoConsult",
  },
  {
    name: "Medicine",
    to: "/medicine",
  },
  {
    name: "Lab Test",
    to: "/labTest",
  },
  {
    name: "Surgeries",
    to: "/surgeries",
  },
  {
    name: "About Us",
    to: "/aboutus",
  },
  {
    name: "Contact Us",
    to: "/contactus",
  },
];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

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

  // Logout function

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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#FBFCFF",
          boxShadow: "none",
          py: ".5rem",
          // position: "static",
          zIndex:999
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>

          <Box sx={{ width: "100%", display: "flex", marginX: "3rem", }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", color: "#42a5f5" },
              }}
            >
              Logo
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}
            >
              {/* Navabr item list  */}

              {navItems.map((item) => (
                <Link
                  to={item.to}
                  key={item.name}
                  style={{
                    color:
                      location.pathname === item.to ? "#64EBB6" : "#1C4188",
                    marginRight: "20px",
                    fontSize: "15px",
                    fontWeight: "500",
                    borderBottom:
                      location.pathname === item.to && "2px solid #64EBB6",
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {token ? (
                <>
                  {/* After Login Profile Avatar */}

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
                        ml: 2,
                      }}
                    >
                      Profile Name
                    </Typography>
                  </Paper>
                </>
              ) : (
                <>
                  {/* Login and signup button */}
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
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
