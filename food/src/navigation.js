import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  SearchScreen,
  TestScreen
} from './screens'

const Stack = createStackNavigator()

const StackScreens = () => (
  <Stack.Navigator initialRouteName="Search">
    <Stack.Screen name="Search" component={SearchScreen} /> 
    <Stack.Screen name="Test" component={TestScreen} />
  </Stack.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <StackScreens />
  </NavigationContainer>
)

export default Navigation 
