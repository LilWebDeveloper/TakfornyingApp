import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import OrderForm from "../../components/OrderForm";
import OrdersList from "../../components/OrdersList";
import { useLoaderData } from "react-router-dom";

function NewOrderPage() {

  const orders: any = useLoaderData();

  return (
    <>
      <h1>Add new order</h1>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <OrderForm />
        </Paper>
          <OrdersList orders={orders}/>
      </Grid>
    </>
  );
}

export default NewOrderPage;
