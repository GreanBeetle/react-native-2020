import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { STYLES } from '../styles'

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View style={[STYLES.center, styles.container]}>
      <Image source={imageSource} />
      <Text style={STYLES.container} >{title}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
  }
})