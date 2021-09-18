import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Octicons } from '@expo/vector-icons';
import { NavigationAction } from "@react-navigation/routers";

import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import Color from './constants/color'
import Text from './constants/text'
import { Button, View } from "react-native";

const Drawer = createDrawerNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: Color.activeTint,
    background: Color.theme,
    text: Text.primary,
    notification: Color.theme,
    card: Color.theme,
    border: 'white',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        drawerType="front"
        backBehavior="history"
        initialRouteName='Home'
        screenOptions={ (props) => ({
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
          headerLeft: () => <Octicons name="three-bars" size={24} color="white" style={{paddingLeft: '4%', paddingRight: '2%'}} onPress={() => props.navigation.toggleDrawer()} />
        })}
      >
        
        <Drawer.Screen  name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
      <StatusBar style="light"/>
    </NavigationContainer>
  );
}
