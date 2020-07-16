import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from '../components/Screen';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetDetails', {id: 1})}
    />
  );
};

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    {/* <Button
      title="View Tweet"
      onPress={() => navigation.navigate('TweetDetails', {id: 1})}
    /> */}
    <Link />
  </Screen>
);

const TweetDetails = ({route}) => (
  // useRoute()
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const Stacknavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'dodgerblue'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: {backgroundColor: 'tomato'},
          headerTintColor: 'white',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({route}) => ({
          title: route.params.id,
        })}
      />
    </Stack.Navigator>
  );
};

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black',
    }}>
    <Tab.Screen
      name="Feed"
      component={Stacknavigator}
      options={{
        tabBarIcon: ({size, color}) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function NavigationPractice() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
