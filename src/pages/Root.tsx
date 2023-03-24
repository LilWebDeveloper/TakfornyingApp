import React, { useEffect } from "react";
import { Form, Outlet, useRouteLoaderData, useSubmit } from "react-router-dom";

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
import {
  AdminNavBarListItems,
  ManagerNavBarListItems,
  EmployeeNavBarListItems,
} from "../components/navBar/NavBarListItems";

import { Theme } from "../style/CreateTheme";
import { getTokenDuration } from "../util/auth";

import { ListSubheader } from "@mui/material";

import classes from "../style/Root.module.css";
import { useSelector } from "react-redux";
import { StateType } from "../interfaces/StateTypes";

function RootLayoutContent() {
  const token = useRouteLoaderData("token-loader");
  const submit = useSubmit();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  const role = useSelector((state: StateType) => state.auth.role);
  const name = useSelector((state: StateType) => state.auth.name)

  let showAdminPanel = false;
  let showManagerPanel = false;
  let showEmployeePanel = false;

  if (role === "Admin") showAdminPanel = true;
  if (role === "Manager") showManagerPanel = true;
  if (role === "Employee") showEmployeePanel = true;

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
              pr: "24px",
            }}
          >
            <div className={classes.navbarButton}>
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
            </div>
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
                <div className={classes.logoutButton}>Logout</div>
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
          {showAdminPanel && (
            <List component="nav">{AdminNavBarListItems}</List>
          )}
          {showManagerPanel && (
            <List component="nav">{ManagerNavBarListItems}</List>
          )}
          {showEmployeePanel && (
            <List component="nav">{EmployeeNavBarListItems}</List>
          )}
          <ListSubheader component="div" inset>
            Welcome {name}
          </ListSubheader>
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
