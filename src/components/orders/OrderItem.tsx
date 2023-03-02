import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

import classes from "../../style/Item.module.css";

import { Button } from "@mui/material";

import { Link, useSubmit } from "react-router-dom";

function OrderItem({ order }: any) {
  const submit = useSubmit();

  function DeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <>
      <TableContainer component={Paper} className={classes.order}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow className={classes.tableCell} sx={{ fontWeight: 400 }}>
              <TableCell sx={{ color: "white" }} align="center">
                ADDRESS
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                WORKER
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
              key={order._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {order.address}
              </TableCell>
              <TableCell align="center">
                {order.worker.firstName + " " + order.worker.secondName}
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
        <Link to="edit">
          <Button variant="contained" color="primary">
            <EditTwoToneIcon sx={{ mr: 1 }} />
            Edit
          </Button>
        </Link>
        <Button onClick={DeleteHandler} variant="contained" color="primary">
          <DeleteTwoToneIcon sx={{ mr: 1 }} />
          Delete
        </Button>
      </menu>
    </>
  );
}

export default OrderItem;
