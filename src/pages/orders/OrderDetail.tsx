import { useRouteLoaderData } from "react-router-dom";
import OrderItem from "../../components/OrderItem";

function OrderDetailPage() {
 const order: any = useRouteLoaderData('order-detail');

  return <OrderItem order={order} />;
}

export default OrderDetailPage;

interface LoaderDetail{
    request: any,
    params: any
}

export async function loader({request, params}: LoaderDetail) {
    const id = params.orderId

    const response = await fetch(
      "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders/" + id + ".json"
    );
  
    if (!response.ok) {
      return { isError: true, message: "Could not fetch orders." };
    } else {
      const resData = await response.json();
      return resData;
    }
  }