import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import classes from "../../style/OrderItem.module.css";

import { Button, createTheme, ThemeProvider } from "@mui/material";

import { Link, useSubmit } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#631200",
    },
  },
});

interface Order {
  order: any;
}

function OrderItem({ order }: Order) {
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
                ADDRESS
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                ROOF PAINT
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                ROOF SIZE
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                ROOF ANGLE
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                DESCRIPTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {order.address}
              </TableCell>
              <TableCell align="center">{order.roofPaint}</TableCell>
              <TableCell align="center">{order.roofSize} &#13217;</TableCell>
              <TableCell align="center">{order.roofAngle}&#176;</TableCell>
              <TableCell align="center">{order.description}</TableCell>
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

export default OrderItem;
