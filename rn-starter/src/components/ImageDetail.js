import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import STYLES from '../styles'

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View style={[styles.container, STYLES.center]}>
      <Image source={imageSource} />
      <View style={[STYLES.container, styles.textContainer]}>
        <Text >{title} SCORE: {score}</Text>
      </View>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20 
  }, 
  textContainer: {
    alignItems: 'center'
  }
})