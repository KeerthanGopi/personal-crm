import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import FloatingButton from "../screens/FloatingButton";
import Color from "../constants/color";
import Text from "../constants/text";

const Stack = createStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: Color.activeTint,
    background: Color.theme,
    text: Text.primary,
    notification: Color.theme,
    card: Color.theme,
  },
};

export default function Header() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={(props) => ({
            headerRight: () => (
              <FontAwesome
                name="circle"
                size={34}
                color="white"
                style={{ paddingRight: "4%", paddingRight: "2%" }}
                onPress={() => props.navigation.navigate("Profile")}
              />
            ),  
            gestureEnabled: true
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={() => ({ headerLeft: () => null, gestureEnabled: true })}
        />
        <Stack.Screen
          name="FloatingAction"
          component={FloatingButton}
          options={(props) => ({ headerLeft: () => null,
          headerRight: () => (
            <FontAwesome
              name="circle"
              size={34}
              color="white"
              style={{ paddingRight: "6%" }}
              onPress={() => props.navigation.navigate("Profile")}
              />
            ),  
            gestureEnabled: true,
            title: 'Add Person'
          })}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
