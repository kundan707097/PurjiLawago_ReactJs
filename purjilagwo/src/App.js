// import React, { } from 'react';
// import './App.css';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Login from "./components/Login";

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Home/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Note the updated imports
// import Header from './components/Header';
import Footer from './components/Footer';
import { routevalues } from './Routes/PublicRoute';
import Routing from './Routes/Routes';
import { SnackbarProvider, closeSnackbar, MaterialDesignContent } from "notistack";
import { ListItemButton, ListItemIcon, styled, createTheme, ThemeProvider } from "@mui/material";
import { Close } from "@carbon/icons-react";


const theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans","Plaster", "sans-serif"].join(","),
  },
});

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    width: "100%",
    backgroundColor: "white",
    color: "green",
    borderLeft: "4px solid green",

  },
  "&.notistack-MuiContent-error": {
    width: "100%",
    backgroundColor: "white",
    color: "red",
    borderLeft: "4px solid red",
  },
  "&.notistack-MuiContent-info": {
    width: "100%",
    backgroundColor: "white",
    color: "#2196f3",
    borderLeft: "4px solid #2196f3",
  },
}));

function App() {
  return (
    <SnackbarProvider
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
      }}
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      hideIconVariant
      action={(snackbarId) => (
        <ListItemButton sx={{ width: "3.5rem", px: 0 }} onClick={() => closeSnackbar(snackbarId)}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
            <Close width={24} height={24} color="black" />
          </ListItemIcon>
        </ListItemButton>
      )}
    >

      <ThemeProvider theme={theme}>
        <div className="App">
          <Routing />
        </div>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;


