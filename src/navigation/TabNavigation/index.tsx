import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styles from '../styles.ts';
import History from '../../screens/tabs/history/History';
import Home from '../../screens/tabs/home';
import Ranking from '../../screens/tabs/ranking/Ranking';
import Expeditions from '../../screens/tabs/expeditions';
import Profile from '../../screens/tabs/profile/Profile';
import HomeIcon from '../../components/HomeIcon';
import HistoryIcon from '../../components/HistoryIcon';
import RankingIcon from '../../components/RankingIcon';
import ExpeditionsIcon from '../../components/ExpeditionsIcon';
import ProfileIcon from '../../components/ProfileIcon';

const Tab = createBottomTabNavigator();

interface ITabBarIcon {
  color: string;
  focused: boolean;
}

const HistoryTabBarIcon = ({color, focused}: ITabBarIcon) => (
  <HistoryIcon color={color} focused={focused} />
);
const HomeTabBarIcon = ({color, focused}: ITabBarIcon) => (
  <HomeIcon color={color} focused={focused} />
);
const RankingTabBarIcon = ({color, focused}: ITabBarIcon) => (
  <RankingIcon color={color} focused={focused} />
);
const ExpeditionsTabBarIcon = ({color, focused}: ITabBarIcon) => (
  <ExpeditionsIcon color={color} focused={focused} />
);
const ProfileTabBarIcon = ({color, focused}: ITabBarIcon) => (
  <ProfileIcon color={color} focused={focused} />
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#1D81DB',
        tabBarInactiveTintColor: '#C2E2FF',
      }}>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: HistoryTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarIcon: RankingTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Expeditions"
        component={Expeditions}
        options={{
          tabBarIcon: ExpeditionsTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ProfileTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
