import "react-native-gesture-handler"
import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

const Anim = ({ navigation }) => {
    const press = useSharedValue(false);
    const opc = useSharedValue(1);
    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);
    const scale = useSharedValue(1)

    const pan = Gesture.Pan()
        .onBegin((e) => {
            press.value = true
        })
        .onChange((e, context) => {
            scale.value = withSpring(1.4)
            offsetX.value = withSpring(e.translationX);
            offsetY.value = withSpring(e.translationY);
        })
        .onFinalize((e) => {
            press.value = false
            offsetX.value = withSpring(0);
            offsetY.value = withSpring(0);
        })

    const animate = useAnimatedStyle(() => {
        return ({
            backgroundColor: withTiming(press.value ? "orange" : "red", 300),
            borderRadius: withTiming(press.value ? 40 : 0),
            transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }, { scale: scale.value }]
        })
    }, [])

    return (
        <GestureHandlerRootView>
            <GestureDetector gesture={pan}>
                <Animated.View style={[styles.anim, animate]} />
            </GestureDetector>
            <View>
                <Button title="Scroll Anim" onPress={() => navigation.navigate("ScrollAnim")} />
            </View>
        </GestureHandlerRootView>
    )
}
export default Anim

const styles = StyleSheet.create({
    anim: {
        height: 80,
        width: 80,
        backgroundColor: 'red',
        elevation: 3
    }
})



