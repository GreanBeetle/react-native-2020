import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import STYLES from './src/styles'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const App = () => {
  return (
    <View style={STYLES.centered}>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({ })

export default gestureHandlerRootHOC(App) 
