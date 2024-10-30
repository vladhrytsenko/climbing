import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FutureExpeditions from './FutureExpeditions';
import ExpeditionDetails from './ExpeditionDetails';

const Stack = createNativeStackNavigator();

const Expeditions = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FutureExpeditions" component={FutureExpeditions} />
      <Stack.Screen name="ExpeditionDetails" component={ExpeditionDetails} />
    </Stack.Navigator>
  );
};

export default Expeditions;
