import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import STYLES from '../styles'

const ResultShowScreen = props => {
  const { id } = props.route.params
  console.log('id', id)
  return (
    <View>
      <Text>Result Show Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultShowScreen