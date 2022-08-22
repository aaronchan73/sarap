import React, { useState } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import styles from "./Styles";

const Map = () => {
  const [region] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.map_container}>
      <MapView initialRegion={region} style={styles.map} />
    </View>
  );
};

export default Map;
