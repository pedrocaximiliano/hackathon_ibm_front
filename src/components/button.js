
import React from 'react';

import { View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const button = ({ path, navigation  }) => (
    <View style={styles.button}>
        <Icon name="arrow-forward" 
          size={58} 
          color="#999" 
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



