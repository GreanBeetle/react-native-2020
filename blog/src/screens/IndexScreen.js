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
  const { data, addBlogPost } = useContext(BlogContext)
  
  return (
    <View style={STYLES.center}>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList 
        data={data}
        keyExtractor={ blogPost => blogPost.title}
        renderItem={({item}) => <Text>{item.title}</Text>}/>
      <Button title="TestScreen" onPress={() => navigation.navigate('Test')}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen 