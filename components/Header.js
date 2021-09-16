import React from 'react';
import { createDrawerNavigator } from '../node_modules/@react-navigation/drawer';
import { NavigationContainer } from '../node_modules/@react-navigation/native';


const Drawer = createDrawerNavigator();

export default function Header() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerType="front"
        initialRouteName="Profile"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
       
      >
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}