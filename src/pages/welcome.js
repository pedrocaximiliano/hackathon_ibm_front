import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import ButtonComponent from '../components/button';

const watson = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.imagemContainer}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo_welcome.png')}></Image>
      <Image
        style={styles.tinyLogo1}
        source={require('../assets/logo_welcome.png')}></Image>
    </View>
    <View style={styles.body}>
      <Text style={styles.text}>
        Nesses tempos difíceis sabemos que muitas informações são veiculadas e
        por vezes ficamos perdidos. Desenvolvemos então esse aplicativo para ser
        sua ferramenta mais forte contra a desinformação e contra o covid-19.
      </Text>
    </View>
    <ButtonComponent navigation={navigation} path={'radarCovid'} />
  </View>
);

watson.navigationOptions = {
  title: 'watson',
};

export default watson;

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 210,
    height: 161,
    alignSelf: 'center',
  },
  tinyLogo1: {
    width: 210,
    height: 161,
    marginEnd: 60,
    marginTop: -20,
  },
  text: {
    width: 300,
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'Manrope-Regular',
  },
});
