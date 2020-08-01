import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function home({navigation}) {
  const [loading, setLoading] = useState(false);

  async function getCovidDatas() {
    // try {
    //     await fetch(`caminho da chamada`
    //     ).then(
    //         response => response.json()
    //     ).then(
    //         data => (setLoading(false), redirectRadarCovid(data)),
    //     )
    // } catch (error) {
    //     alert('erro, verifique a conexão com a internet');
    // }
    redirectRadarCovid('alertFirstStage');
  }

  function redirectRadarCovid(key) {
    switch (key) {
      case 'warning':
        return navigation.navigate('warning');
      case 'security':
        return navigation.navigate('security');
      case 'alert':
        return navigation.navigate('alert');
      case 'alertFirstStage':
        return navigation.navigate('alertFirstStage');
      case 'alertSecondStage':
        return navigation.navigate('alertSecondStage');
      case 'alertThirdStage':
        return navigation.navigate('alertThirdStage');
      default:
        return alert('erro busque novamente');
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imagem}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/logo_menu.png')}></Image>
        </View>
        <View style={styles.bigContainer}>
          <View style={styles.container}>
            <View>
              <TouchableOpacity onPress={() => getCovidDatas()}>
                <Text style={styles.text}>
                  Radar-Covid {'\n\n\n'}
                  <Text style={styles.subtext}>
                    Saiba seu status e notifique os outros!
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('chatHelp')}>
                <Text style={styles.text}>
                  AjudaChat {'\n\n\n'}
                  <Text style={styles.subtext}>
                    Converse com o Watson e tire suas dúvidas!
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('wearMask')}>
                <Text style={styles.text}>
                  Previna-se {'\n\n\n'}
                  <Text style={styles.subtext}>
                    Saiba o que fazer para se prevenir!
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('dashboard')}>
                <Text style={styles.text}>
                  Painel {'\n\n\n'}
                  <Text style={styles.subtext}>
                    Informações gerais do Coronavírus no mundo!
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default home;

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container: {
    marginTop: '5%',
    // height: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  imagem: {
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    borderRadius: 15,
    width: 160,
    height: 160,
    backgroundColor: '#2A56C6',
    textAlign: 'center',
    color: '#fff',
    margin: 20,
    padding: 20,
    alignItems: 'center',
    fontFamily: 'Manrope-Bold',
  },
  subtext: {
    fontSize: 12,
    alignItems: 'center',
    fontFamily: 'Manrope-SemiBold',
    textAlign: 'justify',
    color: '#fff',
  },
  tinyLogo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
