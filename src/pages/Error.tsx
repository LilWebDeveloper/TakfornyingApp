import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from '../style/Error.module.css'

const ErrorContent = () => {

  return (
    <>
      <Grid item xs={12}>
      <h1>An error occurred!</h1>
      <Paper className={classes.paperStyle}>
        <p>Could not fetch data or page</p>
      </Paper>
    </Grid>
    </>
  );
};

export default ErrorContent;
