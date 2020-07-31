import React from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';

import IconIonicons from 'react-native-vector-icons/MaterialIcons';

export default function security() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Você está seguro!</Text>
      <Image
        source={require('../../assets/safe_status.png')}
        style={styles.imgStatus}
      />
      <Text style={styles.textInformation}>
        Continue seguindo as medidas de isolamento! Você está mandando bem!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    alignItems: 'center',
    marginHorizontal: 10,
    //     justifyContent: 'space-between',
    flex: 1,
  },
  textContainer: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: 'Manrope-Bold',
  },
  text: {
    width: 250,
    textAlign: 'justify',
    alignItems: 'center',
  },
  textInformation: {
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
    fontSize: 20,
    width: 250,
    textAlign: 'justify',
    fontFamily: 'Manrope-Regular',
  },
  imgStatus: {
    width: 300,
    height: 300,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  body: {
    alignItems: 'center',
  },
});
