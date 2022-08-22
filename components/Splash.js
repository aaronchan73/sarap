import React from "react";
import { View, Text, Image, Button } from "react-native";
import splashArt from "../assets/splash_art.png";
import styles from "./Styles";

const Home = ({ navigation }) => {
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
    </View>
  );
};

export default Home;
