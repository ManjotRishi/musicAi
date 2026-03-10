import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function CustomButton({
  btnText = 'Swar Riyaz',
  subText,
  onPress,
  disabled = false,
  width = 290,
  height = 72,
  textColor = '#ffffff',
  textSize = 20,
  gradientColors = ['#C85CFF', '#4A6CFF'],
  style,
  textStyle,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.pressable,
        {
          width,
          height,
          opacity: disabled ? 0.55 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
        style,
      ]}
    >
      <View style={styles.shell}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientFill}
        />

        <View style={styles.contentRow}>
          <View style={styles.iconCircle}>
            <View style={styles.harmoniumBody}>
              <View style={styles.harmoniumTop} />
              <View style={styles.keyRow}>
                <View style={[styles.key, { backgroundColor: '#ff5f9a' }]} />
                <View style={[styles.key, { backgroundColor: '#ffaf45' }]} />
                <View style={[styles.key, { backgroundColor: '#ffe45c' }]} />
                <View style={[styles.key, { backgroundColor: '#62e884' }]} />
                <View style={[styles.key, { backgroundColor: '#57b8ff' }]} />
              </View>
              <View style={styles.harmoniumBottom} />
            </View>
            <View style={styles.bellow} />
            <View style={styles.knob} />
          </View>

          <View style={styles.textWrap}>
            <Text numberOfLines={1} style={[styles.label, { color: textColor, fontSize: textSize }, textStyle]}>
              {btnText}
            </Text>
            {!!subText && (
              <Text numberOfLines={1} style={styles.subLabel}>
                {subText}
              </Text>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignSelf: 'center',
  },
  shell: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#2e2f73',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.24,
    shadowRadius: 10,
    elevation: 8,
  },
  gradientFill: {
    ...StyleSheet.absoluteFillObject,
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 20,
  },
  textWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  subLabel: {
    marginTop: 1,
    color: 'rgba(255, 255, 255, 0.84)',
    fontSize: 11,
    letterSpacing: 0.3,
  },
  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  harmoniumBody: {
    width: 31,
    height: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#f6f2ff',
    backgroundColor: '#5c267e',
    overflow: 'hidden',
  },
  harmoniumTop: {
    height: 4,
    backgroundColor: '#8b44c5',
  },
  keyRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 2,
  },
  key: {
    width: 4,
    height: 10,
    borderRadius: 1,
  },
  harmoniumBottom: {
    height: 3,
    backgroundColor: '#381753',
  },
  bellow: {
    position: 'absolute',
    right: 10,
    width: 6,
    height: 18,
    borderRadius: 3,
    backgroundColor: '#f6b85f',
  },
  knob: {
    position: 'absolute',
    left: 9,
    bottom: 16,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ffe8a3',
  },
});

export default CustomButton;
