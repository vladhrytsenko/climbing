import React, {useEffect} from 'react';
import {Pressable, StatusBar, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import BackIcon from '../../assets/images/back.svg';

interface IQRScanner {
  navigation: any;
}

const rooms = ['Locker Room', 'Shower Room'];

const QRScanner = ({navigation}: IQRScanner) => {
  const {top} = useSafeAreaInsets();

  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  const onCodeScanned = async () => {
    const currentHistory =
      JSON.parse((await AsyncStorage.getItem('history')) as string) || [];
    const roomIndex = Math.floor(Math.random() * rooms.length);
    const newEntry = {
      id: Date.now().toString(),
      room: rooms[roomIndex],
      timestamp: new Date().toISOString(),
    };
    const updatedHistory = [newEntry, ...currentHistory];

    await AsyncStorage.setItem('history', JSON.stringify(updatedHistory));

    navigation.navigate('TabNavigation');
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned,
  });

  useEffect(() => {
    (async () => {
      if (!hasPermission) {
        await requestPermission();
      }
    })();
  }, [hasPermission, requestPermission]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Pressable
        hitSlop={10}
        style={[styles.backButton, {top: top + 24}]}
        onPress={navigation.goBack}>
        <BackIcon />
      </Pressable>

      <View style={styles.cameraContainer}>
        {!!device && (
          <Camera
            isActive
            style={styles.scannerContainer}
            device={device}
            codeScanner={codeScanner}
          />
        )}
      </View>
    </View>
  );
};

export default QRScanner;
