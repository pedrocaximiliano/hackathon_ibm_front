import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  Image
} from 'react-native';


export default function watsonMsg() {

    const [message, setMessage] = useState([]);

    const [input, setInput] = useState([])

  function sendMessage() {

    renderItem(message);
   
    setInput([ ...input, message ]);

  };

  
  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
};

  const renderItem = ( items ) => {
    console.log('ccccc',items)

    // items.map(item => {

    //   return (
    //     <>
    //     <View style={styles.row}>
    //     <Image style={styles.avatar} />
    //     <View style={styles.rowText}>
    //       <Text style={styles.sender}>ggg</Text>
    //     </View>
    //   </View>
    //   </>
    // );
    // })
 
  }

    return (
        <>
        {/* {console.log('ddd',message)} */}
      <View style={styles.container}>
        <FlatList
         data={input}
         renderItem={() => renderItem(input)}
          inverted
        />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={input}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="digite sua dúvida"
              onChangeText={text => setMessage(text)}
            />
            <TouchableOpacity onPress={(text) => sendMessage(text)}>
              <Text style={styles.send}>enviar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10
  },
  rowText: {
    flex: 1
  },
  message: {
    fontSize: 18
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 20,

  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1
  },
  send: {
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20
  }
});





