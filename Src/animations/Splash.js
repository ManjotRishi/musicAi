import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  interpolate,
} from 'react-native-reanimated';

function Splash({ navigation }) {

  const scale = useSharedValue(0.6);
  const textOpacity = useSharedValue(0);

  const bar1 = useSharedValue(10);
  const bar2 = useSharedValue(18);
  const bar3 = useSharedValue(14);
  const bar4 = useSharedValue(20);

  useEffect(() => {

    scale.value = withRepeat(
      withSequence(
        withTiming(1.1, { duration: 700 }),
        withTiming(0.9, { duration: 700 })
      ),
      -1,
      true
    );

    bar1.value = withRepeat(withSequence(withTiming(40, { duration: 300 }), withTiming(12, { duration: 300 })), -1);
    bar2.value = withRepeat(withSequence(withTiming(30, { duration: 400 }), withTiming(15, { duration: 400 })), -1);
    bar3.value = withRepeat(withSequence(withTiming(45, { duration: 350 }), withTiming(10, { duration: 350 })), -1);
    bar4.value = withRepeat(withSequence(withTiming(35, { duration: 420 }), withTiming(14, { duration: 420 })), -1);

    textOpacity.value = withTiming(1, { duration: 1200 });

    const timer = setTimeout(() => {
       navigation.replace("Home");
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  const circleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
      transform: [
        {
          translateY: interpolate(textOpacity.value, [0, 1], [20, 0]),
        },
      ],
    };
  });

  const barStyle = value =>
    useAnimatedStyle(() => ({
      height: value.value,
    }));

  return (
    <View style={styles.container}>

      {/* Animated Music Circle */}
      <Animated.View style={[styles.circle, circleStyle]} />

      {/* Equalizer */}
      <View style={styles.equalizer}>
        <Animated.View style={[styles.bar, barStyle(bar1)]} />
        <Animated.View style={[styles.bar, barStyle(bar2)]} />
        <Animated.View style={[styles.bar, barStyle(bar3)]} />
        <Animated.View style={[styles.bar, barStyle(bar4)]} />
      </View>

      {/* Title */}
      <Animated.View style={textStyle}>
        <Text style={styles.title}>Music Guru</Text>
        <Text style={styles.subtitle}>Modern AI Music Guru API</Text>
      </Animated.View>

    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#040508',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#7c3aed',
    position: 'absolute',
    opacity: 0.15,
  },

  equalizer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 60,
    marginBottom: 40,
  },

  bar: {
    width: 8,
    marginHorizontal: 5,
    backgroundColor: '#8b5cf6',
    borderRadius: 4,
  },

  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#f8fafc',
    letterSpacing: 1,
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 10,
    color: '#d1d5db',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
});