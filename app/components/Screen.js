import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, styles.view]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? 24 : 44,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
