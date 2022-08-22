import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  const [region] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView initialRegion={region} style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
