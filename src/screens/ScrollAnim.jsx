import React from "react";
import {View, Text, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const myIcon = <Icon name="facebook" size={50} color="rgba(100,100,200, 1)" />

const ScrollAnim = () =>{
    return(
        <View>
            <Text>Scroll view</Text>
            <Icon.Button name="facebook" styles={styles.btn} size={50} color="red" onPress={()=> console.log('helo')}/>
        </View>
    )
}

export default ScrollAnim;

const styles = StyleSheet.create({
    btn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        width: 200
    }
})