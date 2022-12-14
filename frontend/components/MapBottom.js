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

// const PORT = 

const MapBottom = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  return (
    <View style={styles.map_bottom_container}>
      <Modal animationType="slide" visible={show} presentationStyle="formSheet">
        <View style={{ backgroundColor: "#00ACB1" }}>
          <TouchableOpacity
            onPress={() => {
              setShow(false);
              fetch(
                `http://localhost:${PORT}/name/${name}/latitude/${latitude}/longitude/${longitude}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            }}
          >
            <Image source={rightArrow} style={styles.down_arrow} />
          </TouchableOpacity>
          <Text style={styles.modal_title}>Enter a New Store</Text>
          <Text style={{ ...styles.modal_caption, paddingTop: 20 }}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => setName(name)}
          />
          <Text
            style={styles.modal_caption}
          >
            Latitude
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(lat) => setLatitude(lat)}
          />
          <Text
            style={styles.modal_caption}
          >
            Longitude
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(long) => setLongitude(long)}
          />
          <Image source={store} style={styles.store_image} />
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
