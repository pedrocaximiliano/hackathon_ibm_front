
import React, {useEffect, useState }from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function home({ navigation })  {

    const [loading, setLoading] = useState(false);

    async function getCovidDatas() {
        // try {
        //     await fetch(`caminho da chamada`
        //     ).then(
        //         response => response.json()
        //     ).then(
        //         data => (setLoading(false), redirectRadarCovid(data)),
        //     )
        // } catch (error) {
        //     alert('erro, verifique a conexão com a internet');
        // }
        redirectRadarCovid('alert')
      }

    function redirectRadarCovid(key) {
        switch (key) {
            case 'warning':
                return navigation.navigate('warning')
            case 'security':
                return navigation.navigate('security')
            case 'alert':
                return navigation.navigate('alertFirstStage')
            default:
                return alert('erro busque novamente')
        }
    }

    return (
        <SafeAreaView>
        <ScrollView>

            <View style={styles.imagem}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assests/logo_menu.png')}>
                </Image>
            </View>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.text} onPress={() => getCovidDatas()}>
                        <Text style={{ color: '#ccc' }}>Radar-Covid</Text>
                        <Text><IconMaterialCommunityIcons name="radar" size={38} color="#ccc" /></Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('chatHelp')}>
                        <Text style={{ color: '#ccc' }}>ChatHelp</Text>
                        <Text><Icon name="chat" size={38} color="#ccc" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('wearMask')}>
                        <Text style={{ color: '#ccc' }}>Previna-se</Text>
                        <Text><Icon name="warning" size={38} color="#ccc" /></Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('dashboard')}>
                        <Text style={{ color: '#ccc' }}>Painel</Text>
                        <Text><IconMaterialIcons name="dashboard" size={38} color="#ccc" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
};

home.navigationOptions = {
    title: 'previna-se',
}

export default home;

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    imagem: {
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    text: {
        fontSize: 14,
        borderRadius: 15,
        width: 120,
        height: 100,
        backgroundColor: '#2A56C6',
        textAlign: 'center',
        color: '#ccc',
        marginTop: 4,
        padding: 20,
        alignItems: 'center'
    },
    tinyLogo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
});