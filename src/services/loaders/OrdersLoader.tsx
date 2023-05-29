import { getAuthToken } from "../../utils/auth";
import { OrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function OrdersLoader({ request }: { request: Request }) {
  const token = getAuthToken();
  const searchParams = new URL(request.url).searchParams;
  const p = searchParams.get('p')
  const empId = searchParams.get('empId')
  let url = `${process.env.REACT_APP_FETCH_ADDRESS!}/orders?p=${p}`
  if(empId){
    url = `${process.env.REACT_APP_FETCH_ADDRESS!}/orders?p=${p}&empId=${empId}`
  }
  const response = await fetch(
    url,
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
