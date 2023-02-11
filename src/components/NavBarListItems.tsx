import * as React from "react";
import { NavLink } from 'react-router-dom'

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StoreIcon from '@mui/icons-material/Store';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import MapIcon from '@mui/icons-material/Map';

import classes from './NavBarListItems.module.css'


export const mainListItems = (
  <React.Fragment >
    <ListSubheader component="div" inset>
      Owner Panel
    </ListSubheader>
    
    <NavLink className={classes.a} to='/employee' >
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Employee" />
    </ListItemButton>
    </NavLink>

    <NavLink className={classes.a} to='/employee/add'>
    <ListItemButton>
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add employee" />
    </ListItemButton>
    </NavLink>

    <NavLink className={classes.a} to='/orders'>
    <ListItemButton>
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    </NavLink>

    <NavLink className={classes.a} to='/orders/add'>
    <ListItemButton>
      <ListItemIcon>
        <AddBusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Add orders" />
    </ListItemButton>
    </NavLink>

    <NavLink className={classes.a} to='addresses'>
    <ListItemButton>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="Orders Addresses" />
    </ListItemButton>
    </NavLink>

  </React.Fragment>
);