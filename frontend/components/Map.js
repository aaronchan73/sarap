import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./Styles";
import Geolocation from "react-native-geolocation-service";
import MapBottom from "./MapBottom";

// const PORT = 

const Map = () => {
  const [region, setRegion] = useState({});
  const [stores, setStores] = useState([]);
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
    fetch(`http://localhost:${PORT}/stores`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      try {
        const jsonRes = await res.json();
        console.log("JSON RES");
        console.log(jsonRes);

        setStores(jsonRes);
      } catch (err) {
        console.log(err);
      }
    });
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
