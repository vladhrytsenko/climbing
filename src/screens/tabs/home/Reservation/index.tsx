import React, {useState} from 'react';
import {ImageBackground, Text, View, Dimensions, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DateTimePicker from 'react-native-ui-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import styles from './styles';
import BackIcon from '../../../../assets/images/back.svg';
import CalendarIcon from '../../../../assets/images/calendar.svg';
import ClockIcon from '../../../../assets/images/clock.svg';

const dateTimePickerHeight = Dimensions.get('window').height * 0.3;
const dateTimePickerStyles = {
  selectedTextStyle: styles.todayTextStyle,
  weekDaysTextStyle: styles.weekDaysTextStyle,
  todayTextStyle: styles.todayTextStyle,
  todayContainerStyle: styles.todayContainerStyle,
  selectedItemColor: '#9EC3FF',
};

interface IReservation {
  navigation: any;
  route: any;
}

const Reservation = ({route, navigation}: IReservation) => {
  const {date: initialDate, time} = route.params.item;

  const {top} = useSafeAreaInsets();

  const [date, setDate] = useState(
    moment(`${initialDate} ${moment().get('year')}`, 'DD MMM YYYY'),
  );

  const onConfirmReservation = async () => {
    const reservations =
      JSON.parse((await AsyncStorage.getItem('reservations')) as string) || [];
    const newReservation = {
      ...route.params.item,
      id: Date.now().toString(),
      createdAt: new Date(),
      date: date.format('DD MMM'),
    };

    await AsyncStorage.setItem(
      'reservations',
      JSON.stringify([newReservation, ...reservations]),
    );

    navigation.popToTop();
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/app_background.png')}
      style={[styles.container, {paddingTop: top + 24}]}>
      <View style={styles.titleContainer}>
        <Pressable
          hitSlop={10}
          style={styles.backButton}
          onPress={navigation.goBack}>
          <BackIcon />
        </Pressable>
        <Text style={styles.title}>Reservation</Text>
      </View>
      <View style={styles.dateTimePickerContainer}>
        <DateTimePicker
          {...dateTimePickerStyles}
          height={dateTimePickerHeight}
          mode="single"
          date={date.toDate()}
          onChange={params => setDate(params.date as any)}
        />
      </View>
      <View style={[styles.dateWrapper, {gap: 16}]}>
        <View style={styles.dateContainer}>
          <CalendarIcon />
          <Text style={styles.date}>{date.format('DD MMM')}</Text>
        </View>
        <View style={styles.dateContainer}>
          <ClockIcon />
          <Text style={styles.date}>{time}</Text>
        </View>
      </View>
      <Pressable
        hitSlop={5}
        style={({pressed}) => [
          styles.buttonContainer,
          pressed && styles.onPress,
        ]}
        onPress={onConfirmReservation}>
        <Text style={styles.buttonText}>Reserve</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default Reservation;
