import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from "../../style/List.module.css";

const List = ({ title, dataset }: any) => {
  let check = false;

  if (dataset === "employees") {
    check = true;
  }

  return (
    <div className={classes.orders}>
      <h1>{title}</h1>
      {dataset.map((data: any) => (
        <Grid key={data.id} item xs={12}>
          <Paper
            className={classes.paper}
            sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}
          >
            {!check ? (
              <Link to={`/employees/${data.id}`}>
                <div className={classes.content}>
                  <h2>
                    {data.firstName} {data.secondName}
                  </h2>
                  <h3>{data.jobPosition}</h3>
                </div>
              </Link>
            ) : (
              <Link to={`/orders/${data.id}`}>
                <div className={classes.content}>
                  <h2>{data.address}</h2>
                </div>
              </Link>
            )}
          </Paper>
        </Grid>
      ))}
    </div>
  );
};

export default List;
