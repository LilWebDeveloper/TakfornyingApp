import { redirect, json } from "react-router-dom";

export default async function DeleteOrderAction({ params, request }: any) {
  const orderId = params.orderId;
  const response = await fetch("http://localhost:5050/orders/" + orderId, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "Could not delete order." }, { status: 500 });
  }

  return redirect("/dashboard/orders");
}
