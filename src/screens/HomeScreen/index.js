import React, { Component } from 'react'
import {
  View, 
  Text,
  Button
} from 'react-native'
import { strings, setLocale } from '../../../locales/i18n';



export default class HomeScreen extends Component {

  handleLanguageChange = (locale) => {
    setLocale(locale)
    this.forceUpdate()
  }

  render () {
    return <View>
      <Text>{strings('home.welcome', { name: "Jon Doe" })}</Text>

      <View>
        <Button 
          onPress={() => this.handleLanguageChange('pt')}
          title={"PT"}
          />
        <Button 
          onPress={() => this.handleLanguageChange('en')}
          title={"EN"}
          />
        <Button 
          onPress={() => this.handleLanguageChange('es')}
          title={"AR"}
          />
      </View>
    </View>
  }
}