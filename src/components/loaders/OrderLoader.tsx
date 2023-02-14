import { json } from 'react-router-dom'

export default async function OrderLoader({ request, params }: any) {
    const id = params.orderId;
  
    const response = await fetch(
      "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders/" +
        id +
        ".json"
    );
  
    if (!response.ok) {
      throw json(
        { message: "Could not fetch details for selected order." },
        { status: 500 }
      );
    } else {
      const resData = await response.json();
      return resData;
    }
  }