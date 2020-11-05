import React from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { SearchBar } from '../components'
import STYLES from '../styles'

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <SearchBar />
      <Text>SearchScreen</Text>
      <Button title="test" onPress={() => navigation.push('Test')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
