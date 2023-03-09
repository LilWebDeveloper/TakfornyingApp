import * as React from "react";
import { Form, Outlet } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";

import { NavBar, Drawer } from "../components/navBar/NavBar";
import { Copyright } from "../components/copyright/Copyright";
import { NavBarListItems } from "../components/navBar/NavBarListItems";

import { Theme } from "../style/CreateTheme";

function RootLayoutContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar position="absolute" open={open}>
          <Toolbar
            style={{
              backgroundColor: "#631200",
            }}
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Takfornying
            </Typography>
            <Form action="/logout" method="post">
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{ color: "white" }}
              >
                <LogoutTwoToneIcon />
                Logout
              </Button>
            </Form>
          </Toolbar>
        </NavBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{NavBarListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Outlet />
          <Copyright />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return <RootLayoutContent />;
}
