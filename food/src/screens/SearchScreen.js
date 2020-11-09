import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { SearchBar } from '../components'
import yelp from '../api/yelp'


const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

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
      console.log('search API error', error)
    }
  } 
  
  return (
    <SafeAreaView>
      <SearchBar 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchAPI()} 
        term={term} />
      <Text>SearchScreen</Text>
      <Text>{term}</Text>
      <Text>{results.length} results!</Text>
      <Button title="test" onPress={() => navigation.push('Test')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen

