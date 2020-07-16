import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function ImageInput({imageUri, onChangeImage}) {
  const handlePress = () => {
    if (!imageUri) options;
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
  };
  const imageSelect = () => {
    ImagePicker.showImagePicker(options, response => {
      const source = response.uri;
      onChangeImage(source);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <Icon
            name="camera"
            size={40}
            color={colors.medium}
            onPress={imageSelect}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    height: 100,
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
