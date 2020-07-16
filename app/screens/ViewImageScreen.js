import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="trash-can-outline" color="white" size={35} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assests/bg.jpeg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 30,
  },
});
