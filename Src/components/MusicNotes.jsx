import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { defaultNotes } from '../utils/constant';

function MusicNotes({
  notes = defaultNotes,
  value,
  onSelect,
  title = 'Music Notes',
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.grid}>
        {notes?.map((item) => {
          const isSelected = value === item.value;
          return (
            <View key={item.value} style={styles.cell}>
              <Pressable
                onPress={() => onSelect?.(item.value, item)}
                style={({ pressed }) => [styles.buttonWrap, pressed && styles.pressed]}
              >
                <View style={[styles.outerRing, isSelected && styles.outerRingSelected]}>
                  <LinearGradient
                    colors={isSelected ? ['#ff8bd8', '#7f7bff'] : ['#b25cff', '#4562ff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.innerButton}
                  >
                    <View style={styles.gloss} />
                    <Text style={styles.noteLabel}>{item.label}</Text>
                  </LinearGradient>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  title: {
    color: '#ffe8c3',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: 0.3,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  cell: {
    width: '25%',
    paddingHorizontal: 4,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonWrap: {
    width: 66,
    height: 66,
    borderRadius: 33,
  },
  pressed: {
    opacity: 1,
    transform: [{ scale: 0.97 }],
  },
  outerRing: {
    width: '100%',
    height: '100%',
    borderRadius: 33,
    backgroundColor: '#f3f6ff',
    padding: 3,
    shadowColor: '#1f225e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    shadowRadius: 6,
    elevation: 4,
  },
  outerRingSelected: {
    backgroundColor: '#f0f945',
  },
  innerButton: {
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gloss: {
    position: 'absolute',
    top: 5,
    left: 12,
    right: 12,
    height: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  noteLabel: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.2,
    textAlign: 'center',
  },
});

export default MusicNotes;
