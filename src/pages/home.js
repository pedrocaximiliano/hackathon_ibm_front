
import React, { useEffect, useState } from 'react';

import { View, Button, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

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
                        <TouchableOpacity onPress={() => alert('chamar api')}>
                            <Text style={styles.text}>Radar Covid</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('chatHelp')}>
                            <Text style={styles.text}>ChatHelp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity onPress={() => alert('chamar api')}>
                            <Text style={styles.text}>Precina-se</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
                            <Text style={styles.text}>Dashboard</Text>
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
        fontSize: 16,
        borderRadius: 15,
        width: 120,
        height: 100,
        backgroundColor: '#2A56C6',
        textAlign: 'center',
        marginTop: 5,
        padding: 20,
    },
    tinyLogo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
});