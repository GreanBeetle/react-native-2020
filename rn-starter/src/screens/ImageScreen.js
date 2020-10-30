import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ImageDetail } from '../components'
import { STYLES } from '../styles'

const ImageScreen = () => {
  return (
    <View style={STYLES.centered}>
      <ImageDetail title="beach" imageSource={require("../../assets/beach.jpg")}/>
      <ImageDetail title="forest" imageSource={require("../../assets/forest.jpg")}/>
      <ImageDetail title="mountain" imageSource={require("../../assets/mountain.jpg")}/>
    </View> 
  ) 
}

export default ImageScreen

const styles = StyleSheet.create({

})