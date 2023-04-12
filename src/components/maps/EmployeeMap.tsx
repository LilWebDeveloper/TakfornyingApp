import { useMemo, useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from "@react-google-maps/api";
import classes from "../../style/Map.module.css";
import { EmployeeOrdersMap, OrderType } from "../../interfaces/Order";

const EmployeeMap = (employeeAddresses: EmployeeOrdersMap) => {
  const [selectedMarker, setSelectedMarker] = useState<OrderType>();
  const center = useMemo(() => ({ lat: 52, lng: 20 }), []);
  const addresses = employeeAddresses.employeeAddresses.orders;

  return (
    <GoogleMap
      zoom={6}
      center={center}
      mapContainerClassName={classes.mapContainer}
    >
      {addresses.map((data) => (
        <MarkerF
          key={data._id}
          position={{ lat: data.lat, lng: data.lng }}
          onClick={() => {
            setSelectedMarker(data);
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindowF
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
        >
          <h1>{selectedMarker.address}</h1>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default EmployeeMap;
