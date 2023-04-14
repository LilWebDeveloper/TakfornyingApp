import { forwardRef, useRef, useState } from "react";
import { Form } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, TextField, MenuItem, Snackbar, Stack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";

import { JobPosition } from "../../consts/JobPositionList";

import { EmployeeFormType } from "../../interfaces/Employee";

import classes from "../../style/Forms.module.css";
import { isDNumber, max30, min3, min5 } from "../../consts/ValidationFunction";

const maxMinLenght = { maxLength: 30, minLength: 3 };
const pwdLength = { minLenght: 5}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EmployeeForm({ method, employee }: EmployeeFormType) {
  const [open, setOpen] = useState(false);

  const firstNameInputRef = useRef<HTMLInputElement>();
  const secondNameInputRef = useRef<HTMLInputElement>();
  const jobPositionInputRef = useRef<HTMLInputElement>();
  const dNumberInputRef = useRef<HTMLInputElement>();
  const userLoginInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    const enteredFirstName = firstNameInputRef.current?.value;
    const enteredSecondName = secondNameInputRef.current?.value;
    const enteredJobPosition = jobPositionInputRef.current?.value;
    const enteredDNumber = dNumberInputRef.current?.value;
    const enteredLogin = userLoginInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    const enteredFirstNameIsValid =
    min3(enteredFirstName!) && max30(enteredFirstName!);
    const enteredSecondNameIsValid =
      min3(enteredSecondName!) && max30(enteredSecondName!);
    const enteredJobPositionIsValid =
      min3(enteredJobPosition!) && max30(enteredJobPosition!);
    const enteredDNumberIsValid = isDNumber(enteredDNumber!);
    const enteredLoginIsValid = min3(enteredLogin!) && max30(enteredLogin!);
    const enteredPasswordIsValid =
      min5(enteredPassword!) && max30(enteredPassword!);

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredSecondNameIsValid &&
      enteredJobPositionIsValid &&
      enteredDNumberIsValid &&
      enteredLoginIsValid &&
      enteredPasswordIsValid;

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
          <Form method={method} className={classes.order_form}>
            <div>
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="firstName"
                name="firstName"
                type="text"
                label="First Name"
                inputProps={maxMinLenght}
                inputRef={firstNameInputRef}
                required
                variant="outlined"
                defaultValue={employee ? employee.firstName : ""}
              />
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="secondName"
                name="secondName"
                type="text"
                label="Second Name"
                inputRef={secondNameInputRef}
                required
                inputProps={maxMinLenght}
                variant="outlined"
                defaultValue={employee ? employee.secondName : ""}
              />
            </div>
            <div>
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="jobPosition"
                name="jobPosition"
                select
                label="Job Position"
                inputRef={jobPositionInputRef}
                required
                inputProps={maxMinLenght}
                defaultValue={employee ? employee.jobPosition : ""}
              >
                {JobPosition.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="dNumber"
                name="dNumber"
                type="text"
                label="D-Number / Person Number"
                inputRef={dNumberInputRef}
                required
                inputProps={{ pattern: "[0-9]{11}" }}
                variant="outlined"
                defaultValue={employee ? employee.dNumber : ""}
              />
            </div>
            <div>
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="userLogin"
                name="userLogin"
                type="text"
                label="Login for employee"
                inputRef={userLoginInputRef}
                required
                inputProps={maxMinLenght}
                variant="outlined"
                defaultValue={employee ? employee.login : ""}
              />
              <TextField
                sx={{ m: 1 }}
                className={classes.input_size}
                id="password"
                name="password"
                type="password"
                label="Temporary password for employee"
                inputRef={passwordInputRef}
                required
                inputProps={pwdLength}
                variant="outlined"
                defaultValue={employee ? employee.password : ""}
              />
            </div>
            <Button
              onClick={handleClick}
              type="submit"
              sx={{ m: 1 }}
              variant="contained"
              color="primary"
            >
              <PersonAddTwoToneIcon sx={{ mr: 1 }} />
              {method === "post" ? "ADD" : "EDIT"}
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
                  SUCCESS - Employee data has been sent
                </Alert>
              </Snackbar>
            </Stack>
          </Form>
        </Paper>
      </Grid>
    </div>
  );
}

export default EmployeeForm;
