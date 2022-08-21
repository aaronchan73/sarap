import React from "react";
import GroceryList from "./components/GroceryList";
import Splash from "./components/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GroceryList" component={GroceryList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
