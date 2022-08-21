import React from "react";
import { View, StyleSheet } from "react-native";

const ItemPage = () => {
  return <View style={styles.container}></View>;
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

export default ItemPage;
