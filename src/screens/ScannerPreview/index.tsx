import React from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles';
import CameraIcon from '../../assets/images/camera.svg';

interface IScannerPreview {
  navigation: any;
}

const ScannerPreview = ({navigation}: IScannerPreview) => {
  const {top, bottom} = useSafeAreaInsets();

  const onPress = () => {
    navigation.navigate('QRScanner');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/app_background.png')}
      style={[
        styles.container,
        {paddingTop: top + 24, paddingBottom: bottom + 24},
      ]}>
      <View>
        <Text style={styles.title}>Scan your badge to enter</Text>
        <Text style={styles.description}>
          Use your phone camera to scan the QR code on your badge.
        </Text>
        <Image
          source={require('../../assets/images/qr_code.png')}
          style={styles.image}
          resizeMode="contain"
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
      </View>
      <Text style={styles.hint}>
        Use your phone camera to scan the QR code on your badge.
      </Text>
    </ImageBackground>
  );
};

export default ScannerPreview;
