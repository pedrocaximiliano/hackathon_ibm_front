import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  Linking,
  ScrollView,
  SafeAreaView,
  Button,
  TextInput,
} from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';

function alertSecondStage({navigation}) {
  const [code, setCode] = useState();

  function sendCode() {
    if (code) {
      alert('Código enviado!');
      navigation.navigate('alertThirdStage');
    } else {
      alert('Digite o código!');
    }

    //apos enviar o codigo para a API receber um response de 'ok' e limpar estado (code)

    setCode('');
  }

  return (
    <SafeAreaView style={styles.scroll}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.icon}>
            <IconOcticons name="alert" size={120} color="red" />
          </Text>
          <Text style={styles.text}>
            Insira o código fornecido pelo médico ou especialista da saúde.
            {'\n'}
            Assim você poderá notificar outras pessoas de forma anônima e
            segura!
          </Text>
          <TextInput
            maxLength={10}
            style={styles.input}
            placeholder="Insira o código"
            autoCorrect={false}
            value={code}
            onChangeText={setCode}
            required
          />
          <Text style={styles.textPhone} onPress={() => sendCode()}>
            Enviar
          </Text>
          <Text style={styles.textInformation}>
            Nenhuma informação sua será compartilhada!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default alertSecondStage;

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
    fontSize: 16,
    width: 200,
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
  input: {
    marginTop: 50,
    height: 60,
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    borderColor: 'gray',
  },
});
