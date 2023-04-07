import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import classes from '../style/Map.module.css'
import Map from "../components/maps/Map";

function AddressesMapPage() {
  return (
    <Grid item xs={12}>
      <h1>Orders Addresses </h1>
      <Paper className={classes.paperSize} sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Map />
      </Paper>
    </Grid>
  );
}

export default AddressesMapPage;