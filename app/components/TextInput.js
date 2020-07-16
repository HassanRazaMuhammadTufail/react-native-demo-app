import React from 'react';
import {StyleSheet, Text, View, Platform, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';

export default function AppTextInput({icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <Icon
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
