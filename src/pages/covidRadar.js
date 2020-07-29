
import React, { useEffect, useState } from 'react';

import { View, Button, Text, StyleSheet, Image } from 'react-native';

import ButtonComponent  from '../components/button';




const covidRadar = ({ navigation }) => (
    <View style={styles.container}>
       
        <View>
            <Image
                style={styles.tinyLogo}
                source={require('../assests/logo_conexao.png')}>
            </Image>
        </View>
        <View  style={styles.body}>
            <Text style={styles.text}> 
                Temos o Radar Covid! Esta ferramenta te notifica quando você pode ter encontrado uma pessoa
                com covid-19. Nenhum dado pessoal é armazenado, é tudo anônimo! Ao testar positivo você
                opta por notificar as pessoas com quem acabou passando perto.
         </Text>
        </View>
        <ButtonComponent navigation={navigation} path={'watson'} />
        {/* <View style={styles.button}>
            <Button
                title="prosseguir"
                onPress={() => navigation.navigate('watson')}
            />
        </View> */}
    </View>
);

covidRadar.navigationOptions = {
    title: 'watson',
}

export default covidRadar;

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




