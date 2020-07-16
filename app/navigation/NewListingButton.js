import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name="plus-circle" color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 10,
    height: 75,
    width: 75,
    borderRadius: 40,
  },
});
