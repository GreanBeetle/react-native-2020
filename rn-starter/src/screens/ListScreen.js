import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'
import { STYLES } from '../styles'

const ListScreen = () => {
  const list = [
    { name: 'Hans', age: 99 },
    { name: 'Franz', age: 88 },
    { name: 'Jane', age: 77 },
    { name: 'Miname', age: 66 },
    { name: 'Mona', age: 55 },
    { name: 'Mina', age: 44 },
    { name: 'Myrna', age: 33 },
    { name: 'Micah', age: 22 },
    { name: 'Myopa', age: 11 },
    { name: 'Maca', age: 'zero, bitches' },
    { name: 'Nana', age: 111 },
    { name: 'Nina', age: 222 },
    { name: 'Nona', age: 333 },
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
        renderItem={({item}) => <Text style={styles.textStyle}>{item.name}: age {item.age}</Text> } 
        
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