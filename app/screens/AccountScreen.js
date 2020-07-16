import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import {colors} from '../config/colors';
import AppIcon from '../components/AppIcon';
import ListItemSeparator from '../components/ListItemSeparator';
import routes from '../navigation/routes';

const menuItems = [
  {
    title: 'My listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Hassan Raza"
          subTitle="hassan.raza@loopsdigital.com"
          image={require('../../assests/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItems => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
