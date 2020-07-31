
import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import ButtonComponent  from '../../components/button';

const wearMask = ({ navigation }) => (
    <View style={styles.container}>
       
        <View>
        <View style={styles.border}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assests/logo_useMask.png')}>
            </Image>
            </View>
        </View>
        <View  style={styles.body}>
        <Text style={{alignItems: 'center', fontSize: 18,  fontWeight: 'bold',}}> 
            use máscara
         </Text>
            <Text style={styles.text}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae
         </Text>
        </View>
        <ButtonComponent navigation={navigation} path={'washHands'} />
    </View>
);

wearMask.navigationOptions = {
    title: 'wearMask',
}

export default wearMask;

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    button: {
        marginBottom: 10,
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
        height: 120,
    },
    text: {
        width: 250,
        marginTop: 10,
        textAlign: 'justify',
    },
    border: {
        borderRadius: 150,
        width: 170,
        height: 170,
        marginBottom: 20,
        backgroundColor: 'white',
        textAlign: 'center',
        alignItems: 'center'
    },
});




