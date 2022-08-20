import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./components/Splash";

export default function App() {
  return (
    <View style={styles.container}>
      <Splash />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87E4DB",
    alignItems: "center",
    justifyContent: "center",
  },
});
