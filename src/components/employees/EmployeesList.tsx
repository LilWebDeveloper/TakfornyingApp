import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from "../../style/List.module.css";

const EmployeesList = ({ employees }: any) => {
  return (
    <div className={classes.orders}>
      <h1>All Employees</h1>
      {employees.map((data: any) => (
        <Grid key={data._id} item xs={12}>
          <Paper
            className={classes.paper}
            sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}
          >
            <Link to={`/dashboard/employees/${data._id}`}>
              <div className={classes.content}>
                <h2>
                  {data.firstName} {data.secondName}
                </h2>
                <h3>{data.jobPosition}</h3>
              </div>
            </Link>
          </Paper>
        </Grid>
      ))}
    </div>
  );
};

export default EmployeesList;
