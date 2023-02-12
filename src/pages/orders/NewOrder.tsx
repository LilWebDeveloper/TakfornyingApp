import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import OrderForm from "../../components/OrderForm";

function NewOrderPage() {

  return (
    <>
      <h1>Add new order</h1>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <OrderForm />
        </Paper>
      </Grid>
    </>
  );
}

export default NewOrderPage;
