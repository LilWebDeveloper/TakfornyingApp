import {
  Button,
  TextField,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { Form, redirect } from "react-router-dom";

import classes from "../../style/From.module.css";

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

function OrderForm({ method, order }: any) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Form method={method} className={classes.order_form}>
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="address"
            name="address"
            type="text"
            label="Address"
            variant="outlined"
            defaultValue={order ? order.address : ""}
          />
          <br />
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="roofPaint"
            name="roofPaint"
            select
            label="Roof Paint"
            defaultValue={order ? order.roofPaint : ""}
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
            name="roofSize"
            type="number"
            label="Roof Size"
            variant="outlined"
            defaultValue={order ? order.roofSize : ""}
          />
          <br />
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="roofAngle"
            name="roofAngle"
            type="number"
            label="Roof Angle"
            variant="outlined"
            defaultValue={order ? order.roofAngle : ""}
          />
          <br />
          <TextField
            sx={{ m: 1 }}
            className={classes.input_size}
            id="description"
            name="description"
            type="text"
            label="Description"
            variant="outlined"
            defaultValue={order ? order.description : ""}
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
      </ThemeProvider>
    </div>
  );
}

export default OrderForm;

export async function action({ request, params }: any) {
  const method = request.method;

  const data = await request.formData();

  const orderData = {
    address: data.get("address"),
    roofPaint: data.get("roofPaint"),
    roofSize: data.get("roofSize"),
    roofAngle: data.get("roofAngle"),
    description: data.get("description"),
  };

  let url =
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders.json";

    if(method === 'PATCH'){
      const orderId = params.orderId;
      url = "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders/" + orderId + '.json'
    }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    console.log(orderData);
  }

  return redirect("/orders");
}
