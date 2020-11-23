import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { 
  CreateScreen,
  IndexScreen, 
  TestScreen 
} from './screens'

const Stack = createStackNavigator()

const StackScreens = () => (
  <Stack.Navigator initialRouteName="Index">
    <Stack.Screen name="Index" component={IndexScreen} />
    <Stack.Screen name="Create" component={CreateScreen} />
    <Stack.Screen name="Test" component={TestScreen} />
  </Stack.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <StackScreens />
  </NavigationContainer>
)

export default Navigation 
