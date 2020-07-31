import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import ButtonComponent from '../../components/button';

const washHands = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.border}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/logo_washHands.png')}></Image>
    </View>
    <View style={styles.body}>
      <Text
        style={{
          alignItems: 'center',
          fontSize: 20,
          fontFamily: 'Manrope-Bold',
        }}>
        Lave as mãos
      </Text>
      <Text style={styles.text}>
        Lave as mãos com água e sabão ou higienizador à base de álcool. Tanto
        álcool em gel quanto água e sabão são eficazes para matar vírus que
        podem estar nas mãos ou outra parte do corpo.
      </Text>
    </View>
    <ButtonComponent navigation={navigation} path={'useAlcohol'} />
  </View>
);

washHands.navigationOptions = {
  title: 'washHands',
};

export default washHands;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
  },
  tinyLogo: {
    width: 180,
    marginTop: 50,
    height: 150,
  },
  text: {
    fontSize: 16,
    width: 300,
    marginTop: 20,
    textAlign: 'justify',
    fontFamily: 'Manrope-Regular',
  },
  border: {
    borderRadius: 150,
    width: 220,
    height: 220,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: 'white',
    textAlign: 'center',
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
});
