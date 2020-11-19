import 'react-native-gesture-handler'
import React from 'react'
import Navigation from './src/navigation'
import { BlogProvider } from './src/context/BlogContext'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const App = () => (
  <BlogProvider>
    <Navigation />
  </BlogProvider>
)

export default gestureHandlerRootHOC(App) 
