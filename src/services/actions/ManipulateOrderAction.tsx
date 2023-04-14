import { redirect } from "react-router-dom";
import { ManipulateOrderType } from "../../interfaces/ManipulateActions";
import { getAuthToken } from "../../utils/auth";
import CoordinateType from "../../interfaces/CoordinateType";



export default async function ManipulateOrderAction({
  request,
  params,
}: ManipulateOrderType) {
  const method = request.method;

  const data = await request.formData();

  const address = data.get("address")?.toString();
  const geocoder = new google.maps.Geocoder();

  let coordinate: CoordinateType = {
    lat: null,
    lng: null
  };

  try {
    await geocoder.geocode(
      { address: address },
      function (results, status) {
        if (status === google.maps.GeocoderStatus.OK && results && results.length > 0) {
          const lat: number = results[0].geometry.location.lat();
          const lng: number = results[0].geometry.location.lng();
          coordinate.lat = lat;
          coordinate.lng = lng;
        }
      }
    );
  } catch {}

  const orderData = {
    address: data.get("address"),
    roofPaint: data.get("roofPaint"),
    roofSize: data.get("roofSize"),
    roofAngle: data.get("roofAngle"),
    description: data.get("description"),
    worker: data.get("worker"),
    lat: coordinate.lat,
    lng: coordinate.lng,
    createdAt: undefined,
    updatedAt: undefined,
    __v: undefined,
    _id: undefined,
  };

  let url = "https://takfornying.onrender.com/orders";

  if (method === "PATCH") {
    const orderId = params.orderId;
    url = "https://takfornying.onrender.com/orders/" + orderId;
  }

  const token = getAuthToken();

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Could not send order!");
  }
  return redirect("/dashboard/orders");
}
