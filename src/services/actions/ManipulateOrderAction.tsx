import { redirect } from "react-router-dom";

export default async function ManipulateOrderAction({ request, params }: any) {
    const method = request.method;
  
    const data = await request.formData();
  
    const orderData = {
      address: data.get("address"),
      roofPaint: data.get("roofPaint"),
      roofSize: data.get("roofSize"),
      roofAngle: data.get("roofAngle"),
      description: data.get("description"),
      worker: data.get('worker')
    };
  
    let url =
      "http://localhost:5050/orders/new";
  
      if(method === 'PATCH'){
        const orderId = params.orderId;
        url = "http://localhost:5050/orders/" + orderId + '/edit'
      }
  
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
  
    if (!response.ok) {
      console.log(orderData);
    }
  
    return redirect("/dashboard/orders");
  }