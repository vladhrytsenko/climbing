import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text, Pressable, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles.ts';
import BackIcon from '../../../../assets/images/back.svg';
import moment from 'moment';

interface INotifications {
  navigation: any;
}

const Notifications = ({navigation}: INotifications) => {
  const {top} = useSafeAreaInsets();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    (async () => {
      const currentNotifications =
        JSON.parse((await AsyncStorage.getItem('reservations')) as string) ||
        [];

      setNotifications(currentNotifications);
    })();
  }, []);

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
      <View style={styles.contentContainer}>
        <FlatList
          data={notifications}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentWrapper}
          ListEmptyComponent={
            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyListText}>List is empty</Text>
            </View>
          }
          renderItem={({item}: {item: any}) => (
            <View style={styles.notificationWrapper}>
              <View style={styles.notificationContainer}>
                <Text style={styles.notificationText}>
                  Your reservation for the {item.name} is confirmed for{' '}
                  {item.date}, {moment().get('year')} {item.time}.
                </Text>
              </View>
              <Text style={styles.date}>
                {moment(item.createdAt).format('DD-MM-YYYY HH:mm')}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ImageBackground>
  );
};

export default Notifications;
