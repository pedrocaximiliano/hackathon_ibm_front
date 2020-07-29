import React from 'react';

import Main from './pages/main';
import CovidRadar from './pages/covidRadar';
import Watson from './pages/watson';

import Welcome from './pages/welcome';
import Forewarned from './pages/forewarned';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Main} name="política de privacidade"/>
                <Stack.Screen component={Home} name="Home"/>
                <Stack.Screen name="radar covid" component={CovidRadar} />
                <Stack.Screen name="watson" component={Watson} />
                <Stack.Screen name="Bem vindo!" component={Welcome} />
                <Stack.Screen name="previna-se!" component={Forewarned} />
                <Stack.Screen name="dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}