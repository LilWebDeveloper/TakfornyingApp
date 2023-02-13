import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import classes from "../../style/Item.module.css";

import { Button, createTheme, ThemeProvider } from "@mui/material";

import { Link, useSubmit } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#631200",
    },
  },
});


function EmployeeItem({ employee }: any) {
  const submit = useSubmit();

  function DeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} className={classes.order}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow className={classes.tableCell} sx={{ fontWeight: 400 }}>
              <TableCell sx={{ color: "white" }} align="center">
                First Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Second Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Job Position
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                D-Number / Person Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {employee.firstName}
              </TableCell>
              <TableCell align="center">{employee.secondName}</TableCell>
              <TableCell align="center">{employee.jobPosition}</TableCell>
              <TableCell align="center">{employee.dNumber}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <menu className={classes.actions}>
        <Button variant="contained" color="primary">
          <Link to="edit">Edit</Link>
        </Button>
        <Button onClick={DeleteHandler} variant="contained" color="primary">
          Delete
        </Button>
      </menu>
    </ThemeProvider>
  );
}

export default EmployeeItem;
