import { useRouteLoaderData, useLoaderData, json, redirect } from "react-router-dom";
import OrderItem from "../../components/orders/OrderItem";
import OrdersList from "../../components/orders/OrdersList";

function OrderDetailPage() {
  const orders: any = useLoaderData();
  const order: any = useRouteLoaderData("order-detail");

  return (
    <>
      <OrderItem order={order} />;
      <OrdersList orders={orders} />
    </>
  );
}

export default OrderDetailPage;

interface LoaderDetail {
  request: any;
  params: any;
}

export async function loader({ request, params }: LoaderDetail) {
  const id = params.orderId;

  const response = await fetch(
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders/" +
      id +
      ".json"
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected order." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function action({ params, request }: any) {
  const orderId = params.orderId;
  const response = await fetch(
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders/" +
      orderId +
      ".json", {
        method: request.method,
      }
  );

  if (!response.ok) {
    throw json(
      { message: "Could not delete order." },
      { status: 500 }
    );
  }

  return redirect('/orders')
}
