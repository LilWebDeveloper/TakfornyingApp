import { redirect } from "react-router-dom";
import { OrderParamsType } from "../../interfaces/ParamsTypes";
import { getAuthToken } from "../../utils/auth";

export default async function DeleteOrderAction({ params }: OrderParamsType) {
  const orderId = params.orderId;
  const token = getAuthToken();
  const response = await fetch(`${process.env.REACT_APP_FETCH_ADDRESS!}/orders/` + orderId, {
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
