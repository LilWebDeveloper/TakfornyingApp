import { useRef, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import { Button, TextField, MenuItem, Stack, Snackbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

import { RoofPaint } from "../../utils/RoofPaint";

import classes from "../../style/Forms.module.css";
import { OrderFormType } from "../../interfaces/Order";
import { EmployeeType } from "../../interfaces/Employee";
import { MenuItemType } from "../../interfaces/MenuItemType";
import { max20, max20min3Length, max50, max50min3Length, maxNumber50, min3, minLenght3, roofAngleValid, roofSizeValid, workerId } from "../../utils/ValidationFunction";
import Alert from "../Alert/Alert";


function OrderForm({ method, order, selectEmployees }: OrderFormType) {
  const [open, setOpen] = useState(false);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'

  let buttonLabel = ''

  if(method === 'post'){
    buttonLabel = 'ADD'
  } else if (method === 'patch'){
    buttonLabel = 'EDIT'
  }

  const addressInputRef = useRef<HTMLInputElement>();
  const roofPaintInputRef = useRef<HTMLInputElement>();
  const roofSizeInputRef = useRef<HTMLInputElement>();
  const roofAngleInputRef = useRef<HTMLInputElement>();
  const descriptionInputRef = useRef<HTMLInputElement>();
  const workerInputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    const enteredAddress = addressInputRef.current?.value;
    const enteredRoofPaint = roofPaintInputRef.current?.value;
    const enteredRoofSize = roofSizeInputRef.current?.value;
    const enteredRoofAngle = roofAngleInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;
    const enteredWorker = workerInputRef.current?.value;

    const enteredAddressIsValid =
      min3(enteredAddress!) && max50(enteredAddress!);
    const enteredRoofPaintIsValid =
      min3(enteredRoofPaint!) && max20(enteredRoofPaint!);
    const enteredRoofSizeIsValid = roofSizeValid(enteredRoofSize!);
    const enteredRoofAngleIsValid = roofAngleValid(enteredRoofAngle!);
    const enteredDescriptionIsValid = min3(enteredDescription!);
    const enteredWorkerIsValid = workerId(enteredWorker!);

    const formIsValid =
      enteredAddressIsValid &&
      enteredRoofPaintIsValid &&
      enteredRoofSizeIsValid &&
      enteredRoofAngleIsValid &&
      enteredDescriptionIsValid &&
      enteredWorkerIsValid;

    if (!formIsValid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
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
  return (
    <div>
      <Grid item xs={12}>
        <Paper sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}>
          <Form
            method={method}
            className={classes.order_form}
          >
            <div>
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="address"
                name="address"
                type="text"
                label="Address"
                inputProps={max50min3Length}
                required
                inputRef={addressInputRef}
                variant="outlined"
                defaultValue={order ? order.address : ""}
              />
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="roofPaint"
                name="roofPaint"
                select
                label="Roof Paint"
                inputProps={max20min3Length}
                required
                inputRef={roofPaintInputRef}
                defaultValue={order ? order.roofPaint : ""}
              >
                {RoofPaint.map((option: MenuItemType) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="roofSize"
                name="roofSize"
                type="number"
                label="Roof Size"
                required
                inputRef={roofSizeInputRef}
                variant="outlined"
                defaultValue={order ? order.roofSize : ""}
              />
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="roofAngle"
                name="roofAngle"
                type="number"
                label="Roof Angle"
                inputProps={maxNumber50}
                required
                inputRef={roofAngleInputRef}
                variant="outlined"
                defaultValue={order ? order.roofAngle : ""}
              />
            </div>
            <div>
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="description"
                name="description"
                type="text"
                label="Description"
                inputProps={minLenght3}
                required
                inputRef={descriptionInputRef}
                variant="outlined"
                defaultValue={order ? order.description : ""}
              />
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="worker"
                name="worker"
                select
                inputProps={{ pattern: "[0-9a-fA-F]{24}" }}
                required
                inputRef={workerInputRef}
                label="Select Worker"
                defaultValue={order ? order.worker._id : ""}
              >
                {selectEmployees.map((option: EmployeeType) => (
                  <MenuItem key={option._id} value={option._id}>
                    {option.firstName + " " + option.secondName}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <Button
              disabled={isSubmitting}
              type="submit"
              sx={{ m: 1 }}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              <AddCircleTwoToneIcon sx={{ mr: 1 }} />
              {isSubmitting ? 'Sending...' : buttonLabel}
            </Button>
            <Stack>
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  SUCCESS - Order data has been sent
                </Alert>
              </Snackbar>
            </Stack>
          </Form>
        </Paper>
      </Grid>
    </div>
  );
}

export default OrderForm;
