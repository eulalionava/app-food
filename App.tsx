import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './src/navigator/Navigation'

export const App = ()=> {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
      <Navigation/>
    </NavigationContainer>
  )
}
