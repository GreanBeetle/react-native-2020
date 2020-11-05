import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './src/navigation'
import STYLES from './src/styles'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const App = () => <Navigation />
 
const styles = StyleSheet.create({ })

export default gestureHandlerRootHOC(App) 
