import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import {colors} from '../config/colors';

export default function ListingDetailsScreen({route}) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View />
        <ListItem
          image={require('../../assests/mosh.jpg')}
          title="Hassan Raza"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  ueserContainer: {
    marginVertical: 40,
  },
});
