import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

const alertThirdStage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.scroll}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/logo_check.png')}
          />
          <Text style={styles.text}>
            Mantenha as recomendações médicas e siga as regras de isolamento
            social!
            {'\n'}
          </Text>
          <Text style={styles.textInformation}>
            Obrigado pela sua participação! {'\n\n'}Todos contra o COVID!
          </Text>
          <Text
            style={styles.textPhone}
            onPress={() => navigation.navigate('home')}>
            Home
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default alertThirdStage;

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  scroll: {
    flex: 1,
  },
  textContainer: {
    width: 250,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 15,
    textAlign: 'justify',
    width: 350,
    fontSize: 16,
    fontFamily: 'Manrope-SemiBold',
  },
  textInformation: {
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
    fontSize: 20,
    width: 260,
    textAlign: 'justify',
    fontFamily: 'Manrope-Bold',
  },
  icon: {
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  iconPhone: {
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  textPhone: {
    fontSize: 20,
    borderRadius: 35,
    width: '30%',
    height: 55,
    backgroundColor: '#2A56C6',
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    fontFamily: 'Manrope-Bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  body: {
    alignItems: 'center',
  },
  tinyLogo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
