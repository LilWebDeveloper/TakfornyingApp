import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from "../../style/List.module.css";

interface Orders {
  orders: any;
}

const OrdersList = ({ employees }: Orders) => {
  return (
    <div className={classes.orders}>
      <h1>All Employees</h1>
        {employees.map((employee: any) => (
          <Grid key={employee.id} item xs={12} >
            <Paper className={classes.paper} sx={{m: 2, p: 2, display: "flex", flexDirection: "column" }}>
                <Link to={employee.id}>
                  <div className={classes.content}>
                    <h2>{employee.firstName} {employee.secondName} {employee.jobPosition}</h2>
                  </div>
                </Link>
            </Paper>
          </Grid>
        ))}
     
    </div>
  );
};

export default OrdersList;