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
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

import { Button, Dialog, DialogActions, DialogTitle, Snackbar, Stack } from "@mui/material";

import classes from "../../style/Item.module.css";

import { OrderResData } from "../../interfaces/Order";
import { StateType } from "../../interfaces/StateTypes";
import Alert from "../Alert/Alert";
import { orderDetails } from "../../utils/TestsRoles";
import capitalizeFirst from "../../utils/CapitalizeFirst";

function OrderItem({ order }: OrderResData) {
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
          <TableBody role={orderDetails}>
            <TableRow
              key={order._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {capitalizeFirst(order.address)}
              </TableCell>
              <TableCell align="center">
                {order.worker
                  ? capitalizeFirst(order.worker.firstName) + " " + capitalizeFirst(order.worker.secondName)
                  : ""}
              </TableCell>
              <TableCell align="center">{order.roofPaint}</TableCell>
              <TableCell align="center">{order.roofSize} &#13217;</TableCell>
              <TableCell align="center">{order.roofAngle}&#176;</TableCell>
              <TableCell align="center">{order.description}</TableCell>
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
              {"Do you want to remove the order?"}
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

export default OrderItem;
