import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 40,
    paddingRight: 200,
    fontWeight: "600",
  },
  caption: {
    color: "white",
    fontSize: 20,
    paddingRight: 85,
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
    // ...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  map_bottom: {
    color: "white",
    fontSize: 30,
  },
  map_bottom_container: {
    flexDirection: "row",
    paddingTop: 20,
  },
  add_button: {
    width: 40,
    height: 40,
  },
  input: {
    backgroundColor: "#00ACB1",
    height: 105,
    padding: 20,
    color: "#C1F0C1",
  },
  store_image: {
    width: 400,
    height: 300,
    alignSelf: "center",
  },
});
