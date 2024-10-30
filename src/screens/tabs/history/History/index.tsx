import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import styles from './styles.ts';
import SearchIcon from '../../../../assets/images/search.svg';
import CameraIcon from '../../../../assets/images/camera.svg';

interface IHistory {
  navigation: any;
}

const History = ({navigation}: IHistory) => {
  const {top} = useSafeAreaInsets();

  const [history, setHistory] = useState<
    Array<{id: string; room: string; timestamp: Date}>
  >([]);

  const onPress = () => {
    navigation.navigate('QRScanner');
  };

  useEffect(() => {
    (async () => {
      const currentHistory =
        JSON.parse((await AsyncStorage.getItem('history')) as string) || [];

      setHistory(currentHistory);
    })();
  }, []);

  return (
    <ImageBackground
      source={require('../../../../assets/images/app_background.png')}
      style={[styles.container, {paddingTop: top + 24}]}>
      <Text style={styles.title}>Access History</Text>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput style={styles.input} />
      </View>
      <Text style={styles.subtitle}>Recently</Text>
      <FlatList
        data={history}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.historyItemContainer}>
            <View style={styles.historyDetails}>
              <Text style={styles.room}>{item.room}</Text>
              <Text style={styles.time}>
                {moment(item.timestamp).format('MMMM DD, YYYY - HH:mm')}
              </Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.statusContainer}>
              <Text style={styles.status}>Access Granted</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={({id}) => id}
      />
      <Pressable
        style={({pressed}) => [
          styles.buttonContainer,
          pressed && styles.onPress,
        ]}
        onPress={onPress}>
        <Text style={styles.buttonText}>Open camera</Text>
        <CameraIcon />
      </Pressable>
    </ImageBackground>
  );
};

export default History;
