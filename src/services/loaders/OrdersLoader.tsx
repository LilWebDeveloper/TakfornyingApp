import { getAuthToken } from "../../utils/auth";
import { OrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function OrdersLoader({ request }: any) {
  const token = getAuthToken();
  const searchParams = new URL(request.url).searchParams;
  const p = searchParams.get('p')
  const response = await fetch(
    `${process.env.REACT_APP_FETCH_ADDRESS!}/orders?p=${p}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
    
  if (!response.ok) {
    return json({ message: "Could not fetch orders.", status: 500 });
  } else {
    const resData: OrdersResData = await response.json();
    return resData;
  }
}
