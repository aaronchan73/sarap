import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./Styles";
import Geolocation from "react-native-geolocation-service";

const Map = () => {
  const [region, setRegion] = useState({});
  const delta = { latitudeDelta: 0.0922, longitudeDelta: 0.0421 };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        console.log({
          latitude: position["coords"]["latitude"],
          longitude: position["coords"]["longitude"],
          ...delta,
        });
        setRegion({
          latitude: position["coords"]["latitude"],
          longitude: position["coords"]["longitude"],
          ...delta,
        });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <View style={styles.map_container}>
      <MapView region={region} style={styles.map}>
        <Marker
          coordinate={{
            latitude: 49.267665596,
            longitude: -123.241999032,
          }}
          title="UBC"
          description="You are here."
          pinColor="#87E4DB"
        />
      </MapView>
    </View>
  );
};

export default Map;
