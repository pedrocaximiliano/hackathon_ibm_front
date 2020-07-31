import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const useAlcohol = ({navigation}) => (
  <View style={styles.container}>
    <View>
      <View style={styles.border}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/logo_useAlcohol.png')}></Image>
      </View>
    </View>
    <View style={styles.body}>
      <Text
        style={{
          alignItems: 'center',
          fontSize: 20,
          fontFamily: 'Manrope-Bold',
        }}>
        Use ácool em gel
      </Text>
      <Text style={styles.text}>
        Considerado antisséptico, o álcool em gel ajuda a evitar o contágio pelo
        novo coronavírus. O recomendado pela Organização Mundial da Saúde (OMS)
        é pela Anvisa é usar soluções onde há concentração de 70% de álcool
        etílico.
      </Text>
    </View>
    <View style={styles.button}>
      <Icon
        name="cancel"
        size={58}
        color="#2A56C6"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  </View>
);

useAlcohol.navigationOptions = {
  title: 'useAlcohol',
};

export default useAlcohol;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
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
    width: 150,
    marginTop: 30,
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
