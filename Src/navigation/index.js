import React from 'react';
import { I18nManager } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatingScreens } from '../utils/constant';
import Splash from '../animations/Splash.js';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const colors = {
  pureBlack: '#000',
  white: '#fff',
};

const isRTL = I18nManager.isRTL;

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigatingScreens.Splash}
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: colors.pureBlack,
        headerStyle: { backgroundColor: colors.white },
        headerShown: false,
        gestureDirection: isRTL ? 'horizontal-inverted' : 'horizontal',
        animation: 'slide_from_right',
        animationDuration: 300,
      }}
    >
      <Stack.Screen name={NavigatingScreens.Splash} component={Splash} />
      <Stack.Screen
        name={NavigatingScreens.Home}
        component={Home}
        options={{
          headerTitleStyle: { textAlign: 'center' },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
