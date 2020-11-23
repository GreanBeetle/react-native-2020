/*
useContext() is the hook that allows us access to the 
Context object that, in our example, we created in context/BlogContext.js
*/
import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext' 
import STYLES from '../styles'

const IndexScreen = ({navigation}) => {
  /**
   * pass the ENTIRE createContext() object i.e. Context as BlogContext
   * to the useContext hook 
   */
  const { state, addBlogPost } = useContext(BlogContext)
  
  return (
    <View style={STYLES.center}>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList 
        data={state}
        keyExtractor={ blogPost => blogPost.title}
        renderItem={({item}) => <Text>{item.title}</Text>}/>
      <Button title="TestScreen" onPress={() => navigation.navigate('Test')}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen 