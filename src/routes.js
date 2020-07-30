import React from 'react';

import Main from './pages/main';
import CovidRadar from './pages/covidRadar';
import Watson from './pages/watson';
import WatsonMsg from './pages/watsonMsg';
import Welcome from './pages/welcome';
import Forewarned from './pages/forewarned';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

{/* //rotas previna-se */}
import UseAlcohol from './pages/pages-beForewarned/useAlcohol';
import WashHands from './pages/pages-beForewarned/washHands';
import WearMask from './pages/pages-beForewarned/wearMask';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {


function handlerOption(name) {
    const routerOptions = {
        title: name,
        headerStyle: {
            backgroundColor: '#2A56C6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    return routerOptions
}

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Main} name="política de privacidade" options={handlerOption('Política de privacidade')}/>
                <Stack.Screen component={Home} name="Home" options={handlerOption('Home')}/>
                <Stack.Screen name="radarCovid" component={CovidRadar} options={handlerOption('Radar-Covid')}/>
                <Stack.Screen name="watson" component={Watson} options={handlerOption('Chat para dúvidas')}/>
                <Stack.Screen name="Bem vindo!" component={Welcome} options={handlerOption('Bem Vindo !')}/>
                <Stack.Screen name="previna-se!" component={Forewarned} options={handlerOption('Previna-se')}/>
                <Stack.Screen name="dashboard" component={Dashboard} options={handlerOption('Painel')}/>
                <Stack.Screen name="chatHelp" component={WatsonMsg} options={handlerOption('Chat')} />
                {/* //rotas previna-se */}
                <Stack.Screen name="washHands" component={WashHands} options={handlerOption('Previna-se')}/>
                <Stack.Screen name="wearMask" component={WearMask} options={handlerOption('Previna-se')}/>
                <Stack.Screen name="useAlcohol" component={UseAlcohol} options={handlerOption('Previna-se')}/>
           
            </Stack.Navigator>
        </NavigationContainer>
    )
}