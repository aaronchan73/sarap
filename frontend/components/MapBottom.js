import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import styles from "./Styles";
import add from "../assets/add.png";
import rightArrow from "../assets/keyboard_arrow_right.png";
import store from "../assets/store.png";

const MapBottom = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.map_bottom_container}>
      <Modal animationType="slide" visible={show} presentationStyle="formSheet">
        <View style={{ backgroundColor: "#00ACB1" }}>
          <TouchableOpacity onPress={() => setShow(false)}>
            <Image
              source={rightArrow}
              style={{
                ...styles.button,
                transform: [{ rotate: "90deg" }],
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
          <Text style={{ ...styles.title, paddingLeft: 20, fontSize: 25}}>
            Enter a New Store
          </Text>
          <Text style={{ ...styles.caption, paddingLeft: 20 }}>Name</Text>
          <TextInput
            style={{ backgroundColor: "#00ACB1", height: 105, padding: 20 }}
          />
          <Text style={{ ...styles.caption, paddingLeft: 20 }}>Latitude</Text>
          <TextInput
            style={{ backgroundColor: "#00ACB1", height: 105, padding: 20 }}
          />
          <Text style={{ ...styles.caption, paddingLeft: 20 }}>Longitude</Text>
          <TextInput
            style={{ backgroundColor: "#00ACB1", height: 105, padding: 20 }}
          />
          <Image
            source={store}
            style={{ width: 400, height: 300, alignSelf: "center" }}
          />
        </View>
      </Modal>
      <Text style={styles.map_bottom}>Closest Grocery Stores</Text>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Image source={add} style={styles.add_button} />
      </TouchableOpacity>
    </View>
  );
};

export default MapBottom;
