import { redirect, json } from "react-router-dom";

export default async function DeleteOrderAction({ params, request }: any) {
    const orderId = params.orderId;
    const response = await fetch(
      "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders/" +
        orderId +
        ".json", {
          method: request.method,
        }
    );
  
    if (!response.ok) {
      throw json(
        { message: "Could not delete order." },
        { status: 500 }
      );
    }
  
    return redirect('/orders')
  }