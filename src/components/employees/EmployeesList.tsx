import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { EmployeesResData, EmployeeType } from "../../interfaces/Employee";

import classes from "../../style/List.module.css";
import { employeesList } from "../../utils/TestsRoles";

const EmployeesList = ({ employees }: EmployeesResData) => {
  return (
    <div className={classes.orders}>
      <h1>All Employees</h1>
      {employees.map((data: EmployeeType) => (
        <Grid key={data._id} item xs={12} role={employeesList}>
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
