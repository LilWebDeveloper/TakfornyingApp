import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from '../style/Error.module.css'

const LoadingPage = () => {

  return (
    <>
      <Grid item xs={12}>
      <Paper className={classes.paperStyle}>
        <p>Loading...</p>
      </Paper>
    </Grid>
    </>
  );
};

export default LoadingPage;
