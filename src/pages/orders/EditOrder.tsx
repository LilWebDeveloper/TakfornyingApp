import { useRouteLoaderData } from "react-router-dom";
import OrderForm from "../../components/orders/OrderForm";
import { EmployeeType } from "../../interfaces/Employee";
import OrderType from "../../interfaces/Order";

function EditOrderPage() {
  const order = useRouteLoaderData("order-detail") as OrderType;
  const selectEmployee = useRouteLoaderData("select-employee-loader") as EmployeeType[];

  return (
    <>
      <h1>Edit order</h1>
      <OrderForm method="patch" order={order} selectEmployees={selectEmployee} />
    </>
  );
}

export default EditOrderPage;
