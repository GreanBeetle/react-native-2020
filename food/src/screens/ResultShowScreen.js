import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useBusiness from '../hooks/useBusiness'
import STYLES from '../styles'

const ResultShowScreen = props => {
  const { id } = props.route.params
  const [results, errorMessage] = useBusiness(id)
   
  return (
    <View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results ? results.alias : 'no results yet'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultShowScreen