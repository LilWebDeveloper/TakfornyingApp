import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";

import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StoreIcon from "@mui/icons-material/Store";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MapIcon from "@mui/icons-material/Map";

import { CustomNavLink } from "./CustomNavLink";

export const AdminNavBarListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Admin Panel
    </ListSubheader>

    <CustomNavLink
      goTo="employees"
      title="Employees"
      iconType={<PersonIcon />}
    />
    <CustomNavLink
      goTo="employees/new"
      title="Add employee"
      iconType={<PersonAddIcon />}
    />
    <CustomNavLink goTo="orders" title="Orders" iconType={<StoreIcon />} />
    <CustomNavLink
      goTo="orders/new"
      title="Add orders"
      iconType={<AddBusinessIcon />}
    />
    <CustomNavLink
      goTo="addresses"
      title="Addresses"
      iconType={<MapIcon />}
    />
  </React.Fragment>
);

export const ManagerNavBarListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Manager Panel
    </ListSubheader>

    <CustomNavLink goTo="orders" title="Orders" iconType={<StoreIcon />} />
    <CustomNavLink
      goTo="orders/new"
      title="Add orders"
      iconType={<AddBusinessIcon />}
    />
    <CustomNavLink
      goTo="addresses"
      title="Addresses"
      iconType={<MapIcon />}
    />
  </React.Fragment>
);

export const EmployeeNavBarListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Employee Panel
    </ListSubheader>

    <CustomNavLink goTo="orders" title="Orders" iconType={<StoreIcon />} />
    <CustomNavLink
      goTo="addresses"
      title="Addresses"
      iconType={<MapIcon />}
    />
  </React.Fragment>
);
