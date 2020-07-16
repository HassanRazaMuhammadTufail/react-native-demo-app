import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={35} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    height: '100%',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
