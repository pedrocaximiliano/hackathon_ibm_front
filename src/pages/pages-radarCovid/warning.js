
import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import IconIonicons from 'react-native-vector-icons/Ionicons';

export default function warning() {
        return (
        <View style={styles.container}>
                <Text style={styles.textContainer}>
                        Fique atento aos sintomas!
                </Text>
                <Text style={styles.icon}>
                        <IconIonicons name="alert-circle" size={150} color="#ffd700" />
                </Text>
                <Text style={styles.textinformation}>
                        Siga as regras de isolamento e caso necessário, consulte um médico!
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




