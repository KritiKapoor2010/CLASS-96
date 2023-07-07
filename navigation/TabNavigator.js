//add createpost.js,donation.js,postscreen,js
import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Donation from "../screens/Donation";

import CreatePost from "../screens/CreatePost";

import Post from "../screens/Post" ;

const Tab = createMaterialBottomTabaNavigator()
const BottomTabNavigator = ()=>{
    return (
        <Tab.Navigator labeled={false}
        barStyle={styles.bottomTabStyle} 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "postscreen") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Createpost") {
                iconName = focused ? "duplicate" : "duplicate-outline";
              }
              else if (route.name === "donation") {
                iconName = focused ? "color-wand" : "color-wand-outline";
              }
              return (
                <Ionicons
                  name={iconName}
                  size={RFValue(25)}
                  color={color}
                  style={styles.icons}
                />
              );
            }
          })}
          activeColor={"#ee8249"}
          inactiveColor={"gray"}
        >
          <Tab.Screen name="postscreen" component={Post} options={{headerShown:false}}/>
          <Tab.Screen name="Create Post" component={CreatePost} options={{headerShown:false}}/>
          <Tab.Screen name="Donation" component={Donation} options={{headerShown:false}}/>
        </Tab.Navigator>
      );
        
        
        
        
        

      
}

const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });
  
  export default BottomTabNavigator;

//intial route is postscreen 



