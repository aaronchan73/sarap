import React from "react";
import { View, Text, Button } from "react-native";

const Item = ({ name }) => {
  return (
    <View style={styles.item_container}>
      <Text style={styles.item}>{name}</Text>
      <Button
        style={styles.button}
        title=">"
        onPress={() => navigation.navigate("ItemPage")}
      />
    </View>
  );
};

export default Item;
