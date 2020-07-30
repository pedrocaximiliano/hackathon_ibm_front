
import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const useAlcohol = ({ navigation }) => (
    <View style={styles.container}>
       
        <View>
            <Image
                style={styles.tinyLogo}
                source={require('../../assests/logo_useAlcohol.png')}>
            </Image>
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
          onPress={() => navigation.navigate('Home')}
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
        width: 150,
        height: 150,
    },
    text: {
        width: 250,
        textAlign: 'justify',
    },
});




