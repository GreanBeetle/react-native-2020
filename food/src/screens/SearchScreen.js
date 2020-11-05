import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import STYLES from '../styles'

const SearchScreen = ({ navigation }) => {
  return (
    <View style={STYLES.centered}>
      <Text>SearchScreen</Text>
      <Button title="test" onPress={() => navigation.push('Test')} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
