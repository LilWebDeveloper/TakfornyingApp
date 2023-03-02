export default async function OrdersLoader() {
    const response = await fetch(
      "http://localhost:5050/orders/"
    );
  
    if (!response.ok) {
     
    } else {
      const resData = await response.json();
  
      const loadedOrders: any[] = [];
  
      for (const key in resData) {
        loadedOrders.push({
          id: key,
          address: resData[key].address,
          roofPaint: resData[key].roofPaint,
          roofSize: resData[key].roofSize,
          roofAngle: resData[key].roofAngle,
          description: resData[key].description,
        });
      }
  
      return resData.orders;
    }
  }