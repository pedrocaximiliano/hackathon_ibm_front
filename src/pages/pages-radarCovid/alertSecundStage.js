
import React, {useState }from 'react';

import { View, StyleSheet, Text, Linking, ScrollView, SafeAreaView,Button, TextInput  } from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';

function AlertSecundStage({navigation})  {

    const [code, setCode] = useState();

    function sendCode() {

        if (code) {
            alert('codigo enviado');
             navigation.navigate("alertThirdStage")

        } else {
            alert('digie o codigo')
        }
        
        //apos enviar o codigo para a API receber um response de 'ok' e limpar estado (code)
        
        setCode('')

    }

    return (
        <SafeAreaView style={styles.scroll}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.icon}>
                        <IconOcticons name="alert" size={120} color="red" />
                    </Text>
                    <Text style={styles.text}>
                        Mantenha as recomendações médicas e siga as regras de isolamento
                    </Text>
                    <TextInput
                        maxLength={10}
                        style={styles.input}
                        placeholder="insira o código"
                        autoCorrect={false}
                        value={code}
                        onChangeText={setCode}
                        requered
                        />
                    <Button title="Enviar" onPress={() => sendCode()}>
                    </Button>
                    <Text style={styles.textinformation}>
                        Nenhuma informação sua será compartilhada!
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
export default AlertSecundStage;

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
        alignItems: 'center',
        marginTop: 40
    },
    body: {
        alignItems: 'center',
    },
    input: {
        marginTop: 10,
        height: 60,
        width: '90%',
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
        borderColor: 'gray',
      },
});




