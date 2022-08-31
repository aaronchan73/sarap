import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 40,
    paddingRight: 200,
  },
  caption: {
    color: "white",
    fontSize: 20,
    paddingRight: 80,
  },
  background: {},
  splash_art: {
    width: 343,
    height: 367,
    top: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#87E4DB",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 50,
    height: 50,
  },
  item: {
    color: "white",
    fontSize: 30,
  },
  item_container: {
    backgroundColor: "#00ACB1",
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  map_container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
