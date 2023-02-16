import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useLoaderData } from "react-router-dom";
import OrderForm from "../../components/orders/OrderForm";

function NewOrderPage() {
  const SelectEmployeesLoader: any = useLoaderData();

  return (
    <>
      <h1>Add new order</h1>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <OrderForm method="post" selectEmployees={SelectEmployeesLoader} />
        </Paper>
      </Grid>
    </>
  );
}

export default NewOrderPage;
