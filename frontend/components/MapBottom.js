import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Styles";
import add from "../assets/add.png";

const MapBottom = () => {
  return (
    <View style={styles.map_bottom_container}>
      <Text style={styles.map_bottom}>Closest Grocery Stores</Text>
      <TouchableOpacity>
        <Image
          source={add}
          style={styles.add_button}
          onPress={() => console.log("add pressed")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MapBottom;
