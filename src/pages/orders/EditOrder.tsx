import { useRouteLoaderData } from "react-router-dom";
import OrderForm from "../../components/orders/OrderForm";

function EditOrderPage() {
  const order: any = useRouteLoaderData('order-detail');

    return <>
      <h1>Edit order</h1>
      <OrderForm order={order}/>
    </>
  }
  
  export default EditOrderPage;