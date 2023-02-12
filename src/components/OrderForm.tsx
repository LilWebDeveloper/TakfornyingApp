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

function OrderForm() {
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

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Form className={classes.order_form}>
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="address"
            type="text"
            label="Address"
            variant="outlined"
          />
          <br />
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="roofPaint"
            select
            defaultValue=""
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
            sx={{ m: 1 }}
            className={classes.input_size}
            id="roofSize"
            type="number"
            label="Roof Size"
            variant="outlined"
          />
          <br />
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="roofAngle"
            type="number"
            label="Roof Angle"
            variant="outlined"
          />
          <br />
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="description"
            type="text"
            label="Description"
            variant="outlined"
          />
          <br />
          <Button sx={{ mt: 1 }} variant="contained" color="primary">
            save
          </Button>
        </Form>
      </ThemeProvider>
    </div>
  );
}

export default OrderForm;
