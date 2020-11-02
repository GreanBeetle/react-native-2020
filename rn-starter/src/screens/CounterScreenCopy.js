/*
This is the original version of CounterScreen, where state is managed with the useState hook. 
*/
import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import STYLES from '../styles'

const CounterScreen = () => {
  /* 
    a note on precisely what hooks are 
    hooks are functions that add new functionality to function components 
  */
  const [counter, setCounter] = useState(0)

  /*
    NEVER directly modify the variable in state 
    never do this
    counter++
    as we've all learned from the beginning, simply use the setCounter function
    setCounter(88) or setCounter(counter + 1) or setCounter(counter - 1) or whatever 
  */

  return (
    <View style={STYLES.centered}>
      <Button title="increment" onPress={() => setCounter(counter + 1)} />
      <Button title="decrement" onPress={() => setCounter(counter - 1)} />
      <Button title="reset" onPress={() => setCounter(0)} />
      <Text>{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen