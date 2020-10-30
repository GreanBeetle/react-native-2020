import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { ImageDetail } from '../components'
import { STYLES } from '../styles'

const ImageScreen = () => {
  return (
    <SafeAreaView style={STYLES.centered}>
      <ImageDetail 
        title="beach" 
        imageSource={require("../../assets/beach.jpg")} 
        score={7}/>
      <ImageDetail 
        title="forest" 
        imageSource={require("../../assets/forest.jpg")} 
        score={10}/>
      <ImageDetail 
        title="mountain" 
        imageSource={require("../../assets/mountain.jpg")} 
        score={9}/>
    </SafeAreaView> 
  ) 
}

export default ImageScreen

const styles = StyleSheet.create({

})