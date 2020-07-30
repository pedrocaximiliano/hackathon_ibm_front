
import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const forewarned = ({ navigation }) => (
    <>
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
                        <TouchableOpacity style={styles.text} onPress={() => alert('chamar api')}>
                            <Text style={{ color: '#ccc' }}>Radar-Covid</Text>
                            <Text><IconMaterialCommunityIcons name="radar" size={38} color="#ccc" /></Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('chatHelp')}>
                            <Text style={{ color: '#ccc' }}>ChatHelp</Text>
                            <Text><Icon name="warning" size={38} color="#ccc" /></Text>
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
    </>
);

forewarned.navigationOptions = {
    title: 'previna-se',
}

export default forewarned;

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