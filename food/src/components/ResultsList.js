import React from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ResultDetail from './ResultDetail'

const ResultsList = ({ results, title }) => {
  const navigation = useNavigation()
  if (!results.length) return null
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false} // always remove scroll bar
        data={results}
        renderItem={({item}) => (  
          <TouchableOpacity onPress={() => navigation.navigate('Business', {id: item.id})}>  
            <ResultDetail result={item} />
          </TouchableOpacity>
        )} 
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
    marginLeft: 15,
    marginBottom: 5
  }
})

export default ResultsList