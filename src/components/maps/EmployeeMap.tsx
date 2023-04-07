import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import classes from "../../style/Map.module.css";

const EmployeeMap = (employeeAddresses: any) => {
    const center = useMemo(() => ({ lat: 52, lng: 20 }), []);
    
    return (
      <GoogleMap
        zoom={6}
        center={center}
        mapContainerClassName={classes.mapContainer}
      >
        
        {employeeAddresses.employeeAddresses.map((data: any) => (
            <MarkerF key={data.placeId} position={{lat: data.lat, lng: data.lng}} />
        ))}
      </GoogleMap>
    );
  };

  export default EmployeeMap