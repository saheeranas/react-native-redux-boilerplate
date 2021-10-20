/**
 * This is a Navigation file which is wired already with Bottom Tab Navigation.
 * If you don't like it, feel free to replace with your own setup.
 * Uncomment commented lines from return() of RootNavigation to wire Login flow
 */
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';

// Hook for theme change (Light/Dark Mode)
import {useTheme} from '../theme/useTheme';
// Get Value from Keyring (Encrypted token)
import {getSecureValue} from '../utils/token';
// Redux slice for updating Access Token to store
import {updateToken} from '../store/userSlice';

// Screens
import Login from '../screens/auth/Login';
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
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

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
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated
        backgroundColor={theme.accent}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        {/* {user.token ? ( */}
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {backgroundColor: theme.cardBg},
            tabBarInactiveTintColor: theme.color,
            tabBarActiveTintColor: theme.accent,
            tabBarShowLabel: false,
            headerStyle: {backgroundColor: theme.cardBg, height: 50},
            headerTitleStyle: {color: theme.color, fontSize: 16},
          }}>
          <Tab.Screen
            name="To Do"
            component={Tasks}
            options={{
              tabBarIcon: homeIcon,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              // headerShown: false,
              tabBarIcon: settingsIcon,
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
    </SafeAreaView>
  );
}
