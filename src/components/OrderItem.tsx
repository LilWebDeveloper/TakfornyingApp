import classes from "../style/OrderItem.module.css";

import { Button, createTheme, ThemeProvider } from "@mui/material";

import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#631200",
    },
  },
});

interface Order {
  order: any;
}

function OrderItem({ order }: Order) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <ThemeProvider theme={theme}>
      <article className={classes.event}>
        <div className={classes.content}>
          <h2>Address: {order.address}</h2>
          <h3>Roof paint: {order.roofPaint}</h3>
          <h3>Roof size: {order.roofSize} square meters</h3>
          <h3>Roof angle: {order.roofAngle} degrees</h3>
          <h3>Description: {order.description}</h3>
        </div>
        <menu className={classes.actions}>
          <Button variant="contained" color="primary">
            <Link to="edit">
              Edit
            </Link>
          </Button>
          <Button
            variant="contained"
            color="primary"
          >
            Delete
          </Button>
        </menu>
      </article>
    </ThemeProvider>
  );
}

export default OrderItem;
