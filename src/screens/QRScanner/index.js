import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner'

export default class QRScanner extends Component {

  static navigationOptions = {
    title: 'QR Code Scanner',
  }

  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err))
  }

  render () {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        fadeIn
        showMarker
        reactivate
        customMarker={
          <View
            style = {
              styles.marker
            }
          />
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  marker: {
    width: '65%',
    height: '65%',
    borderRadius: 20,
    borderWidth: 12,
    borderColor: 'rgba(255, 255, 255, .4)',
  },
});