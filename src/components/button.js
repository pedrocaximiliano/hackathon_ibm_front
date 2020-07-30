
import React from 'react';

import { View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const button = ({ path, navigation  }) => (
    <View style={styles.button}>
        <Icon name="arrow-with-circle-right" 
          size={58} 
          color="#2A56C6" 
          onPress={() => navigation.navigate(path)}
        />
    </View>
);

button.navigationOptions = {
    title: '1',
}

export default button;

const styles = StyleSheet.create({
    button: {
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



