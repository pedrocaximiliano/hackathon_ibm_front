import React from 'react';

import Main from './pages/main';
import CovidRadar from './pages/covidRadar';
import Watson from './pages/watson';
import watsonWebView from './pages/watsonWebView';
import Welcome from './pages/welcome';
import Forewarned from './pages/forewarned';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

import UseAlcohol from './pages/pages-beForewarned/useAlcohol';
import WashHands from './pages/pages-beForewarned/washHands';
import WearMask from './pages/pages-beForewarned/wearMask';

import Alert from './pages/pages-radarCovid/alert';
import Security from './pages/pages-radarCovid/security';
import Warning from './pages/pages-radarCovid/warning';

import {NavigationContainer} from '@react-navigation/native';

import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

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
        fontFamily: 'Manrope-Bold',
      },
    };
    return routerOptions;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
        headerMode="float">
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={handlerOption('Bem Vindo !')}
        />
        <Stack.Screen
          name="radarCovid"
          component={CovidRadar}
          options={handlerOption('Radar-Covid')}
        />
        <Stack.Screen
          name="watson"
          component={Watson}
          options={handlerOption('Chat para dúvidas')}
        />
        <Stack.Screen
          name="forewarned"
          component={Forewarned}
          options={handlerOption('Previna-se')}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={handlerOption('Home')}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={handlerOption('Painel')}
        />
        <Stack.Screen
          name="chatHelp"
          component={watsonWebView}
          options={handlerOption('Chat')}
        />

        {/* //routes be forewarned */}
        <Stack.Screen
          name="washHands"
          component={WashHands}
          options={handlerOption('Previna-se')}
        />
        <Stack.Screen
          name="wearMask"
          component={WearMask}
          options={handlerOption('Previna-se')}
        />
        <Stack.Screen
          name="useAlcohol"
          component={UseAlcohol}
          options={handlerOption('Previna-se')}
        />

        {/* //routes radar-covid */}
        <Stack.Screen
          name="alert"
          component={Alert}
          options={handlerOption('Radar-Covid')}
        />
        <Stack.Screen
          name="security"
          component={Security}
          options={handlerOption('Radar-Covid')}
        />
        <Stack.Screen
          name="warning"
          component={Warning}
          options={handlerOption('Radar-Covid')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
