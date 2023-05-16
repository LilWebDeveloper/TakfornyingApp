import * as React from "react";
import { useState } from "react";
import { Link, useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Snackbar,
  Stack,
} from "@mui/material";

import classes from "../../style/Item.module.css";

import { EmployeeResData } from "../../interfaces/Employee";
import { StateType } from "../../interfaces/StateTypes";
import Alert from "../Alert/Alert";
import { employeeDetails } from "../../utils/TestsRoles";
import capitalizeFirst from "../../utils/CapitalizeFirst";

function EmployeeItem({ employee }: EmployeeResData) {
  const submit = useSubmit();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleClickConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  function DeleteHandler(
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) {
    submit(null, { method: "delete" });
    setAlertOpen(true);
    setConfirmOpen(false);
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
          <TableBody role={employeeDetails}>
            <TableRow
              key={employee._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {capitalizeFirst(employee.firstName)}
              </TableCell>
              <TableCell align="center">{capitalizeFirst(employee.secondName)}</TableCell>
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
          <Button
            onClick={handleClickConfirmOpen}
            variant="contained"
            color="primary"
          >
            <DeleteTwoToneIcon sx={{ mr: 1 }} />
            Delete
          </Button>
          <Stack>
            <Snackbar
              open={alertOpen}
              autoHideDuration={2000}
              onClose={handleAlertClose}
            >
              <Alert
                onClose={handleAlertClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                DELETED - The user has been removed
              </Alert>
            </Snackbar>
          </Stack>
          <Dialog
            open={confirmOpen}
            onClose={handleConfirmClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Do you want to remove the employee?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleConfirmClose}>Disagree</Button>
              <Button onClick={DeleteHandler} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </menu>
      )}
    </>
  );
}

export default EmployeeItem;
