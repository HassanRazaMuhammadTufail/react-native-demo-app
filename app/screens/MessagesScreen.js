import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../../assests/bg.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../../assests/bg.png'),
  },
];

export default function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('hello', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            refreshing={refreshing}
            onRefresh={() => {
              setMessages([
                {
                  id: 2,
                  title: 'T2',
                  description: 'D2',
                  image: require('../../assests/bg.png'),
                },
              ]);
              console.log('refresh');
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
