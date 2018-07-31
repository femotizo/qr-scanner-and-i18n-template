import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen'
import QRScanner from './src/screens/QRScanner'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  QRScanner: {
    screen: QRScanner,
  },
});

export default class App extends Component {
  render(){
    return <AppNavigator />
  }
}