import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles.ts';
import {expeditions} from '../../../../assets/data/expeditions.ts';
import ArrowRightIcon from '../../../../assets/images/arrow_right.svg';
import LocationIcon from '../../../../assets/images/location.svg';
import CalendarIcon from '../../../../assets/images/calendar.svg';

interface FutureExpeditions {
  navigation: any;
}

const FutureExpeditions = ({navigation}: FutureExpeditions) => {
  const {top} = useSafeAreaInsets();

  const onOpenExpedition = (expedition: any) => {
    navigation.navigate('ExpeditionDetails', {expedition});
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/expeditions_background.png')}
      style={[styles.container, {paddingTop: top + 24}]}>
      <Text style={styles.title}>Explore Future Expeditions</Text>
      <View style={styles.contentContainer}>
        <FlatList
          data={expeditions.slice(4)}
          ListHeaderComponent={
            <View>
              <View style={[styles.seeAllContainer, {marginTop: 24}]}>
                <Text style={styles.subtitle}>Recommended</Text>
                <View style={styles.seeAllContainer}>
                  <Text style={styles.seeAll}>See All</Text>
                  <ArrowRightIcon />
                </View>
              </View>
              <FlatList
                horizontal
                data={expeditions.slice(0, 4)}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.expeditionsContainer}
                renderItem={({item}) => (
                  <ImageBackground
                    source={item.image}
                    resizeMode="cover"
                    style={styles.recommendationContainer}>
                    <Pressable
                      hitSlop={10}
                      style={({pressed}) => [
                        styles.readMoreButton,
                        pressed && styles.onPress,
                      ]}
                      onPress={() => onOpenExpedition(item)}>
                      <Text style={styles.readMoreText}>Read more</Text>
                    </Pressable>
                    <View style={styles.recommendationDetails}>
                      <Text style={styles.recommendationName}>{item.name}</Text>
                      <View style={[styles.recommendationItem, {gap: 16}]}>
                        <View style={styles.recommendationItem}>
                          <LocationIcon />
                          <Text style={styles.recommendationItemText}>
                            {item.location}
                          </Text>
                        </View>
                        <View style={styles.recommendationItem}>
                          <CalendarIcon />
                          <Text style={styles.recommendationItemText}>
                            {item.date}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                )}
                keyExtractor={({id}) => id.toString()}
              />
              <View style={styles.seeAllContainer}>
                <Text style={styles.subtitle}>My Schedule</Text>
                <View style={styles.seeAllContainer}>
                  <Text style={styles.seeAll}>See All</Text>
                  <ArrowRightIcon />
                </View>
              </View>
            </View>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 24}}
          renderItem={({item}) => (
            <Pressable
              style={({pressed}) => [
                styles.scheduleContainer,
                pressed && styles.onPress,
              ]}
              onPress={() => onOpenExpedition(item)}>
              <Image source={item.image} style={styles.schedulePreview} />
              <View>
                <Text style={styles.recommendationName}>{item.name}</Text>
                <View style={[styles.recommendationItem, {gap: 16}]}>
                  <View style={styles.recommendationItem}>
                    <LocationIcon />
                    <Text style={styles.recommendationItemText}>
                      {item.location}
                    </Text>
                  </View>
                  <View style={styles.recommendationItem}>
                    <CalendarIcon />
                    <Text style={styles.recommendationItemText}>
                      {item.date}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={({id}) => id.toString()}
        />
      </View>
    </ImageBackground>
  );
};

export default FutureExpeditions;
