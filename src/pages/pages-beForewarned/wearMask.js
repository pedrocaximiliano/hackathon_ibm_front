import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import ButtonComponent from '../../components/button';

const wearMask = ({navigation}) => (
  <View style={styles.container}>
    <View>
      <View style={styles.border}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/logo_useMask.png')}></Image>
      </View>
    </View>
    <View style={styles.body}>
      <Text
        style={{
          alignItems: 'center',
          fontSize: 20,
          fontFamily: 'Manrope-Bold',
        }}>
        Use máscara
      </Text>
      <Text style={styles.text}>
        As máscaras médicas podem proteger as pessoas que usam a máscara de
        serem infectadas, bem como impedir que aqueles que apresentam sintomas
        as espalhem. A OMS recomenda que os seguintes grupos usem máscaras
        médicas.
      </Text>
    </View>
    <ButtonComponent navigation={navigation} path={'washHands'} />
  </View>
);

wearMask.navigationOptions = {
  title: 'wearMask',
};

export default wearMask;

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
    width: 150,
    marginTop: 30,
    height: 160,
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
