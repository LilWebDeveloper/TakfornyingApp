import * as React from "react";
import { NavLink } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import classes from "../../style/NavBarListItems.module.css";

import { NavLinkType } from "../../interfaces/NavLinkType";

export function CustomNavLink({ goTo, title, iconType}: NavLinkType) {
  return (
    <NavLink
      to={goTo}
      className={({ isActive }) =>
        isActive ? classes.active : classes.noActive
      }
      end
    >
      <ListItemButton>
        <ListItemIcon>
          {iconType}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </NavLink>
  );
}
