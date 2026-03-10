import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const maleImg = require('../../../musicAi/Src/assets/images/male_tanpura.png');
const femaleImg = require('../../../musicAi/Src/assets/images/female_tanpura.png');

const defaultGenderData = [
  { label: 'Male', value: 'male', image: maleImg },
  { label: 'Female', value: 'female', image: femaleImg },
];

function GenderPicker({
  value,
  selector,
  onChange,
  data = defaultGenderData,
  title = 'Choose Voice Avatar',
  style,
}) {
  const handleSelect = (item) => {
    selector?.(item.value, item);
    onChange?.(item.value, item);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        {data.map((item) => {
          const isSelected = value === item.value;

          return (
            <Pressable
              key={item.value}
              onPress={() => handleSelect(item)}
              style={({ pressed }) => [
                styles.card,
                isSelected && styles.cardSelected,
                pressed && styles.cardPressed,
              ]}
            >
              <LinearGradient
                colors={
                  isSelected
                    ? ['#ffb347', '#ff5e62']
                    : ['#2b2548', '#ff5e62']
                }
                style={styles.cardBg}
              >
                <Image
                  source={item.image}
                  style={styles.avatarImage}
                  resizeMode="center"
                />
              </LinearGradient>
            </Pressable>
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
color: '#ffecc8',
fontSize: 15,
fontWeight: '700',
marginBottom: 12,
},

row: {
flexDirection: 'row',
gap: 16,
},

card: {
  flex: 1,
width: 150,
height: 100,
borderRadius: 16,
overflow: 'hidden',
borderWidth: 1,
borderColor: 'rgba(255,255,255,0.15)',
alignSelf:"center"
},

cardBg: {
flex: 1,
},

avatarImage: {
width: '100%',
height: '100%',
},

cardSelected: {
borderColor: '#ffd46b',
shadowColor: '#ffd46b',
shadowOpacity: 0.9,
shadowRadius: 12,
elevation: 10,
},

cardPressed: {
transform: [{ scale: 0.96 }],
},

labelWrap: {
position: 'absolute',
bottom: 0,
width: '100%',
backgroundColor: 'rgba(0,0,0,0.45)',
paddingVertical: 4,
alignItems: 'center',
},

label: {
color: '#fff',
fontWeight: '700',
},

labelSelected: {
color: '#ffeaa7',
},

});

export default GenderPicker;