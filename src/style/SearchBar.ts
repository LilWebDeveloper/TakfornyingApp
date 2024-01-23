import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";

export const Search = styled(motion.div)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: "5%",
  width: "20em",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "26em",
  },
}));

export const SearchIconWrapper = styled("div")(() => ({
  width: "100%",
  height: "2.8rem",
  display: "flex",
  alignItems: "center",
  padding: "5px",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: "2.8rem",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "23.5em",
    [theme.breakpoints.up("md")]: {
      width: "23.5em",
    },
  },
}));

export const LineSeparator = styled("span")(({ theme }) => ({
  display: "flex",
  minWidth: "100%",
  minHeight: "2px",
  backgroundColor: alpha(theme.palette.common.black, 0.25),
}));

export const SearchContent = styled("div")(() => ({
  width: "100%",
  height: "100%",
  overflowY: 'auto',
}));

export const LoadingWrapper = styled('div')(() => ({
  width: "100%",
  height: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const containerVairants = {
  active: {
    height: "9rem",
  },
  inactive: {
    height: "2.8rem",
  },
};

export const containerTransistor = {
display: 'none',
  type: "spring",
  damping: 22,
  stiffnes: 150,
};
