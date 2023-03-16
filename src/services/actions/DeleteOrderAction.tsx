import { redirect } from "react-router-dom";
import { getAuthToken } from "../../util/auth";

export default async function DeleteOrderAction({ params, request }: any) {
  const orderId = params.orderId;
  const token = getAuthToken();
  const response = await fetch("http://localhost:5050/orders/" + orderId, {
    method: "DELETE",
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  if (!response.ok) {
    throw new Error('Could not delete order!');
  }

  return redirect("/dashboard/orders");
}
