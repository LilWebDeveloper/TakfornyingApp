import { redirect } from "react-router-dom";
import Order from "../../interfaces/Order";

export default async function ManipulateOrderAction({ request, params }: any) {
  const method: string = request.method;

  const data = await request.formData();

  console.log(data)

  const orderData: Order = {
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

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    //error
  }

  return redirect("/dashboard/orders");
}
