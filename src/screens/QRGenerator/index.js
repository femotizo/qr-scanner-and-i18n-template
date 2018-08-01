import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native'
import QRCode from 'react-native-qrcode'

export default class QRGenerator extends Component {

  static navigationOptions = {
    title: 'QR Code Generator',
  }

  state = {
    text: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ text: text })}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='black'
          fgColor='#9e9e9e'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#9e9e9e',
    flex: 1,
    justifyContent: 'center'
  },

  input: {
    backgroundColor: '#e6e4e4',
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    margin: 40,
    padding: 5,
    paddingLeft: 10,
    width: '70%',
  }
})