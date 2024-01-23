import { useMemo, useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from "@react-google-maps/api";
import classes from "../../style/Map.module.css";
import { AllAddressesMap, OrderType } from "../../interfaces/Order";
import capitalizeFirst from "../../utils/CapitalizeFirst";

const ManagerMap = (allAddresses: AllAddressesMap) => {
  const [selectedMarker, setSelectedMarker] = useState<OrderType>();
  const center = useMemo(() => ({ lat: 52, lng: 20 }), []);
  const addresses = allAddresses.allAddresses;

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
            setSelectedMarker(data)
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindowF
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          onCloseClick={() => {
            setSelectedMarker(undefined)
          }}
        >
          <>
          <h1>{capitalizeFirst("Worker: " + selectedMarker.worker.firstName)}</h1>
          <h2>{capitalizeFirst("Address: " + selectedMarker.address)}</h2>
          </>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default ManagerMap;
