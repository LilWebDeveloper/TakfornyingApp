import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import classes from "../style/Map.module.css";
import Map from "../components/maps/Map";
import { useLoadScript } from "@react-google-maps/api";
import LoadingPage from "./Loading";

function AddressesMapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  if (!isLoaded) return <LoadingPage/>;
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
