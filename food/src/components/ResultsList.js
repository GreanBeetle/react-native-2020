import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { ResultDetail } from './index'

const ResultsList = ({ results, title }) => {
  console.log('results', results) // REMOVE 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({item}) => <ResultDetail result={item} />}
        keyExtractor={item => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  }, 
  title: {
    fontSize: 20,
    fontWeight: 'bold', 
    marginLeft: 15
  }
})

export default ResultsList