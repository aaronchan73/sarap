import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Item = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Item;
