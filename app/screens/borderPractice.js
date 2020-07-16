import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BorderPractice() {
  return (
    <View style={styles.container}>
      <View style={styles.border} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'royalblue',
    borderRadius: 50,
  },
});
