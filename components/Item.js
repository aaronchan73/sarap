import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Item = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{name}</Text>
      <Button
        style={styles.button}
        title=">"
        onPress={() => navigation.navigate("ItemPage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: "white",
    fontSize: 30,
  },
  container: {
    backgroundColor: "#00ACB1",
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
});

export default Item;
