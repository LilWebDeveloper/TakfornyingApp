import {
  Button,
  TextField,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { Form } from "react-router-dom";

import classes from "../../style/OrderFrom.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#631200",
    },
  },
});

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
  }
];

function OrderForm({ method, employee }: any) {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Form method="post" className={classes.order_form}>
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
            select
            label="Second Name"
            defaultValue={employee ? employee.secondName : ""}
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
            defaultValue={employee ? employee.roofSize : ""}
          />
          <br />
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="login"
            name="login"
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
            label="Password for employee"
            variant="outlined"
            defaultValue={employee ? employee.password : ""}
          />
          <br />
          <Button type="submit" sx={{ m: 1 }} variant="contained" color="primary">
            save
          </Button>
        </Form>
      </ThemeProvider>
    </div>
  );
}

export default OrderForm;
