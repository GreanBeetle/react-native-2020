import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import STYLES from '../styles'

const ShowScreen = ({route}) => {
  const { params } = route 
  return (
    <View>
      <Text>ShowScreen {params.title} - {params.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen