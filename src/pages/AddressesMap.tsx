import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import classes from "../style/Map.module.css";
import Map from "../components/maps/Map";
import { useLoadScript } from "@react-google-maps/api";

function AddressesMapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCf-EcJvHKq6R-r4VnEz_BCSfAIVx7zew4",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Grid item xs={12}>
      <h1>Orders Addresses </h1>
      <Paper
        className={classes.paperSize}
        sx={{ p: 2, display: "flex", flexDirection: "column" }}
      >
        <Map />
      </Paper>
    </Grid>
  );
}

export default AddressesMapPage;
