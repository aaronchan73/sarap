import React from "react";
import { View, Text, Button } from "react-native";
import Item from "./Item";
import styles from "./Styles";

const GroceryList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Grocery List:</Text>
      <Item name="Lettuce" />
      <Item name="Tomato" />
      <Item name="Chicken" />
      <Item name="Rice" />
      <Button
        style={styles.button}
        title="Map"
        onPress={() => navigation.navigate("Map")}
      />
    </View>
  );
};

export default GroceryList;
