import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import classes from "../../style/Map.module.css";
import { useRouteLoaderData } from "react-router-dom";

const ManagerMap = () => {
    const employeeOrders: any = useRouteLoaderData('employee-orders-address')
    const orders = employeeOrders.orders
    const addressesEmployee: any = orders.map((data: any) => ({'address': data.address}))

    const center = useMemo(() => ({ lat: 52, lng: 20 }), []);

    const geocode = [{id: 1, let: 50, lng: 25}, {id: 2, let: 49, lng: 15}]
  
    return (
      <GoogleMap
        zoom={6}
        center={center}
        mapContainerClassName={classes.mapContainer}
      >
        
        {geocode.map((data: any) => (
            <MarkerF key={data.id} position={{lat: data.let, lng: data.lng}} />
        ))}
      </GoogleMap>
    );
  };

  export default ManagerMap