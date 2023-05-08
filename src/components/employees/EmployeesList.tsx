import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { EmployeesResData, EmployeeType } from "../../interfaces/Employee";

import classes from "../../style/List.module.css";
import { employeesList } from "../../utils/TestsRoles";
import { Button, ButtonGroup } from "@mui/material";

const EmployeesList = ({ employees, pagination }: EmployeesResData) => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  
  useEffect(() => {
    if(pagination){
      setPageCount(pagination.pageCount)
    }
  }, [pagination])
  

  function handlePrevious() {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
    navigate(`?p=${page}`)
  }

  function handleNext() {
    setPage((p) => {
      if(p === pageCount) return p;
      return p + 1
    })
    navigate(`?p=${page}`)
  }

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
      <footer className={classes.pagination}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button disabled={page === 1} onClick={handlePrevious}>
            <ArrowBackIosIcon /> Prev
          </Button>
          <Button onClick={handleNext}>
            Next <ArrowForwardIosIcon />
          </Button>
        </ButtonGroup>
      </footer>
    </div>
  );
};

export default EmployeesList;
