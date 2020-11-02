import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import STYLES from '../styles'

const AMOUNT = 7 

/**
 * @param {object} state {counter: number} 
 * @param {object} action {type: 'INCREMENT_NUMBER', payload: amount}
 */
const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER':
      return { counter: state.counter + action.payload } 
    case 'DECREMENT_COUNTER':
      return { counter: state.counter - action.payload } 
    case 'RESET_COUNTER':  
      return { counter: 0 } 
    default: 
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0})    
  return (
    <View style={STYLES.centered}>
      <Button title="increment" onPress={() => dispatch({type: 'INCREMENT_COUNTER', payload: AMOUNT})} />
      <Button title="decrement" onPress={() => dispatch({type: 'DECREMENT_COUNTER', payload: AMOUNT })} />
      <Button title="reset" onPress={() => dispatch({type: 'RESET_COUNTER' })} />
      <Text>{state.counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen