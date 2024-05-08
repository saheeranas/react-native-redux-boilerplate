/**
 * This is a Navigation file which is wired already with Bottom Tab Navigation.
 * If you don't like it, feel free to replace with your own setup.
 * Uncomment commented lines from return() of RootNavigation to wire Login flow
 */
import React, {useEffect} from 'react';
import {ColorValue} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
// import {useSelector, useDispatch} from 'react-redux';

// Hook for theme change (Light/Dark Mode)
import {useTheme} from '../theme/useTheme';
import {typeVariants} from '../theme/theme';
// Get Value from Keyring (Encrypted token)
import {getSecureValue} from '../utils/keyChain';
// Redux slice for updating Access Token to store
import {updateToken} from '../store/userSlice';

// import {RootState} from '../store/store';

// Screens
// import Login from '../screens/auth/Login';
import Tasks from '../screens/Tasks';
import NetworkExample from '../screens/NetworkExample';
import Settings from '../screens/Settings';

// Icons for Bottom Tab Navigation
const homeIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="list-sharp" size={30} color={color} />
);
const networkIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="wifi-sharp" size={24} color={color} />
);
const settingsIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="settings-sharp" size={24} color={color} />
);

// Root Navigation
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user);

  // Copy existing token from local storage to redux store
  useEffect(() => {
    async function checkIsLogined() {
      try {
        let temp = await getSecureValue('token');
        dispatch(updateToken({token: temp}));
      } catch (e) {}
    }
    checkIsLogined();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {/* {user.token ? ( */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.cardBg,
            borderTopColor: theme?.layoutBg,
          },
          tabBarInactiveTintColor: theme.color,
          tabBarActiveTintColor: theme.primary,
          headerStyle: {backgroundColor: theme.cardBg, height: 50},
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: typeVariants.titleLarge.fontFamily,
            fontSize: 18,
            color: theme.primary,
            fontWeight: 'bold',
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="To Do"
          component={Tasks}
          options={{
            tabBarIcon: homeIcon,
            tabBarTestID: 'BottomTab.ToDo',
          }}
        />
        <Tab.Screen
          name="NetworkExample"
          component={NetworkExample}
          options={{
            tabBarIcon: networkIcon,
            tabBarTestID: 'BottomTab.Network',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            // headerShown: false,
            tabBarIcon: settingsIcon,
            tabBarTestID: 'BottomTab.Settings',
          }}
        />
      </Tab.Navigator>
      {/* ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        )} */}
    </NavigationContainer>
  );
}
