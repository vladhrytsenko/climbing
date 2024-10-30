import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles.ts';
import BackIcon from '../../../../assets/images/back.svg';
import CalendarIcon from '../../../../assets/images/calendar.svg';
import ClockIcon from '../../../../assets/images/clock.svg';

interface IEquipmentDetails {
  navigation: any;
  route: any;
}

const EquipmentDetails = ({route, navigation}: IEquipmentDetails) => {
  const {image, name, limit, date, time, description} = route.params.item;

  const {top} = useSafeAreaInsets();

  const onConfirmReservation = () => {
    navigation.navigate('Reservation', {item: route.params.item});
  };

  return (
    <ImageBackground
      source={image}
      style={[styles.container, {paddingTop: top + 24}]}>
      <Pressable
        hitSlop={10}
        style={styles.backButton}
        onPress={navigation.goBack}>
        <BackIcon />
      </Pressable>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.detailsWrapper}>
          <View
            style={[
              styles.detailsContainer,
              {flex: 1, backgroundColor: '#FFC853'},
            ]}>
            <Text style={styles.text}>Limited</Text>
            <Text style={[styles.text, {fontSize: 32}]}>{limit}</Text>
          </View>
          <View
            style={[
              styles.detailsContainer,
              {width: 175, backgroundColor: '#E5F4FF'},
            ]}>
            <Text style={[styles.text, {color: '#2284CD'}]}>Condition</Text>
            <Text style={[styles.text, {color: '#13141E'}]}>
              Needs maintenance
            </Text>
          </View>
          <View
            style={[
              styles.detailsContainer,
              {flex: 1, backgroundColor: '#1D81DB'},
            ]}>
            <Text style={styles.text}>Choose Size</Text>
          </View>
        </View>
        <View style={[styles.dateWrapper, {gap: 16}]}>
          <View style={styles.dateContainer}>
            <CalendarIcon />
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.dateContainer}>
            <ClockIcon />
            <Text style={styles.date}>{time}</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
        <Pressable
          hitSlop={5}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}
          onPress={onConfirmReservation}>
          <Text style={styles.buttonText}>Confirm reservation</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default EquipmentDetails;
