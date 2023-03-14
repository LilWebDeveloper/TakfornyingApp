import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function AddressesMapPage() {
  return (
    <Grid item xs={12}>
      <h1>Orders Addresses </h1>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <h1>API MAP</h1>
      </Paper>
    </Grid>
  );
}

export default AddressesMapPage;