import React, {useMemo, useState} from 'react';
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
import data from '../../../../assets/data/ranking.json';
import CrownIcon from '../../../../assets/images/crown.svg';
import UpIcon from '../../../../assets/images/up.svg';
import DownIcon from '../../../../assets/images/down.svg';
import avatar1Source from '../../../../assets/images/avatar_1.png';
import avatar2Source from '../../../../assets/images/avatar_2.png';
import avatar3Source from '../../../../assets/images/avatar_3.png';
import avatar4Source from '../../../../assets/images/avatar_4.png';
import avatar5Source from '../../../../assets/images/avatar_5.png';

enum tabs {
  TODAY = 'Today',
  WEEK = 'Week',
  ALL_TIME = 'All Time',
}

const avatars = [
  avatar4Source,
  avatar5Source,
  avatar1Source,
  avatar2Source,
  avatar3Source,
];

const Ranking = () => {
  const {top} = useSafeAreaInsets();

  const [activeTab, setActiveTab] = useState<tabs>(tabs.TODAY);

  const topUsers = useMemo(() => {
    switch (activeTab) {
      case tabs.TODAY:
        return data.today;

      case tabs.WEEK:
        return data.this_week;

      case tabs.ALL_TIME:
        return data.all_time;

      default:
        return [];
    }
  }, [activeTab]);

  return (
    <ImageBackground
      source={require('../../../../assets/images/ranking_background.png')}
      style={[styles.container, {paddingTop: top + 24}]}>
      <Text style={styles.title}>Club Member Ranking</Text>
      <View style={styles.contentContainer}>
        <View style={styles.tabsContainer}>
          {Object.values(tabs).map(item => (
            <Pressable
              style={[styles.tab, activeTab === item && styles.activeTab]}
              onPress={() => setActiveTab(item)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === item && styles.activeTabText,
                ]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <FlatList
          data={topUsers.slice(3)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.topUsersContainer}>
              <View style={styles.topUserContainer}>
                <View>
                  <Image
                    source={avatar2Source}
                    style={[styles.topUserAvatar, {borderColor: '#B8B8B8'}]}
                  />
                  <View
                    style={[
                      styles.badgeContainer,
                      {backgroundColor: '#B8B8B8'},
                    ]}>
                    <Text style={styles.badgeText}>2</Text>
                  </View>
                </View>
                <Text style={styles.topUsersName}>{topUsers[1].name}</Text>
              </View>
              <View style={[styles.topUserContainer, {marginBottom: 50}]}>
                <CrownIcon />
                <View>
                  <Image
                    source={avatar1Source}
                    style={[styles.topUserAvatar, {borderColor: '#FFC122'}]}
                  />
                  <View
                    style={[
                      styles.badgeContainer,
                      {backgroundColor: '#FFC122'},
                    ]}>
                    <Text style={styles.badgeText}>1</Text>
                  </View>
                </View>
                <Text style={styles.topUsersName}>{topUsers[0].name}</Text>
              </View>
              <View style={styles.topUserContainer}>
                <View>
                  <Image
                    source={avatar3Source}
                    style={[styles.topUserAvatar, {borderColor: '#DA7640'}]}
                  />
                  <View
                    style={[
                      styles.badgeContainer,
                      {backgroundColor: '#DA7640'},
                    ]}>
                    <Text style={styles.badgeText}>3</Text>
                  </View>
                </View>
                <Text style={styles.topUsersName}>{topUsers[2].name}</Text>
              </View>
            </View>
          }
          renderItem={({item, index}) => (
            <View style={styles.userContainer}>
              <View style={styles.progressContainer}>
                <Text style={styles.progress}>{Math.abs(item.progress)}</Text>
                {item.progress >= 0 ? <UpIcon /> : <DownIcon />}
              </View>
              <Image
                source={avatars[index % avatars.length]}
                style={styles.avatarContainer}
              />
              <View>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.role}>{item.role}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Ranking;
