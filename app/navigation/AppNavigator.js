import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={routes.FEED}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.LISTING_EDIT}
      component={ListingEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
        tabBarIcon: ({color, size}) => (
          <Icon name="plus-circle" size={size} color={color} />
        ),
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNTS}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
