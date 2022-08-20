import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import GroceryList from './components/GroceryList';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <GroceryList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87E4DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
