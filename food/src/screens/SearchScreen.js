import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
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
 
  /*
    <React.Fragment>s are these <></> for example:  
      <>
        <ExampleElementOne />
        <ExampleElementTwo />
      </>
    Fragments are used to group multiple elements together. 
    Normally this is done with a <View /> element. 
    We use Fragments any time we do NOT want a 
    <View />  container to either overly constrain our grouping of elements 
    or expand too much. 
    Both of these cases require additonal styling 
    such as <View style={{flex:1}} /> 
    Fragments allow us to dispense with this extra styling. 
  */ 
  return (
    <>
      <SearchBar 
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)} 
        term={term} />
      {errorMessage ? <Text style={styles.textStyle}>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList 
          results={filterResultsByPrice('$')} 
          title={COPY.budget} 
          navigation={navigation}/>
        <ResultsList 
          results={filterResultsByPrice('$$')} 
          title={COPY.costEffective} 
          navigation={navigation}/>
        <ResultsList 
          results={filterResultsByPrice('$$$')} 
          title={COPY.pricey} 
          navigation={navigation}/>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center'
  }
})

export default SearchScreen

