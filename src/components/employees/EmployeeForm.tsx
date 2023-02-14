import {
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

import { Form, redirect } from "react-router-dom";

import classes from "../../style/From.module.css";


const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "Employee",
    label: "Employee",
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
            defaultValue={employee ? employee.firstName : ""}
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

export async function action({ request, params }: any) {
  const method = request.method;

  const data = await request.formData();

  const employeeData = {
    firstName: data.get("firstName"),
    secondName: data.get("secondName"),
    jobPosition: data.get("jobPosition"),
    dNumber: data.get("dNumber"),
    login: data.get("userLogin"),
    password: data.get("password"),
  };

  let url = 'https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees.json'

  if(method === 'PATCH'){
    const employeeId = params.employeeId
    url = 'https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees/' + employeeId + '.json'
  }

  const response = await fetch(url ,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    }
  );

  if (!response.ok) {
    console.log(employeeData);
  }

  return redirect("/employees");
}
