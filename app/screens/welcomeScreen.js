import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {colors} from '../config/colors';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

export default function welcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../../assests/bg.png')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assests/logo.png')} />
        <Text style={styles.tagline}>Just Do it!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    top: 70,
    position: 'absolute',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
