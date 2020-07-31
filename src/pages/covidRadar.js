import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import ButtonComponent from '../components/button';

const covidRadar = ({navigation}) => (
  <View style={styles.container}>
    <View>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo_conexao.png')}></Image>
    </View>
    <View style={styles.body}>
      <Text style={styles.text}>
        Temos o Radar Covid! Esta ferramenta te notifica quando você pode ter
        encontrado uma pessoa com covid-19. Nenhum dado pessoal é armazenado, é
        tudo anônimo! Ao testar positivo você opta por notificar as pessoas com
        quem acabou passando perto.
      </Text>
    </View>
    <ButtonComponent navigation={navigation} path={'watson'} />
  </View>
);

export default covidRadar;

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
  },
  tinyLogo: {
    marginTop: 30,
    width: 210,
    height: 210,
  },
  text: {
    fontSize: 16,
    width: 300,
    textAlign: 'justify',
    fontFamily: 'Manrope-Regular',
  },
});
