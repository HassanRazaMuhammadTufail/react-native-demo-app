import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  TouchableHighlight,
  Image,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function FlexboxPractice() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                fadeDuration={10000}
                source={{
                  width: 200,
                  height: 300,
                  uri: 'https://picsum.photos/300/300',
                }}
              />
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View style={styles.center}>
          <Text style={styles.text} numberOfLines={1}>
            hello - a lazy brown fox jumps over a or hwatever just a longer
            string to test
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Image
              blurRadius={1}
              source={{
                width: 200,
                height: 300,
                uri: 'https://picsum.photos/300/300',
              }}
            />
          </TouchableWithoutFeedback>
          <Button
            color="blue"
            title="Click to see unblur Image"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </SafeAreaView>
    </>
    // <SafeAreaView style={styles.container}>
    //   <View
    //     style={{
    //       backgroundColor: 'dodgerblue',
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: 'gold',
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: 'tomato',
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    color: Colors.black,
  },
  center: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
