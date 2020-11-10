import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import STYLES from '../styles'

const ResultShowScreen = props => {
  const { params } = props.route
  console.log('PARAMS on Result SHOW', params) // REMOVE 
  return (
    <View>
      <Text>Result Show Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultShowScreen