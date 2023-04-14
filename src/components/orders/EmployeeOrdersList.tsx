import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from "../../style/List.module.css";
import { EmployeeOrdersResData, OrderType } from "../../interfaces/Order";
import { employeeOrdersList } from "../../utils/TestsRoles";

const EmployeeOrdersList = ({ employeeOrders }: EmployeeOrdersResData) => {
    const orders = employeeOrders.orders

  return (
    <div className={classes.orders}>
      <h1>All orders</h1>
      {orders.map((data: OrderType) => (
        <Grid key={data._id} item xs={12} role={employeeOrdersList}>
          <Paper
            className={classes.paper}
            sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}
          >
            <Link to={`/dashboard/orders/${data._id}`}>
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

export default EmployeeOrdersList;