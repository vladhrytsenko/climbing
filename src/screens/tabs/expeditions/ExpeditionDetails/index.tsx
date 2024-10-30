import React, {useState} from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles.ts';
import JoinExpeditionModal from './JoinExpeditionModal';
import BackIcon from '../../../../assets/images/back.svg';
import LocationIcon from '../../../../assets/images/location.svg';
import CalendarIcon from '../../../../assets/images/calendar.svg';
import StarIcon from '../../../../assets/images/star.svg';

interface IExpeditionDetails {
  navigation: any;
  route: any;
}

const ExpeditionDetails = ({navigation, route}: IExpeditionDetails) => {
  const {image, name, location, date, description, experience_level, rating} =
    route.params.expedition;

  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const {top} = useSafeAreaInsets();

  const onJoin = () => {
    setModalIsVisible(true);
  };

  const onClose = () => {
    setModalIsVisible(false);
  };

  const onBack = () => {
    navigation.popToTop();
  };

  return (
    <ImageBackground
      source={image}
      style={[styles.container, {paddingTop: top + 24}]}>
      <JoinExpeditionModal
        isVisible={modalIsVisible}
        onClose={onClose}
        onBack={onBack}
      />

      <Pressable
        hitSlop={10}
        style={styles.backButton}
        onPress={navigation.goBack}>
        <BackIcon />
      </Pressable>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={[styles.detailsItem, {gap: 16}]}>
          <View style={styles.detailsItem}>
            <LocationIcon />
            <Text style={styles.detailsItemText}>{location}</Text>
          </View>
          <View style={styles.detailsItem}>
            <CalendarIcon />
            <Text style={styles.detailsItemText}>{date}</Text>
          </View>
        </View>
        <View style={[styles.detailsItem, {gap: 8, marginTop: 12}]}>
          <Text style={styles.detailsItemText}>Experience Level</Text>
          <Text style={[styles.detailsItemText, {color: '#DEDFE0'}]}>•</Text>
          <Text style={[styles.detailsItemText, {color: '#FF9447'}]}>
            {experience_level}
          </Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.ratingWrapper}>
            <Text style={styles.ratingTitle}>Rating</Text>
            <View style={styles.ratingContainer}>
              <StarIcon />
              <Text style={styles.rating}>{rating}</Text>
            </View>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.membersContainer}>
            <Text style={styles.membersTitle}>Joined Member</Text>
            <Image
              style={styles.membersImage}
              resizeMode="cover"
              source={require('../../../../assets/images/users.png')}
            />
          </View>
        </View>
        <Text style={styles.subtitle}>About Destination</Text>
        <Text style={styles.description}>{description}</Text>
        <Pressable
          hitSlop={5}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}
          onPress={onJoin}>
          <Text style={styles.buttonText}>Join expedition</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default ExpeditionDetails;
