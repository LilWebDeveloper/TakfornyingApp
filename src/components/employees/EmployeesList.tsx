import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { EmployeesResData, EmployeeType } from "../../interfaces/Employee";

import classes from "../../style/List.module.css";
import { employeesList } from "../../utils/TestsRoles";
import { Pagination, Stack } from "@mui/material";
import capitalizeFirst from "../../utils/CapitalizeFirst";
import EmployeeSearchBar from "../searchBar/EmployeeSearchBar";

const EmployeesList = ({ employees, pagination }: EmployeesResData) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (pagination) {
      setPageCount(+pagination.pageCount);
    }
  }, [pagination]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`?p=${value}`);
  };

  return (
    <div className={classes.orders}>
      <h1>All Employees</h1>
      <header className={classes.header}>
        <EmployeeSearchBar />
      </header>
      {employees.map((data: EmployeeType) => (
        <Grid key={data._id} item xs={12} role={employeesList}>
          <Paper
            className={classes.paper}
            sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}
          >
            <Link to={`/dashboard/employees/${data._id}?p=1`}>
              <div className={classes.content}>
                <h2>
                  {capitalizeFirst(data.firstName)} {capitalizeFirst(data.secondName)}
                </h2>
                <h3>{capitalizeFirst(data.jobPosition)}</h3>
              </div>
            </Link>
          </Paper>
        </Grid>
      ))}
      <footer className={classes.pagination}>
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </footer>
    </div>
  );
};

export default EmployeesList;
