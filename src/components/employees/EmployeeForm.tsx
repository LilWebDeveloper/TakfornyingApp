import { Button, TextField, MenuItem } from "@mui/material";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { Form } from "react-router-dom";

import { JobPosition } from "../../fake-db/JobPositionList";

import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';

import classes from "../../style/Forms.module.css";

const maxMinLenght = {maxLength: 30, minLength: 3}

function EmployeeForm({ method, employee }: any) {
  // Change validation to MUI TextField Validation
  return (
    <div>
      <Grid item xs={12}>
        <Paper sx={{m:2, p: 2, display: "flex", flexDirection: "column" }}>
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
                required
                inputProps={maxMinLenght}
                defaultValue={employee ? employee.jobPosition : ""}
              >
                {JobPosition.map((option: any) => (
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
                type="string"
                label="D-Number / Person Number"
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
                required
                inputProps={maxMinLenght}
                variant="outlined"
                defaultValue={employee ? employee.password : ""}
              />
            </div>
            <Button
              type="submit"
              sx={{ m: 1 }}
              variant="contained"
              color="primary"
            >
              <PersonAddTwoToneIcon sx={{ mr: 1 }} />
              {method === "post" ? "ADD" : "EDIT"}
            </Button>
          </Form>
        </Paper>
      </Grid>
    </div>
  );
}

export default EmployeeForm;
