
import React from 'react';

import { View, StyleSheet, Text, Linking, ScrollView, SafeAreaView,Button } from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const alertFirstStage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.scroll}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textContainer}>
                        Você foi identificado como positivo para covid-19!
                        </Text>
                    <Text style={styles.icon}>
                        <IconOcticons name="alert" size={120} color="red" />
                    </Text>
                    <Text style={styles.text}>
                        Mantenha as recomendações médicas e siga as regras de isolamento {'  '}
                        <IconMaterialCommunityIcons name="medical-bag" size={20} color="#2A56C6"></IconMaterialCommunityIcons>
                    </Text>
                    <Text style={styles.textPhone}
                     onPress={() => navigation.navigate("alertSecundStage")}
                     >
                         Avisar possíveis infectados
                    </Text>
                    <Text style={styles.textinformation}>
                        Nenhuma informação sua será compartilhada!
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
export default alertFirstStage;

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
        fontSize: 12,
        borderRadius: 35,
        width: '50%',
        height: 50,
        backgroundColor: '#FF1C1C',
        textAlign: 'center',
        color: '#fff',
        padding: 10,
        alignItems: 'center',
        marginTop: 20
    },
    body: {
        alignItems: 'center',
    }
});




