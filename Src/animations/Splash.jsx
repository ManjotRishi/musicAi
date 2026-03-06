
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { NavigatingScreens } from "../utils/constant";

function Splash() {
    const navigation = useNavigation();

    const wave1 = useSharedValue(0);
    const wave2 = useSharedValue(0);
    const logoOpacity = useSharedValue(0);
    const textOpacity = useSharedValue(0);

    useEffect(() => {
        wave1.value = withRepeat(
            withTiming(1, { duration: 2000, easing: Easing.out(Easing.ease) }),
            -1,
            false
        );

        wave2.value = withRepeat(
            withTiming(1, { duration: 2000, easing: Easing.out(Easing.ease) }),
            -1,
            false
        );

        logoOpacity.value = withTiming(1, { duration: 1200 });

        textOpacity.value = withTiming(1, { duration: 1800 });

        const timer = setTimeout(() => {
            navigation.navigate(NavigatingScreens?.Home);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    const wave1Style = useAnimatedStyle(() => {
        return {
            opacity: 1 - wave1.value,
            transform: [{ scale: 1 + wave1.value * 1.6 }],
        };
    });

    const wave2Style = useAnimatedStyle(() => {
        return {
            opacity: 1 - wave2.value,
            transform: [{ scale: 1 + wave2.value * 1.2 }],
        };
    });

    const logoStyle = useAnimatedStyle(() => ({
        opacity: logoOpacity.value,
    }));

    const textStyle = useAnimatedStyle(() => ({
        opacity: textOpacity.value,
    }));

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.wave, wave1Style]} />
            <Animated.View style={[styles.wave, wave2Style]} />

            <Animated.View style={[styles.logoContainer, logoStyle]}>
                <View style={styles.logoCircle} />
            </Animated.View>

            <Animated.View style={textStyle}>
                <Text style={styles.title}>MUSIC AI</Text>
                <Text style={styles.subtitle}>Feel the rhythm. Create your sound.</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#080912",
        alignItems: "center",
        justifyContent: "center",
    },

    wave: {
        position: "absolute",
        width: 220,
        height: 220,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: "#38bdf8",
    },

    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#1b1f36",
        alignItems: "center",
        justifyContent: "center",
    },

    logoCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ff5e5b",
    },

    title: {
        marginTop: 30,
        fontSize: 34,
        fontWeight: "800",
        color: "#fff",
        letterSpacing: 2,
        textAlign: "center",
    },

    subtitle: {
        marginTop: 8,
        fontSize: 14,
        color: "#cbd5e1",
        textAlign: "center",
    },
});

export default Splash;
