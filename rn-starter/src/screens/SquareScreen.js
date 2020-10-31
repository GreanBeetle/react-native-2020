import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { ColorTuner } from '../components'
import STYLES from '../styles'

const SquareScreen = () => {
  const random = () => Math.floor(Math.random() * 256)
  const [red, setRed] = useState(random())
  const [green, setGreen] = useState(random())
  const [blue, setBlue] = useState(random())

  const tune = (set, number) => { 
    const okay = number > 0 && number < 255 
    if (okay) set(number)
  }  

  return (
    <SafeAreaView style={STYLES.centered}>
      <View style={styles.textContainer}>
        <Text>red {red} green {green} blue {blue}</Text>
      </View>
      <ColorTuner 
        color="red"
        onPressUp={() => tune(setRed, red + 1)} 
        onPressDown={() => tune(setRed, red - 1)}/>
      <ColorTuner
        color="green"
        onPressUp={() => tune(setGreen, green + 1)}
        onPressDown={() => tune(setGreen, green - 1)} />
      <ColorTuner
        color="blue"
        onPressUp={() => tune(setBlue, blue + 1)}
        onPressDown={() => tune(setBlue, blue - 1)} />
      <View style={[styles.colorSquare, {backgroundColor: `rgb(${red}, ${green}, ${blue})`}]}/>

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