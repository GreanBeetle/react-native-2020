/*
useContext() is the hook that allows us access to the 
Context object that, in our example, we created in context/BlogContext.js
*/
import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext' 
import STYLES from '../styles'
import { FontAwesome } from '@expo/vector-icons'
import COLORS from '../colors'


const IndexScreen = ({navigation}) => {
  /**
   * pass the ENTIRE createContext() object i.e. Context as BlogContext
   * to the useContext hook 
   */
  const { state, addBlogPost } = useContext(BlogContext)
  
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList 
        data={state}
        keyExtractor={ blogPost => blogPost.title}
        renderItem={({item}) => (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <FontAwesome name="trash" style={styles.icon} />
            </View>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 15, 
    borderBottomWidth: 1,
    borderColor: COLORS.borderGray
  }, 
  title: {
    fontSize: 18
  }, 
  icon: {
    fontSize: 24, 
    color: COLORS.red
  }
})

export default IndexScreen 