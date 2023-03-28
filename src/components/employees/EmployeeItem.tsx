import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import classes from "../../style/Item.module.css";

import Button from "@mui/material/Button";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

import { Link, useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";
import { EmployeeResData } from "../../interfaces/Employee";
import { StateType } from "../../interfaces/StateTypes";
import {Snackbar, Stack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { forwardRef, useState } from "react";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EmployeeItem({ employee }: EmployeeResData) {
  const submit = useSubmit();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function DeleteHandler(event?: React.SyntheticEvent | Event, reason?: string) {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      setOpen(true)
      submit(null, { method: "delete" });
    }
  }

  const role = useSelector((state: StateType) => state.auth.role);

  let showButtons = true;

  if (role === "Employee") showButtons = false;

  return (
    <>
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
      {showButtons && (
        <menu className={classes.actions}>
          <Link to="edit">
            <Button variant="contained" color="primary">
              <EditTwoToneIcon sx={{ mr: 1 }} />
              Edit
            </Button>
          </Link>
          <Button onChange={handleClick} onClick={DeleteHandler} variant="contained" color="primary">
            <DeleteTwoToneIcon sx={{ mr: 1 }} />
            Delete
          </Button>
          <Stack>
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  DELETED - The user has been removed
                </Alert>
              </Snackbar>
            </Stack>
        </menu>
      )}
    </>
  );
}

export default EmployeeItem;
