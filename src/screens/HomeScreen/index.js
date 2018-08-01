import React, { Component } from 'react'
import {
  View, 
  Text,
  Button,
  StyleSheet
} from 'react-native'
import { strings, setLocale } from '../../../locales/i18n';


export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
    // header: null to hide the navigation bar 
  }

  handleLanguageChange = (locale) => {
    setLocale(locale)
    this.forceUpdate()
  }

  handleScannerButton = () => {
    this.props.navigation.navigate('QRScanner')
  }

  handleGeneratorButton = () => {
    this.props.navigation.navigate('QRGenerator')
  }

  render () {
    return <View>
      <Text style={styles.welcomeMessage}>{strings('home.welcome', { name: "Jon Doe" })}</Text>

      <View style={styles.langContainer}>
        <View
          style={styles.langButton}
        >
          <Button 
          onPress={() => this.handleLanguageChange('pt')}
          title={"PT"}
          />
        </View>
        <View
          style={styles.langButton}
        >
          <Button 
            onPress={() => this.handleLanguageChange('en')}
            title={"EN"}
            style={styles.langButton}
          />
        </View>
        <View
          style={styles.langButton}
        >
          <Button 
            onPress={() => this.handleLanguageChange('es')}
            title={"AR"}
            style={styles.langButton}
          />
        </View>
      </View>
      <Text style={styles.qrTitle}>{strings('home.qrTitle')}</Text>
      <Button
        onPress={this.handleScannerButton}
        title={'QRCode Scanner'}
        color={'#ff5d1e'}
      />
      <Button
        onPress={this.handleGeneratorButton}
        title={'QRCode Generador'}
        color={'#d2a606'}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  welcomeMessage: {
    color: '#000',
    fontSize: 18,
    padding: 32,
    textAlign: 'center',
  },
  langContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  langButton: {
    width: '30%',
  },
  qrTitle: {
    backgroundColor: '#d2d2d2',
    fontWeight: '500',
    padding: 12,
    textAlign: 'center',
  }
});