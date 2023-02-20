import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";

import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StoreIcon from "@mui/icons-material/Store";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MapIcon from "@mui/icons-material/Map";

import { CustomNavLink } from "./CustomNavLink";

export const NavBarListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Control Panel
    </ListSubheader>

  <CustomNavLink goTo='employees' title='Employees' iconType={<PersonIcon />}/>
  <CustomNavLink goTo='employees/new' title='Add employee' iconType={<PersonAddIcon />}/>
  <CustomNavLink goTo='orders' title='Orders' iconType={<StoreIcon />}/>
  <CustomNavLink goTo='orders/new' title='Add orders' iconType={<AddBusinessIcon/>}/>
  <CustomNavLink goTo='addresses' title='Orders addresses' iconType={<MapIcon/>}/>
    
  </React.Fragment>
);
