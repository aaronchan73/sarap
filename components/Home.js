import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>My Grocery List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 40,
  },
});

export default Home;
