import React from "react";
import { View, Text } from "react-native";

import Tile from "../components/Tile";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 16, fontWeight: "700" }}>Profile Screen</Text>
      <View style={{ width: "80%", height: "60%", paddingVertical: "10%" }}>
        <Tile />
      </View>
    </View>
  );
}
