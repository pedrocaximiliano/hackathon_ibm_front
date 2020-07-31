import React from 'react';

import {View, StyleSheet, Text, Button, Image} from 'react-native';

import IconIonicons from 'react-native-vector-icons/Ionicons';

export default function warning({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Fique atento aos sintomas!</Text>
      <Image
        source={require('../../assets/warning_status.png')}
        style={styles.imgStatus}
      />
      <Text style={styles.textInformation}>
        <Text style={{fontFamily: 'Manrope-Bold'}}>
          Você pode ter sido exposto a alguém com COVID-19!
        </Text>{' '}
        {'\n'}Siga as regras de isolamento e caso necessário, consulte um
        médico!
      </Text>
      {/* Adicionar botão que redireciona para recomendações*/}
      {/* <Button onPress={() => navigation.navigate('wearMask')} /> */}
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
    fontSize: 16,
    width: 300,
    textAlign: 'justify',
    fontFamily: 'Manrope-Regular',
  },
  imgStatus: {
    width: 300,
    height: 300,
    alignItems: 'center',
    marginTop: 100,
  },
  body: {
    alignItems: 'center',
  },
});
