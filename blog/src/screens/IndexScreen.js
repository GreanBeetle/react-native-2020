/*
useContext() is the hook that allows us access to the 
Context object that, in our example, we created in context/BlogContext.js
*/
import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import BlogContext from '../context/BlogContext'
import STYLES from '../styles'

const IndexScreen = ({navigation}) => {
  /**
   * pass the ENTIRE createContext() object i.e. BlogContext
   * to the useContext hook 
   */
  const blogPosts = useContext(BlogContext)
  
  return (
    <View style={STYLES.centered}>
      <FlatList 
        data={blogPosts}
        keyExtractor={ blogPosts => blogPosts.title}
        renderItem={({item}) => <Text>{item.title}</Text>}/>
      <Button title="TestScreen" onPress={() => navigation.navigate('Test')}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen 