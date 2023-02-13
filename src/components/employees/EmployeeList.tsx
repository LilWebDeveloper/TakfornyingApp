import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from "../../style/OrdersList.module.css";

interface Orders {
  orders: any;
}

const OrdersList = ({ orders }: Orders) => {
  return (
    <div className={classes.orders}>
      <h1>All Orders</h1>
        {orders.map((order: any) => (
          <Grid key={order.id} item xs={12} >
            <Paper className={classes.paper} sx={{m: 2, p: 2, display: "flex", flexDirection: "column" }}>
                <Link to={order.id}>
                  <div className={classes.content}>
                    <h2>{order.address}</h2>
                  </div>
                </Link>
            </Paper>
          </Grid>
        ))}
     
    </div>
  );
};

export default OrdersList;