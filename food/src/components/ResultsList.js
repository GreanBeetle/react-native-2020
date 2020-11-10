import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { ResultDetail } from './index'

const ResultsList = ({ results, title }) => {
  console.log('results', results) // REMOVE 
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({item}) => <ResultDetail item={item} />}
        keyExtractor={item => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default ResultsList