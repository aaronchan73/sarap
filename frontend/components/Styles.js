import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 50,
    marginRight: 175,
    fontWeight: "600",
    top: 375
  },
  caption: {
    color: "white",
    fontSize: 25,
    marginRight: 35,
    top: 380
  },
  background: {
    flex: 1,
    zIndex: -1,
    width: 400,
    height: 500,
    position: 'static'
  },
  splash_art: {
    width: 343,
    height: 367,
    zIndex: 2,
    top: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "#87E4DB",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 20,
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
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "#87E4DB",
    borderRadius: 50,
    marginTop: 30,
    alignSelf: 'center',
    zIndex: 1,
    top: 385
  },
});
