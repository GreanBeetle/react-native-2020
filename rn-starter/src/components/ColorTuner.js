import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import STYLES from '../styles'
import COLORS from '../colors'

const ColorTuner = ({ color, onPressUp, onPressDown }) => {
  return (
    <View style={styles.container}>
      <Text>{color}</Text>
      <TouchableOpacity onPress={() => onPressUp()}>
        <View style={[styles.button, STYLES.center,{ borderBottomWidth: 0}]}>
          <Text style={styles.text}> + </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressDown()}>
        <View style={[styles.button, STYLES.center]}>
          <Text style={styles.text}> - </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

console.log('height?', Dimensions.get('window').height / 6)

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 6, 
    width: Dimensions.get('window').width - 40, 
    margin: 10,
    flexDirection: 'column'
  },
  button: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width - 40,
    borderWidth: 1, 
    borderColor: COLORS.purpleLovePink,
    backgroundColor: COLORS.purpleLovePurple
  }, 

 
  text: {
    color: COLORS.purpleLovePink, 
    fontSize: 18
  }
})

export default ColorTuner