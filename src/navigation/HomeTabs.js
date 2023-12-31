import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import AccountScreen from '../screens/account/AccountScreen';
import LoginScreen from '../screens/account/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const {user} = useSelector(state => state.auth);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Account') {
            iconName = 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" options={{headerShown: true}}>
        {props => <AccountNavigator isLoggedIn={user} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const AccountNavigator = ({isLoggedIn, ...props}) => {
  if (isLoggedIn) {
    return <AccountScreen {...props} />;
  } else {
    return <LoginScreen {...props} />;
  }
};
