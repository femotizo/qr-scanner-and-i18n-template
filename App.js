import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen'

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

