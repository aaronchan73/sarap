import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GroceryList = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.item}>Lettuce</Text>
      <Text style={styles.item}>Chicken</Text>
      <Text style={styles.item}>Rice</Text>
      <Text style={styles.item}>Tomato</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: "white",
    fontSize: 20,
  },
});

export default GroceryList;
