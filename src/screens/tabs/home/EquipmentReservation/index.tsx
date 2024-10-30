import React, {useMemo, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles.ts';
import equipments from '../../../../assets/data/equipments.json';
import SearchIcon from '../../../../assets/images/search.svg';
import BellIcon from '../../../../assets/images/bell.svg';
import ArrowRightIcon from '../../../../assets/images/arrow_right.svg';

const tabs = Object.keys(equipments);

interface IEquipmentReservation {
  navigation: any;
}

const EquipmentReservation = ({navigation}: IEquipmentReservation) => {
  const {top} = useSafeAreaInsets();

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const data = useMemo(() => {
    // @ts-ignore
    return equipments[activeTab];
  }, [activeTab]);

  const onOpenNotifications = () => {
    navigation.navigate('Notifications');
  };

  const onOpenEquipmentDetails = (item: any) => {
    navigation.navigate('EquipmentDetails', {item});
  };

  const onOpenReservation = (item: any) => {
    navigation.navigate('Reservation', {item});
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/app_background.png')}
      style={[styles.container, {paddingTop: top + 24}]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Equipment Reservation</Text>
        <Pressable
          hitSlop={10}
          style={styles.notificationButton}
          onPress={onOpenNotifications}>
          <BellIcon />
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput style={styles.input} />
      </View>
      <Text style={styles.subtitle}>Available equipment</Text>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={styles.tabsWrapper}
        contentContainerStyle={styles.tabsContainer}
        renderItem={({item}) => {
          const isActive = activeTab === item;

          return (
            <Pressable
              hitSlop={5}
              style={[
                styles.tabContainer,
                isActive && styles.activeTabContainer,
              ]}
              onPress={() => setActiveTab(item)}>
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {item}
              </Text>
            </Pressable>
          );
        }}
        keyExtractor={item => item}
      />
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.goodsWrapper}
        renderItem={({item}) => (
          <ImageBackground
            source={{uri: item.image}}
            style={styles.goodsContainer}>
            <View style={styles.headerContainer}>
              <View style={styles.markContainer}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.mark}>
                  {item.name}
                </Text>
              </View>
              <Pressable
                hitSlop={10}
                style={({pressed}) => [
                  styles.navigationButton,
                  pressed && styles.onPress,
                ]}
                onPress={() => onOpenEquipmentDetails(item)}>
                <ArrowRightIcon />
              </Pressable>
            </View>
            <Pressable
              hitSlop={5}
              style={({pressed}) => [
                styles.buttonContainer,
                pressed && styles.onPress,
              ]}
              onPress={() => onOpenReservation(item)}>
              <Text style={styles.buttonText}>Reserve</Text>
            </Pressable>
          </ImageBackground>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ImageBackground>
  );
};

export default EquipmentReservation;
