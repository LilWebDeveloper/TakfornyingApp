import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from "../../style/List.module.css";

const OrdersList = ({ orders }: any) => {
  return (
    <div className={classes.orders}>
      <h1>All orders</h1>
      {orders.map((data: any) => (
        <Grid key={data.id} item xs={12}>
          <Paper
            className={classes.paper}
            sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}
          >
            <Link to={`/dashboard/orders/${data.id}`}>
              <div className={classes.content}>
                <h2>{data.address}</h2>
              </div>
            </Link>
          </Paper>
        </Grid>
      ))}
    </div>
  );
};

export default OrdersList;
