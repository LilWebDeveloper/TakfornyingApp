import { redirect, json } from "react-router-dom";
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
    throw json({ message: "Could not delete order." }, { status: 500 });
  }

  return redirect("/dashboard/orders");
}
