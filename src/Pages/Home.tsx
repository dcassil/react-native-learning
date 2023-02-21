import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeTab} from '../MainTabs/Home';
import {MessagesTab} from '../MainTabs/Messages';
import {ProfileTab} from '../MainTabs/Profile';

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Profile':
              iconName = focused ? 'people-circle' : 'people-circle-outline';
              break;
            case 'Messages':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeTab}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Messages"
        component={MessagesTab}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileTab}
      />
    </Tab.Navigator>
  );
};
