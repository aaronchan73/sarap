import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./Item";

const GroceryList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Grocery List:</Text>
      <Item name="Lettuce"/>
      <Item name="Tomato"/>
      <Item name="Chicken"/>
      <Item name="Rice"/>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#87E4DB",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GroceryList;
