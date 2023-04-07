import { useEffect, useMemo, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import classes from "../../style/Map.module.css";
import { useLoaderData } from "react-router-dom";

const ManagerMap = () => {
  const orders: any = useLoaderData();
  const [array, setArray] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const center = useMemo(() => ({ lat: 52, lng: 20 }), []);

  const geocoder = new google.maps.Geocoder();

  const geocodeArray: any = [];

  orders.map((data: any) =>
    geocoder.geocode(
      { address: data.address },
      function (results: any, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          const placeId = results[0].place_id;
          const address = data.address;
          geocodeArray.push({ address, placeId, lat, lng });
        }
      }
    )
  );

  useEffect(() => {
    setArray(geocodeArray);
    setLoading(false);
  }, []);

  console.log(array);
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <GoogleMap
        zoom={6}
        center={center}
        mapContainerClassName={classes.mapContainer}
      >
        {array.map((data: any) => (
          <MarkerF key={data.id} position={{ lat: data.lt, lng: data.lng }} />
        ))}
      </GoogleMap>
    );
  }
};

export default ManagerMap;
