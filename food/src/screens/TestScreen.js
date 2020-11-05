import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import STYLES from '../styles'

const TestScreen = ({ navigation }) => {
  return (
    <View style={STYLES.centered}>
      <Text>Test Screen </Text>
      <Button title="home" onPress={() => navigation.pop()} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TestScreen