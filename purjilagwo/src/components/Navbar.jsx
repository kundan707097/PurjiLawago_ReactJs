import * as React from "react";
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
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuBox from "./Menubox";
import { Search, User, Locked,  } from "@carbon/icons-react";
import Paper from '@mui/material/Paper';

const drawerWidth = 240;
const navItems = [
  "Find Doctor",
  "Emergency Booking",
  "Free consult",
  "Service",
  "Surgeries",
];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isSticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 1) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
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
          // backgroundColor:"#F0F7FF" ,
          backgroundColor :isSticky? "#F0F7FF" : "transparent"  ,
          boxShadow: "none",
          position:"fixed" , top: "0",
          py: isSticky? 0 : ".5rem" ,
          color: "black",
          transition: "padding 0.3s ease-out",
          // filter: "blur(8px)"
          
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

          <Box sx={{ width: "100%", display: "flex", marginX: "3rem" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block", color: "#42a5f5" } }}
            >
              Logo
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}
            >
              {navItems.map((item) => (
                <Link
                  to=""
                  key={item}
                  style={{
                    // color: "#42a5f5",
                    color: "black",
                    marginRight: "20px",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {item}
                </Link>
              ))}

              <div
                style={{
                  color: "black",
                  marginRight: "20px",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                <MenuBox isSticky={isSticky} />
              </div>
              <Search style={{marginRight: "20px"}} />
              <Paper elevation={0} sx={{backgroundColor: "white", display: "flex", px: "10px",py: "5px", alignItems: "center", mr: "10px", border: "1px solid #a0a0a069", cursor: "pointer", borderRadius: "10px"}}>
                <User style={{color :"black", marginRight: "5px"}}/> <Typography sx={{color: "black", fontSize: "15px", fontWeight: "600", }}>Register</Typography>
              </Paper>
              <Paper elevation={2} sx={{backgroundColor: "#42a5f5", display: "flex", px: "10px",py: "5px", alignItems: "center", cursor: "pointer", borderRadius: "10px"}}>
                <Locked style={{color :"white", marginRight: "5px"}}/> <Typography sx={{color: "white", fontSize: "15px", fontWeight: "600", }}>Login</Typography>
              </Paper>
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
