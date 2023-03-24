import { useLoaderData } from "react-router-dom";
import OrderForm from "../../components/orders/OrderForm";
import EmployeeType from "../../interfaces/Employee";

function NewOrderPage() {
  const SelectEmployeesLoader = useLoaderData() as EmployeeType;

  return (
    <>
      <h1>Add new order</h1>
      <OrderForm method="post" selectEmployees={SelectEmployeesLoader} />
    </>
  );
}

export default NewOrderPage;
