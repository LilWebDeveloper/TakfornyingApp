import { Button, TextField, MenuItem } from "@mui/material";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { Form } from "react-router-dom";

import { JobPosition } from "../../fake-db/JobPositionList";

import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';

import classes from "../../style/Froms.module.css";

function EmployeeForm({ method, employee }: any) {
  return (
    <div>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Form method={method} className={classes.order_form}>
            <TextField
              sx={{ m: 1 }}
              className={classes.input_size}
              id="firstName"
              name="firstName"
              type="text"
              label="First Name"
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
              variant="outlined"
              defaultValue={employee ? employee.secondName : ""}
            />
            <TextField
              sx={{ m: 1 }}
              className={classes.input_size}
              id="jobPosition"
              name="jobPosition"
              select
              label="Job Position"
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
              variant="outlined"
              defaultValue={employee ? employee.dNumber : ""}
            />
            <TextField
              sx={{ m: 1 }}
              className={classes.input_size}
              id="userLogin"
              name="userLogin"
              type="text"
              label="Login for employee"
              variant="outlined"
              defaultValue={employee ? employee.login : ""}
            />
            <TextField
              sx={{ m: 1 }}
              className={classes.input_size}
              id="password"
              name="password"
              type="text"
              label="Temporary password for employee"
              variant="outlined"
              defaultValue={employee ? employee.password : ""}
            />
            <Button
              type="submit"
              sx={{ m: 1 }}
              variant="contained"
              color="primary"
            >
              <PersonAddTwoToneIcon />
            </Button>
          </Form>
        </Paper>
      </Grid>
    </div>
  );
}

export default EmployeeForm;
