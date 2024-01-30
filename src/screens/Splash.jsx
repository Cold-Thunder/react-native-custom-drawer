import React, { useEffect } from "react";
import {SafeAreaView, View, Text} from 'react-native'
// import {  } from "react-native-safe-area-context";
import Animated, {useSharedValue, useAnimatedStyle} from "react-native-reanimated";

const Splash =({navigation})=>{

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigation.navigate('Home')
    //     },2000)
    // }, [])
    const opa= useSharedValue(1);

    const fadeOut = useAnimatedStyle(()=>{
        return({
            opacity: opa.value,
        })
    })

    useEffect(()=>{
        setInterval(()=>{
            opa.value -= 0.1;
        }, 200)
        setTimeout(()=>{
            navigation.navigate('Home')
        }, 2000)
    }, [])

    return(
        <Animated.View style={[{flex: 1, backgroundColor: 'red'}, fadeOut]}>
            <Text>Splash</Text>
        </Animated.View>
    )
}

export default Splash;