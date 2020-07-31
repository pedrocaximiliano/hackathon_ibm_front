import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Linking,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const alert = () => {
  return (
    <SafeAreaView style={styles.scroll}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textContainer}>
            Você foi identificado como positivo para covid-19!
          </Text>
          <Image
            source={require('../../assets/alert_status.png')}
            style={styles.imgStatus}
          />
          <Text style={styles.text}>
            Mantenha as recomendações médicas e siga as regras de isolamento{' '}
            <IconMaterialCommunityIcons
              name="medical-bag"
              size={20}
              color="#2A56C6"></IconMaterialCommunityIcons>
          </Text>
          <Text
            style={styles.iconPhone}
            onPress={() => Linking.openURL('tel:136')}>
            <IconEntypo name="phone" size={30} color="#fff"></IconEntypo>
            Dúvidas? Ligue agora!
            {/* Ou utilize nosso assistente virtual! */}
          </Text>
          {/* <Text style={styles.textPhone} onPress={() => Linking.openURL('tel:136')}>
                    telefone de emergência
                        </Text> */}
          <Text style={styles.textInformation}>
            Nenhuma informação sua será compartilhada!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default alert;

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
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: 'Manrope-Bold',
  },
  text: {
    marginTop: 15,
    textAlign: 'justify',
    width: 300,
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
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
  imgStatus: {
    width: 300,
    height: 300,
    alignItems: 'center',
    marginTop: 100,
  },
  iconPhone: {
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: 200,
    height: 40,
    color: '#fff',
    backgroundColor: '#2A56C6',
  },
  textPhone: {
    fontSize: 14,
    borderRadius: 15,
    width: 130,
    height: 70,
    backgroundColor: '#2A56C6',
    textAlign: 'center',
    color: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
  },
});
