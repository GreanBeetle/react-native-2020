import 'react-native-gesture-handler'
import React from 'react'
import Navigation from './src/navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const App = () => <Navigation />

export default gestureHandlerRootHOC(App) 
