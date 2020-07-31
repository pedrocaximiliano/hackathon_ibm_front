
import React from 'react';

import { View, StyleSheet, Text, Button, ScrollView, SafeAreaView ,Image} from 'react-native';


const AlertThirdStage = ({navigation})=> {
    return (
        <SafeAreaView style={styles.scroll}>
            <ScrollView>
            <View style={styles.container}>
            <Image
                    style={styles.tinyLogo}
                    source={require('../../assests/logo_check.png')}>
                </Image>
                    <Text style={styles.text}>
                        Mantenha as recomendações médicas e siga as regras de isolamento {'  '}
                    </Text>
                    <Text style={styles.textinformation}>
                        Obrigado pela sua participação!
                    </Text>
                    <Button title='Home' onPress={() => navigation.navigate('home')} /> 
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
export default AlertThirdStage;

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    scroll: {
        flex: 1,
    },
    textContainer: {
        width: 250,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 15,
        width: 250,
        textAlign: 'justify',
        alignItems: 'center',
    },
    textinformation: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    icon: {
        marginTop: 20,
        textAlign: 'center',
        alignItems: 'center',
    },
    iconPhone: {
        marginTop: 20,
        textAlign: 'center',
        alignItems: 'center',
    },
    textPhone: {
        fontSize: 14,
        borderRadius: 15,
        width: 130,
        height: 70,
        backgroundColor: '#2A56C6',
        textAlign: 'center',
        color: '#ccc',
        padding: 20,
        alignItems: 'center'
    },
    body: {
        alignItems: 'center',
    },
    tinyLogo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
});




