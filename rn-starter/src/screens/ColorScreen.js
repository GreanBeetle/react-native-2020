import React, { useState } from 'react'
import { SafeAreaView, View, Button, StyleSheet, Dimensions } from 'react-native'
import STYLES from '../styles'

const ColorScreen = () => {
  const side = Dimensions.get('window').width / 4 
  const ColorView = ({ color }) => <View style={{ height: side, width: side, backgroundColor: color }} />
  const [colors, setColors] = useState([])

  const addColor = () => {
    const newColor = <ColorView color={randomRGB()} />
    setColors([...colors, newColor])
  }

  return (
    <SafeAreaView style={STYLES.centered}>
      <Button title="add color" onPress={() => addColor()}/>
      <View style={styles.colorsContainer}>
        {colors.map(e => e)}
      </View>
    </SafeAreaView>
  )
}

const randomRGB = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
   
const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  colorsContainer: {
    flex: 3,
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    alignItems: 'flex-start'
  }
})

export default ColorScreen 