import { OrderResData } from "../../interfaces/Order";
import { getAuthToken } from "../../util/auth";

export default async function OrderLoader({ params }: any) {
  const id: string = params.orderId;
  const token = getAuthToken();

  const response = await fetch("http://localhost:5050/orders/" + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const resData: OrderResData = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch order!');
  } else {
    return resData.order;
  }
}
