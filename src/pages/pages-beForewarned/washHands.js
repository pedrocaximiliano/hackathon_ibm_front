
import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import ButtonComponent  from '../../components/button';

const washHands = ({ navigation }) => (
    <View style={styles.container}>
       
        <View>
            <Image
                style={styles.tinyLogo}
                source={require('../../assests/logo_washHands.png')}>
            </Image>
        </View>
        <View  style={styles.body}>
        <Text style={{alignItems: 'center', fontSize: 18,  fontWeight: 'bold',}}> 
            lave as mãoes
         </Text>
            <Text style={styles.text}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae
         </Text>
        </View>
        <ButtonComponent navigation={navigation} path={'useAlcohol'} />
    </View>
);

washHands.navigationOptions = {
    title: 'washHands',
}

export default washHands;

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
        width: 130,
        height: 130,
    },
    text: {
        alignItems: 'center',
        width: 250,
        marginTop: 10,
        textAlign: 'justify',
    },
});




