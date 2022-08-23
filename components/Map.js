import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./Styles";

const Map = () => {
  const [region] = useState({
    latitude: 49.267665596,
    longitude: -123.241999032,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.map_container}>
      <MapView initialRegion={region} style={styles.map}>
        <Marker
          coordinate={{
            latitude: 49.267665596,
            longitude: -123.241999032,
          }}
          title="UBC"
          description="You are here."
        />
      </MapView>
    </View>
  );
};

export default Map;
