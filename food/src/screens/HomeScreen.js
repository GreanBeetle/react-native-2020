import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import STYLES from '../styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={STYLES.centered}>
      <Text>HomeScreen</Text>
      <Button title="test" onPress={() => navigation.push('Test')} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen
