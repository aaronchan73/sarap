import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import splashArt from "../assets/splash_art.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sarap</Text>
      <Text style={styles.caption}>Save money on groceries</Text>
      <Image source={splashArt} style={styles.splash_art} />
      <Button
        style={styles.button}
        title=">"
        onPress={() => navigation.navigate("Map")}
      />
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
  button: {
    color: "white",
  },
});

export default Home;
