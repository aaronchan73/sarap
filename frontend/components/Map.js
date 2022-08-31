import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./Styles";
import Geolocation from "react-native-geolocation-service";
import stores from "./Stores";
import MapBottom from "./MapBottom";

const Map = () => {
  const [region, setRegion] = useState({});
  const delta = { latitudeDelta: 0.0922, longitudeDelta: 0.0421 };
  const currMarker = (
    <Marker
      coordinate={{
        latitude: region.latitude,
        longitude: region.longitude,
      }}
      title="Hi!"
      description="You are here."
      pinColor="#00ACB1"
    />
  );

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
    <View style={styles.container}>
      <View style={styles.map_container}>
        <MapView region={region} style={styles.map}>
          {currMarker}
          {stores.map((store) => (
            <Marker
              key={store["longitude"]}
              coordinate={{
                latitude: store["latitude"],
                longitude: store["longitude"],
              }}
              title={store["name"]}
              pinColor="#87E4DB"
            />
          ))}
        </MapView>
      </View>
      <MapBottom />
    </View>
  );
};

export default Map;
