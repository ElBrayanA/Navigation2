import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";

import Ionicons from '@expo/vector-icons/Ionicons';


const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator initialRouteName= "Home Screen">
            <HomeStackNavigator.Screen
            name="Home Screen"
            component={HomeScreen}/>  
            <HomeStackNavigator.Screen
            name="Stack"
            component={StackScreen}/>
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor:'blue'
        }}
        >
            <Tab.Screen name= "Home" component={MyStack}
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(<Ionicons name="home" size={30} color="blue" />),
                tabBarBadge:10,
                headerShown:false,
            }}
            />
            <Tab.Screen name="Setting" component={SettingScreen}
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(<Ionicons name="settings" size={30} color="blue" />),
                tabBarBadge:10,
            }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}