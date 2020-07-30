import React, { useEffect, useState } from 'react';

import { View, Button, Text, StyleSheet } from 'react-native';

const main = ({ navigation }) => (
  <>
    <View style={{ flex: 1, margin: 6 }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>
            Temos o Radar Covid! Esta ferramenta te notifica quando você pode ter encontrado uma pessoa
            com covid-19. Nenhum dado pessoal é armazenado, é tudo anônimo! Ao testar positivo você
            opta por notificar as pessoas com quem acabou passando perto.
            Temos o Radar Covid! Esta ferramenta te notifica quando você pode ter encontrado uma pessoa
            com covid-19. Nenhum dado pessoal é armazenado, é tudo anônimo! Ao testar positivo você
            opta por notificar as pessoas com quem acabou passando perto.
         </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          color={'#2A56C6'}
          title="aceito os termos"
          onPress={() => navigation.navigate('radarCovid')}
        />
      </View>
    </View>
  </>
);

main.navigationOptions = {
  title: 'main',
}

export default main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 250,
    textAlign: 'justify',
  },
  body: {
    alignItems: 'center',
  }
});