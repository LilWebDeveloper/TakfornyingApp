import { useSelector } from "react-redux";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { StateType } from "../../interfaces/StateTypes";
import EmployeeMap from "./EmployeeMap";
import ManagerMap from "./ManagerMap";

const Map = () => {
  const geocoder = new google.maps.Geocoder();

  //all Addresses
  const orders: any = useLoaderData();
  const allAddresses: any = [];
  orders.map((data: any) =>
    geocoder.geocode(
      { address: data.address },
      function (results: any, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          const placeId = results[0].place_id;
          const address = data.address;
          allAddresses.push({ address, placeId, lat, lng });
        }
      }
    )
  );

  //Employee addresses
  const employeeOrders: any = useRouteLoaderData("employee-orders-address");
  const employeeAddresses: any = [];
  employeeOrders.orders.map((data: any) =>
    geocoder.geocode(
      { address: data.address },
      function (results: any, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          const placeId = results[0].place_id;
          const address = data.address;
          employeeAddresses.push({ address, placeId, lat, lng });
        }
      }
    )
  );

  const role = useSelector((state: StateType) => state.auth.role);
  
  if(role === 'Employee'){
    return <EmployeeMap employeeAddresses={employeeAddresses}/>
  } else return <ManagerMap allAddresses={allAddresses} />;
};

export default Map;
