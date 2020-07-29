
import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import ButtonComponent  from '../components/button';

const watson = ({ navigation }) => (
    <View style={styles.container}>
        <View>
            <Image
                style={styles.tinyLogo}
                source={require('../assests/logo_ibm_watson.png')}>
            </Image>
        </View>
        <View style={styles.body}>
            <Text style={styles.text}>
                Caso haja dúvidas que você gostaria de perguntar para alguém, pode perguntar ao Watson, o assistente virtual da IBM! Ele é inteligente o suficiente para entender suas perguntas e responder de acordo com as informações oficiais de órgãos governamentais e de saúde mundiais!
                    </Text>
        </View>
        <ButtonComponent navigation={navigation} path={'previna-se!'}
        />
    </View>
);

watson.navigationOptions = {
    title: 'watson',
}

export default watson;

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
    },


});



