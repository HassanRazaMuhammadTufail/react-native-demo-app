import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default (useLocation = () => {
  const [location, setLocation] = useState();
  getLocation = () => {
    Geolocation.getCurrentPosition(position => {
      let {
        coords: {latitude, longitude},
      } = position;
      setLocation({latitude, longitude});
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  return location;
});
