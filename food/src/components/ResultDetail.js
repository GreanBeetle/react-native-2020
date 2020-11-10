import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import COLORS from '../colors'

const ResultDetail = ({ result }) => {
  console.log('result', result) // REMOVE 
  return (
    <View style={styles.container} >
      <Image source={{uri: result.image_url}} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.ratingAndResult}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5, 
    marginBottom: 5
  }, 
  name: {
    fontWeight: 'bold'
  },
  ratingAndResult: {
    color: COLORS.textGray
  }
})

export default ResultDetail