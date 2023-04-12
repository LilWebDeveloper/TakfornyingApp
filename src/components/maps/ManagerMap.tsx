import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import classes from "../../style/Map.module.css";

const ManagerMap = (allAddresses: any) => {
  const center = useMemo(() => ({ lat: 52, lng: 20 }), []);

  const addresses = allAddresses.allAddresses;

  return (
    <GoogleMap
      zoom={6}
      center={center}
      mapContainerClassName={classes.mapContainer}
    >
      {addresses.map((data: any) => (
        <MarkerF
          key={data._id}
          position={{ lat: data.lat, lng: data.lng }}
        />
      ))}
    </GoogleMap>
  );
};

export default ManagerMap;
