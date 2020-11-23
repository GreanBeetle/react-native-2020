import 'react-native-gesture-handler'
import React from 'react'
import Navigation from './src/navigation'
import { Provider } from './src/context/BlogContext'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const App = () => (
  <Provider>
    <Navigation />
  </Provider>
)

export default gestureHandlerRootHOC(App) 
