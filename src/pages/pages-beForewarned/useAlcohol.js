
import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const useAlcohol = ({ navigation }) => (
    <View style={styles.container}>
       
        <View>
        <View style={styles.border}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assests/logo_useAlcohol.png')}>
            </Image>
            </View>
        </View>
        <View  style={styles.body}>
        <Text style={{alignItems: 'center', fontSize: 18,  fontWeight: 'bold',}}> 
            use alcool
         </Text>
            <Text style={styles.text}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae
         </Text>
        </View>
        <View style={styles.button}>
        <Icon name="cancel" 
          size={58} 
          color="#2A56C6" 
          onPress={() => navigation.navigate('home')}
        />
    </View>
    </View>
);

useAlcohol.navigationOptions = {
    title: 'useAlcohol',
}

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
        width: 120,
        marginTop: 30,
        height: 100,
    },
    text: {
        width: 250,
        marginTop: 10,
        textAlign: 'justify',
    },
    border: {
        borderRadius: 150,
        width: 150,
        height: 150,
        marginBottom: 20,
        backgroundColor: 'white',
        textAlign: 'center',
        alignItems: 'center'
    },
});




