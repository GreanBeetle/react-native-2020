import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultDetail = ({ item }) => {
  console.log('item', item) // REMOVE 
  return (
    <View>
      <Text>DETAIL Name: {item.name} Price: {item.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultDetail