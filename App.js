import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen'
import QRScanner from './src/screens/QRScanner'
import QRGenerator from './src/screens/QRGenerator'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  QRScanner: {
    screen: QRScanner,
  },
  QRGenerator: {
    screen: QRGenerator,
  },
});

export default class App extends Component {
  render(){
    return <AppNavigator />
  }
}