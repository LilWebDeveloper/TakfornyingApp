import { useLoaderData } from "react-router-dom";
import OrderForm from "../../components/orders/OrderForm";

function NewOrderPage() {
  const SelectEmployeesLoader = useLoaderData();

  return (
    <>
      <h1>Add new order</h1>
      <OrderForm method="post" selectEmployees={SelectEmployeesLoader} />
    </>
  );
}

export default NewOrderPage;
