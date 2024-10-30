import React from 'react';
import {ImageBackground, View, Text, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles.ts';
import avatarSource from '../../../../assets/images/avatar_2.png';

const Profile = () => {
  const {top} = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require('../../../../assets/images/profile_background.png')}
      style={[styles.container, {paddingTop: top + 48}]}>
      <View style={styles.contentContainer}>
        <View style={styles.userDetailsContainer}>
          <Image source={avatarSource} style={styles.avatar} />
          <View>
            <Text style={styles.name}>Jakob Müller</Text>
            <Text style={styles.tag}>@jakobmuller</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>About</Text>
        <Text style={styles.description}>
          Hey, I’m into mountain climbing and love pushing my limits on tough
          routes.
        </Text>
        <Text style={styles.subtitle}>Achievements</Text>
        <ImageBackground
          source={require('../../../../assets/images/achievement_1.png')}
          resizeMode="stretch"
          style={styles.achievementContainer}>
          <View>
            <Text style={styles.achievementName}>Master of the Climber</Text>
            <Text style={styles.achievementDescription}>
              20 of 30 Completed
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../../assets/images/achievement_2.png')}
          resizeMode="stretch"
          style={styles.achievementContainer}>
          <View>
            <Text style={styles.achievementName}>Master of the Traveler</Text>
            <Text style={styles.achievementDescription}>
              30 of 55 Completed
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default Profile;
