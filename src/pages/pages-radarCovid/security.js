
import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import IconIonicons from 'react-native-vector-icons/MaterialIcons';

export default function security() {
        return (
                <View style={styles.container}>
                        <Text style={styles.textContainer}>
                                Você está seguro!
                            </Text>
                        <Text style={styles.icon}>
                                <IconIonicons name="security" size={150} color="#2A56C6" />
                        </Text>
                        <Text style={styles.textinformation}>
                        Continue seguindo as medidas de isolamento! Você está mandando bem!
                        </Text>
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                marginTop: '10%',
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'space-between',
                flex: 1,
        },
        textContainer: {
                width: 250,
                textAlign: 'center',
                alignItems: 'center',
                fontSize: 24,
                fontWeight: 'bold',
        },
        text: {
                width: 250,
                textAlign: 'justify',
                alignItems: 'center',
        },
        textinformation: {
                textAlign: 'center',
                alignItems: 'center',
                marginBottom: 20
        },
        icon: {
                textAlign: 'center',
                alignItems: 'center',
        },
        body: {
                alignItems: 'center',
        }
});




