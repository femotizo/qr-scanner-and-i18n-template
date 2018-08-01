import React, { Component } from 'react'
import {
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { validateUrl } from '../../helpers/validateUrl';

export default class QRScanner extends Component {

  static navigationOptions = {
    title: 'QR Code Scanner',
  }

  state = {
    modalVisible: false,
    scannedText: ''
  }

  onSuccess(e) {
    if (validateUrl(e.data)) {
      Linking
        .openURL(e.data)
        .catch(err => console.error('An error occured', err))
    } else {
      this.setState({
        modalVisible: true,
        scannedText: e.data,
      })
    }
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  render () {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.hideModal()}>
          <View style={{ marginTop: 22 }}>
            <View style={{ textAlign: 'center' }}>
              <Text style={styles.modalTitle}>QR Text</Text>
              <Text style={styles.scannedText}>{this.state.scannedText}</Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  this.hideModal();
                }}>
                <Text style={styles.closeButtonText}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
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
  closeButton: {
    backgroundColor: 'black',
    marginTop: 50,
    padding: 12,
    textAlign: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  modalTitle: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
  },
  scannedText: {
    fontSize: 22,
    textAlign: 'center',
  },
})