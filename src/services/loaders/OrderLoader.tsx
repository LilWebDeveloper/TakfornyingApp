import { json } from "react-router-dom";

export default async function OrderLoader({ request, params }: any) {
  const id = params.orderId;

  const response = await fetch("http://localhost:5050/orders/" + id);
  const resData = await response.json();

console.log(resData)
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected order." },
      { status: 500 }
    );
  } else {
    
    return resData.order;
  }
}
