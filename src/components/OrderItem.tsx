import classes from "../style/OrderItem.module.css";

import { Button, createTheme, ThemeProvider } from "@mui/material";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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
  function DeleteHandler() {
    // ...
  }

  return (
    <ThemeProvider theme={theme}>
      <h1>Order Details</h1>
      <Grid className={classes.order} item xs={12}>
        <Paper
          className={classes.paper}
          sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}
        >
          <div className={classes.content}>
            <h2>Address: {order.address}</h2>
            <h3>Roof paint: {order.roofPaint}</h3>
            <h3>Roof size: {order.roofSize} square meters</h3>
            <h3>Roof angle: {order.roofAngle} degrees</h3>
            <h3>Description: {order.description}</h3>
          </div>
        </Paper>
      </Grid>
      <menu className={classes.actions}>
        <Button variant="contained" color="primary">
          <Link to="edit">Edit</Link>
        </Button>
        <Button onClick={DeleteHandler} variant="contained" color="primary">
          Delete
        </Button>
      </menu>
    </ThemeProvider>
  );
}

export default OrderItem;
