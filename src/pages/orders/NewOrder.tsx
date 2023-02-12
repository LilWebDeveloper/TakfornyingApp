import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import OrderForm from "../../components/OrderForm";
import { redirect } from "react-router-dom";

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

export async function action({ request, params }: any) {
  const data = await request.formData();

  const orderData = {
    address: data.get("address"),
    roofPaint: data.get("roofPaint"),
    roofSize: data.get("roofSize"),
    roofAngle: data.get("roofAngle"),
    description: data.get("description"),
  };

  const response = await fetch(
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    }
  );

  if (!response.ok) {
    console.log(orderData);
  }

  return redirect("/orders");
}
