import React from 'react';
import {View} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from '../styles.ts';
import ScannerPreview from '../../screens/ScannerPreview';
import QRScanner from '../../screens/QRScanner';
import TabNavigation from '../TabNavigation';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#E7E1FF',
  },
};

const RootNavigation = () => {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="ScannerPreview" component={ScannerPreview} />
          <Stack.Screen name="QRScanner" component={QRScanner} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;
