import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native'

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
// import Home from "../screens/Home";

const iconColor = 'rgba(255,255, 255, 1)'
import Icon from 'react-native-vector-icons/FontAwesome'
import SIcon from 'react-native-vector-icons/MaterialIcons'

const homeIc = <Icon name="home" size={30} color={iconColor} />
const chat = <Icon name="wechat" size={30} color={iconColor} />
const post = <Icon name="plus-square-o" size={30} color={iconColor} style={{ marginTop: -2 }} />
const group = <Icon name="group" size={30} color={iconColor} />
const settings = <SIcon name="settings" size={30} color={iconColor} />
const lock = <Icon name="lock" size={30} color={iconColor} />

const nameList = [
    { name: "Home", icon: homeIc, },
    { name: "Chat", icon: chat, },
    { name: "Post", icon: post, },
    { name: "Group", icon: group, },
    { name: "Settings", icon: settings, }];

const Drawer = ({ navigation }) => {
    return (
        <View style={styles.drawerCont}>
            <View style={[styles.center, styles.profileSec]}>
                <View style={[styles.center, styles.proHead]}>
                    <View style={[styles.center, styles.profilePic]}>
                        <Image source={require('../assets/hemal.jpeg')} style={styles.profImg} />
                    </View>
                    <View style={styles.proDetails}>
                        <View style={styles.nameSec}>
                            <Text style={styles.nameText}>Md.Hemal</Text>
                            <Text style={styles.userName}>@mdhemal2024</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.moreDetails}>
                    <Text style={styles.moreText}>Followers: 105</Text>
                    <Text style={styles.moreText}>Following: 105</Text>
                </View>
            </View>
            <View style={[styles.navBtns]}>
                {
                    nameList.map((item) => (
                        <TouchableOpacity style={styles.navbarBtn} onPress={() => navigation.navigate(`${item.name}`)} key={item.name}>
                            <View style={styles.icon}>{item.icon}</View>
                            <Text style={styles.navBtnTxt}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={[styles.center, styles.drawerFooter]}>
                <TouchableOpacity style={[styles.center, styles.logoutBtn]} onPress={()=>{console.log('log out')}}>
                    <View style={styles.logIcon}>{lock}</View>
                    <Text style={styles.logtext}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Drawer;

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerCont: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "rgba(200,200,255, 1)"
    },
    profileSec: {
        flex: 0.3,
        width: "100%",
        backgroundColor: 'purple',
        elevation: 3
    },
    proHead: {
        // flex: 0.7,
        flexDirection: 'row',
        width: "100%",
    },
    moreDetails: {
        // flex: 0.3,
        paddingTop: 20,
        paddingLeft: 20,
        width: "100%",
        // backgroundColor: 'red'
    },
    moreText: {
        color: 'white',
        fontSize: 18
    },
    profilePic:{
        width: "40%"
    },
    proDetails: {
        width: "60%",
        // backgroundColor: 'red'
    }, 
    nameText: {
        fontSize: 23,
        color: "white",
        fontWeight: "bold"
    }, 
    userName: {
        fontSize: 18,
        color: 'white'
    },
    profImg: {
        height: 90,
        width: 90,
        borderRadius: 45
    },
    navBtns: {
        flex: 0.6,
        paddingTop: 30,
    },

    navbarBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'purple',
        marginVertical: 5,
        height: 50,
        width: "95%",
        borderRadius: 8,
        elevation: 3
    },
    icon: {
        width: "15%"
    },
    navBtnTxt: {
        paddingLeft: 5,
        width: "70%",
        fontSize: 22,
        color: "white",
    },
    drawerFooter: {
        flex: 0.1,
        width: '100%',
        // backgroundColor: 'yellow'
    },
    logoutBtn: {
        flexDirection: 'row',
        backgroundColor: 'purple',
        height: 50,
        width: "85%",
        borderRadius: 10,
        elevation: 3
    },
    logtext: {
        width: "70%",
        color: 'white',
        fontSize: 22,
        paddingLeft: 10,
    }

})