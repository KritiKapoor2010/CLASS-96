//add profile.js , logout.js ,tabnavigator.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import LogOut from "../screens/LogOut";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name=" Screen1" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

