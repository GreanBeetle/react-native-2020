import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'
import { STYLES } from '../styles'

const ListScreen = () => {
  const list = [
    { id: 0, name: 'Hank'},
    { id: 1, name: 'Bill' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Mina' },
    { id: 4, name: 'Mona' },
  ]

  return (
    <SafeAreaView style={STYLES.centered}>
      <Text>ListScreen</Text>
    </SafeAreaView>
  )
} 


const styles = StyleSheet.create({})

export default ListScreen