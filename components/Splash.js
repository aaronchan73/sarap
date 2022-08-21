import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import splashArt from "../assets/splash_art.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery</Text>
      <Text style={styles.caption}>Save money on groceries</Text>
      <Image source={splashArt} style={styles.splash_art} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 40,
  },
  caption: {
    color: "white",
    fontSize: 20,
  },
  splash_art: {
    width: 343,
    height: 367,
    top: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#87E4DB",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
