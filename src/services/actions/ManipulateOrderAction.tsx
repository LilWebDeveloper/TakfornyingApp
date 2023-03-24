import { redirect } from "react-router-dom";
import { ManipulateOrderType } from "../../interfaces/ManipulateActions";
import { getAuthToken } from "../../util/auth";


export default async function ManipulateOrderAction({ request, params }: ManipulateOrderType) {
  const method = request.method;

  const data = await request.formData();

  const orderData = {
    address: data.get("address"),
    roofPaint: data.get("roofPaint"),
    roofSize: data.get("roofSize"),
    roofAngle: data.get("roofAngle"),
    description: data.get("description"),
    worker: data.get("worker"),
    createdAt: undefined,
    updatedAt: undefined,
    __v: undefined,
    _id: undefined
  }

  let url = "http://localhost:5050/orders";

  if (method === "PATCH") {
    const orderId = params.orderId;
    url = "http://localhost:5050/orders/" + orderId;
  }

  const token = getAuthToken();

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + token,
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error('Could not send order!');
  }
  return redirect("/dashboard/orders");
}
