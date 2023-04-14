import { json } from "react-router-dom";
import { OrderResData } from "../../interfaces/Order";
import { OrderParamsType } from "../../interfaces/ParamsTypes";
import { getAuthToken } from "../../util/auth";

export default async function OrderLoader({ params }: OrderParamsType) {
  const id = params.orderId;
  const token = getAuthToken();

  const response = await fetch("https://takfornying.onrender.com/orders/" + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const resData: OrderResData = await response.json();

  if (!response.ok) {
    return json({ message: "Could not fetch order details.", status: 500 });
  } else {
    return resData.order;
  }
}
