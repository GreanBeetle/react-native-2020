import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'
import { STYLES } from '../styles'

const ListScreen = () => {
  const list = [
    { name: 'Hans'},
    { name: 'Franz' },
    { name: 'Jane' },
    { name: 'Miname' },
    { name: 'Mona' },
    { name: 'Mina' },
    { name: 'Myrna' },
    { name: 'Micah' },
    { name: 'Myopa' },
    { name: 'Maca' },
    { name: 'Nana' },
    { name: 'Nina' },
    { name: 'Nona' },
  ]

  return (
    <SafeAreaView style={STYLES.centered}>
      <FlatList
        // same as horiztonal={true}
        // makes list scroll horizontally 
        horizontal

        // hide whichever scrollbar you need to hide 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}

        data={list} 

        // destructure the { item } argument from element
        // if we did this renderItem={ element } we'd see element = { item: { id: x, name: y }}
        renderItem={({item}) => <Text style={styles.textStyle}>{item.name}</Text> } 
        
        // key must be unique
        // key must be string
        // key allows RN to target specific list items
        // this way, RN does not rerender entire list when a change is made
        keyExtractor={item => item.name} 
      />
    </SafeAreaView>
  )
} 


const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen