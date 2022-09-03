import React from "react";
import GroceryList from "./components/GroceryList";
import Splash from "./components/Splash";
import ItemPage from "./components/ItemPage";
import Map from "./components/Map";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GroceryList"
          component={GroceryList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemPage"
          component={ItemPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
