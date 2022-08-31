import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, Image, Button } from "react-native";
import splashArt from "../assets/splash_art.png";
import styles from "./Styles";
import Geolocation from "react-native-geolocation-service";
import splashBackground from "../assets/splash_background.png";
import rightArrow from "../assets/keyboard_arrow_right.png";

const Home = ({ navigation }) => {
  useEffect(() => {
    Geolocation.requestAuthorization("whenInUse");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sarap</Text>
      <Text style={styles.caption}>Save money on groceries</Text>
      <Image source={splashArt} style={styles.splash_art} />
      <TouchableOpacity onPress={() => navigation.navigate("Map")}>
        <Image source={rightArrow} style={styles.button} />
      </TouchableOpacity>
      {/* <Image source={splashBackground} style={styles.background}/> */}
    </View>
  );
};

export default Home;
