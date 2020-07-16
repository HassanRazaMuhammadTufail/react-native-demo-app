import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppCard from '../components/AppCard';

export default function Card() {
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}>
      <AppCard
        title="Red Jacket for sell"
        subTitle="$100"
        Image={require('../../assests/bg.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
