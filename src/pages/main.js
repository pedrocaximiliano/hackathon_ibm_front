import React from 'react';

import { View, Button, Text, StyleSheet, AsyncStorage  } from 'react-native';

import { onSignIn } from "../services/auth";

export default function main ({ navigation }) {


  function _storeData() {
    // AsyncStorage.setItem(
    //   'key do dispositivo',
    // );
    onSignIn().then(() => navigation.navigate("home"));

  }

  return (
    <View style={{ flex: 1, margin: 6 }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. 
          Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. 
          Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. 
          Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus. 
          Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit dolor magna eget.
         </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          color={'#2A56C6'}
          title="aceito os termos"
          onPress={() => _storeData()}
        />
      </View>
    </View>
  )
};

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