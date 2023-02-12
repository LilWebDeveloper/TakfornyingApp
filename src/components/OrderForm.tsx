import {
  Button,
  TextField,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { Form } from "react-router-dom";

import classes from "../style/OrderFrom.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#631200",
    },
  },
});

const currencies = [
  {
    value: "English red",
    label: "English red",
  },
  {
    value: "Black Mat",
    label: "Black Mat",
  },
  {
    value: "Black Shiny",
    label: "Black Shiny",
  },
  {
    value: "Red Mat",
    label: "Red Mat",
  },
];

function OrderForm() {
  return (
    <div className={classes.OrderForm}>
      <ThemeProvider theme={theme}>
        <Form>
          <TextField
            className={classes.inputSize}
            id="address"
            type="text"
            label="Address"
            variant="outlined"
          />
          <br />
          <TextField
            className={classes.inputSize}
            id="roofPaint"
            select
            label="Roof Paint"
          >
            {currencies.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            className={classes.inputSize}
            id="roofSize"
            type="number"
            label="Roof Size"
            variant="outlined"
          />
          <br />
          <TextField
            className={classes.inputSize}
            id="roofAngle"
            type="number"
            label="Roof Angle"
            variant="outlined"
          />
          <br />
          <TextField
            className={classes.inputSize}
            id="description"
            type="text"
            label="Description"
            variant="outlined"
          />
          <br />
          <Button variant="contained" color="primary">
            save
          </Button>
        </Form>
      </ThemeProvider>
    </div>
  );
}

export default OrderForm;
