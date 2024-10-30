import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EquipmentReservation from './EquipmentReservation';
import EquipmentDetails from './EquipmentDetails';
import Notifications from './Notifications';
import Reservation from './Reservation';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="EquipmentReservation"
        component={EquipmentReservation}
      />
      <Stack.Screen name="EquipmentDetails" component={EquipmentDetails} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Reservation" component={Reservation} />
    </Stack.Navigator>
  );
};

export default Home;
