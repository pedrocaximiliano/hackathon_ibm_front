
import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import ButtonComponent from '../components/button';

const forewarned = ({ navigation }) => (
    <View style={styles.container}>
        <View>
            <Image
                style={styles.tinyLogo}
                source={require('../assests/logo_forewarned.png')}>
            </Image>
        </View>
        <View style={styles.body}>
            <Text style={styles.text}>
            Aqui você vai conseguir saber como se prevenir e encontrar os principais dados sobre o corona vírus, 
            quais o número de infectados assim como o número de recuperados e muito mais!
            </Text>
        </View>
        <ButtonComponent navigation={navigation} path={'home'}
        />
    </View>
);

forewarned.navigationOptions = {
    title: 'previna-se',
}

export default forewarned;

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
        resizeMode: "contain",
    },
    text: {
        width: 250,
        textAlign: 'justify',
    },
});



