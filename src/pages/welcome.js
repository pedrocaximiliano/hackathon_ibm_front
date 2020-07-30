
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
        <View  style={styles.body}>
            <Text style={styles.text}> 
                Temos o Radar Covid! Esta ferramenta te notifica quando você pode ter encontrado uma pessoa
                com covid-19. Nenhum dado pessoal é armazenado, é tudo anônimo! Ao testar positivo você
                opta por notificar as pessoas com quem acabou passando perto.
         </Text>
        </View>
        <ButtonComponent navigation={navigation} path={'Home'}
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
        textAlign: 'justify',
    },
});



