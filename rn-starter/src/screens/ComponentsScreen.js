import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import STYLES from '../styles'

const ComponentsScreen = () => {
  const name = 'John'
  return (
    <View style={STYLES.centered}>
      <Text style={styles.text}>Getting started with RN</Text>
      <Text style={styles.name}>My name is {name}</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  }
})

export default ComponentsScreen