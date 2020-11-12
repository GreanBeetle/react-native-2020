import React from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ResultDetail } from './index'

const ResultsList = ({ results, title }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false} // always remove scroll bar
        data={results}
        renderItem={({item}) => ( // TODO pass only ID as the navigation param, i.e. { id: item.id }, there's no need to pass the entire item object 
          <TouchableOpacity onPress={() => navigation.navigate('Result', item)}>  
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