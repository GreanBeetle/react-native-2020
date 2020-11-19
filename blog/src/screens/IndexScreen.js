import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import STYLES from '../styles'

const IndexScreen = ({navigation}) => {
  return (
    <View style={STYLES.centered}>
      <Text>IndexScreen</Text>
      <Button title="TestScreen" onPress={() => navigation.navigate('Test')}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen 