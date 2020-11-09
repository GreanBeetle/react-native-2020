import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { SearchBar } from '../components'
import yelp from '../api/yelp'
import COPY from '../copy'


const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchAPI = async () => {
    try {
      const response = await yelp.get(`/search`, {
        params: {
          limit: 50,
          term: term, 
          latitude: 45.5051,     
          longitude: -122.6750   
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage(COPY.errorMessage + error.message)
    }
  } 
  
  return (
    <SafeAreaView>
      <SearchBar 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchAPI()} 
        term={term} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results.length} results!</Text>
      <Button title="test" onPress={() => navigation.push('Test')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen

