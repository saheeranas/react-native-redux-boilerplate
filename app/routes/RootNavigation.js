/**
 * This is a Navigation file which is wired already with Bottom Tab Navigation.
 * If you don't like it, feel free to replace with your own setup.
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../theme/useTheme';

// Screens
import Tasks from '../screens/Tasks';
import Settings from '../screens/Settings';

// Icons for Bottom Tab Navigation
const homeIcon = ({color}) => (
  <Icon name="ios-home-outline" size={20} color={color} />
);
const settingsIcon = ({color}) => (
  <Icon name="ios-settings-outline" size={20} color={color} />
);

// Root Navigation
const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  const {theme} = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: theme.cardBg},
          tabBarInactiveTintColor: theme.color,
          tabBarActiveTintColor: theme.accent,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Tasks}
          options={{
            tabBarIcon: homeIcon,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: settingsIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
