import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const ResultsList = ({ results, title }) => {
  console.log('results', results) // REMOVE 
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={ ({item}) => <Text>Name: {item.name} Price: {item.price}</Text> }
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