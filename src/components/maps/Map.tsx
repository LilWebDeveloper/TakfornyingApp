import { useLoadScript } from "@react-google-maps/api";
import ManagerMap from "./ManagerMap";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCf-EcJvHKq6R-r4VnEz_BCSfAIVx7zew4",
  });

  

  if (!isLoaded) return <div>Loading...</div>;

  return <ManagerMap/>;
};

export default Map;
