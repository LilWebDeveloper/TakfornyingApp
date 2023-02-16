import {
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

import { Form } from "react-router-dom";

import classes from "../../style/From.module.css";


const currencies = [
  {
    value: "Admin",
    label: "Admin",
    token: "admin",
  },
  {
    value: "Manager",
    label: "Manager",
    token: "manager",
  },
  {
    value: "Employee",
    label: "Employee",
    token: "employee",
  },
];

function EmployeeForm({ method, employee }: any) {
  return (
    <div>
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
          <br />
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
          <br />
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="jobPosition"
            name="jobPosition"
            select
            label="Job Position"
            defaultValue={employee ? employee.jobPosition : ""}
          >
            {currencies.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
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
          <br />
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
          <br />
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
          <br />
          <Button
            type="submit"
            sx={{ m: 1 }}
            variant="contained"
            color="primary"
          >
            save
          </Button>
        </Form>
    </div>
  );
}

export default EmployeeForm;