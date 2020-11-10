import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { ResultsList, SearchBar } from '../components'
import useResults from '../hooks/useResults'
import COPY from '../copy'

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [searchAPI, results, errorMessage] = useResults()

  /**
   * @param {string} price '$' or '$$' or '$$$'
   */
  const filterResultsByPrice = price => results.filter( result => result.price === price)
 
  return (
    <SafeAreaView>
      <SearchBar 
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)} 
        term={term} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.textStyle}>{results.length} results!</Text>
      <ResultsList results={filterResultsByPrice('$')} title={COPY.budget} />
      <ResultsList results={filterResultsByPrice('$$')} title={COPY.costEffective} />
      <ResultsList results={filterResultsByPrice('$$$')} title={COPY.pricey} />
      <Button title="test" onPress={() => navigation.push('Test')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    margin: 10
  }
})

export default SearchScreen

