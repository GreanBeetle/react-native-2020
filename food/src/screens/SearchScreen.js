import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { SearchBar } from '../components'
import STYLES from '../styles' // no unused styles

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')

  const onTermSubmit = () => console.log(`searching ${term}!`)
  
  return (
    <SafeAreaView>
      <SearchBar 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => onTermSubmit()} 
        term={term} />
      <Text>SearchScreen</Text>
      <Text>{term}</Text>
      <Button title="test" onPress={() => navigation.push('Test')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen

