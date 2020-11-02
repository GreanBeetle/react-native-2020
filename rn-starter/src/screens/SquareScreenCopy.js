/* 
This is the original version of SquareScreen. 
Here we manage state with useState hooks. 
In the revised version, we opt instead for reducers. 
*/
import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { ColorTuner } from '../components'
import STYLES from '../styles'

const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const random = () => Math.floor(Math.random() * 256)
  const [red, setRed] = useState(random())
  const [green, setGreen] = useState(random())
  const [blue, setBlue] = useState(random())

  const tune = (set, color) => color > 0 && color < 255 ? set(color) : null

  return (
    <SafeAreaView style={STYLES.centered}>
      <View style={styles.textContainer}>
        <Text>red {red} green {green} blue {blue}</Text>
      </View>
      <ColorTuner
        color="red"
        onPressUp={() => tune(setRed, red + COLOR_INCREMENT)}
        onPressDown={() => tune(setRed, red - COLOR_INCREMENT)} />
      <ColorTuner
        color="green"
        onPressUp={() => tune(setGreen, green + COLOR_INCREMENT)}
        onPressDown={() => tune(setGreen, green - COLOR_INCREMENT)} />
      <ColorTuner
        color="blue"
        onPressUp={() => tune(setBlue, blue + COLOR_INCREMENT)}
        onPressDown={() => tune(setBlue, blue - COLOR_INCREMENT)} />
      <View style={[styles.colorSquare, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  colorSquare: {
    height: 100,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    margin: 20
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20
  }
})

export default SquareScreen 