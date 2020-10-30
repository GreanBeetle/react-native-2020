import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ImageDetail } from '../components'
import { STYLES } from '../styles'

const ImageScreen = () => {
  return (
    <View style={STYLES.centered}>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View> 
  ) 
}

export default ImageScreen

const styles = StyleSheet.create({})