/*
useContext() is the hook that allows us access to the 
Context object that, in our example, we created in context/BlogContext.js
*/
import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Context as BlogContext } from '../context/BlogContext' 
import STYLES from '../styles'
import { FontAwesome } from '@expo/vector-icons'
import COLORS from '../colors'


const IndexScreen = ({ navigation }) => {
  /**
   * pass the ENTIRE createContext() object i.e. Context as BlogContext
   * to the useContext hook 
   */
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)
  
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList 
        data={state}
        keyExtractor={ blogPost => blogPost.title}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', item)}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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