import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import STYLES from '../styles'

const TestScreen = ({navigation}) => {
  return (
    <View style={STYLES.centered}>
      <Text>Test Screen</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('Index')} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TestScreen 