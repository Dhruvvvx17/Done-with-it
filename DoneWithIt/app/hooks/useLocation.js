import { useState, useEffect } from "react";
import * as Location from "expo-location";

// Custom hook function to get users location. Called only once. Can be reused at multiple places to get users location.
const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    //  wrap in try catch if the promise does not return
    try {
      const permissionResult = await Location.requestPermissionsAsync();

      // if location permission is not granted then simply return
      if (!permissionResult.granted) return;

      // else set the coordinates as the state variable
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      // set the state variable
      setLocation({ latitude, longitude });
    } catch (error) {
      // In case the promise does not return or some other error
      console.log(error);
    }
  };

  // using the useEffect hook to call the getLocation function as that is an async function
  // and cannot be called in this hook. The second parameter is [] so that this hook is called only once.
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
