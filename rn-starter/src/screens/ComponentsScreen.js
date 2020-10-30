import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
  const name = 'John'
  return (
    <View>
      <Text style={styles.text}>Getting started with RN</Text>
      <Text style={styles.name}>My name is {name}</Text>
    </View>
  ) 
}

export default ComponentsScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  }
})