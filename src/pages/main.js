import React, { useEffect, useState } from 'react';

import { View, Button, Text, StyleSheet } from 'react-native';

const main = ({ navigation }) => (
  <>
    <View style={{flex: 1, margin: 6}}>
      <View style={styles.container}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit dolor magna eget.</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="aceito os termos"
          onPress={() => navigation.navigate('radar covid')}
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
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

});