import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  HomeScreen,
  TestScreen
} from './screens'

const Stack = createStackNavigator()

const StackScreens = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Test" component={TestScreen} />
  </Stack.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <StackScreens />
  </NavigationContainer>
)

export default Navigation 
