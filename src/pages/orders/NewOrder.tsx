import { useLoaderData } from "react-router-dom";
import OrderForm from "../../components/orders/OrderForm";

function NewOrderPage() {
  const SelectEmployeesLoader: any = useLoaderData();

  return (
    <>
      <h1>Add new order</h1>
      <OrderForm method="post" selectEmployees={SelectEmployeesLoader} order={undefined} />
    </>
  );
}

export default NewOrderPage;
