import 'react-native-gesture-handler';
import React from "react";
import { View, Text } from 'react-native'

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Post from "../screens/Post";
import Group from "../screens/Group";
import Settings from "../screens/Settings";

import Drawer from './Drawer';

import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Splash from '../screens/Splash';

const Stack = createDrawerNavigator();

const names = [Home, Chat, Post, Group, Settings]
const Tabs = () => {

    return (
            <Stack.Navigator initialRouteName="Splash" 
                drawerContent={(props)=>{
                    return  <Drawer {...props} />  
                }}
            >
                <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="Post" component={Post} />
                <Stack.Screen name="Group" component={Group} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        // </SafeAreaView>
    )
}

export default Tabs;