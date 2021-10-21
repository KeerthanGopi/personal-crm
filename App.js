import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View } from 'react-native';

import Header from "./components/Header";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <StatusBar style="light"/>
    </View>
  );
}
