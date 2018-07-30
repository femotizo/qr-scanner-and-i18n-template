import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export default class App extends Component {
  render(){
    return <AppNavigator />
  }
}