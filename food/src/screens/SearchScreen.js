import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { ResultsList, SearchBar } from '../components'
import useResults from '../hooks/useResults'

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [searchAPI, results, errorMessage] = useResults()

  return (
    <SafeAreaView>
      <SearchBar 
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)} 
        term={term} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results.length} results!</Text>
      <Button title="test" onPress={() => navigation.push('Test')} />
      <ResultsList />
      <ResultsList />
      <ResultsList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen

