import React, { useEffect } from "react";
import { View, Text, Image, Button } from "react-native";
import splashArt from "../assets/splash_art.png";
import styles from "./Styles";
import Geolocation from "react-native-geolocation-service";
import splashBackground from "../assets/splash_background.png";

const Home = ({ navigation }) => {
  useEffect(() => {
    Geolocation.requestAuthorization("whenInUse");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sarap</Text>
      <Text style={styles.caption}>Save money on groceries</Text>
      <Image source={splashArt} style={styles.splash_art} />
      <Button
        style={styles.button}
        title=">"
        onPress={() => navigation.navigate("GroceryList")}
      />
      {/* <Image source={splashBackground} style={styles.background}/> */}
    </View>
  );
};

export default Home;
