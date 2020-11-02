import React, { useReducer } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { ColorTuner } from '../components'
import STYLES from '../styles'

const COLOR_INCREMENT = 15

/** 
  @param {object} state { red: number, green: number, blue: number }
  @param {object} action { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
*/ 
const reducer = (state, action) => {
  switch(action.colorToChange) {
    case 'red':
      return state.red + action.amount < 0 || state.red + action.amount > 255 
        ? state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount < 0 || state.green + action.amount > 255
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue': 
      return state.blue + action.amount < 0 || state.blue + action.amount > 255
        ? state
        : { ...state, blue: state.blue + action.amount }
    default:
      return state 
  }
}

const SquareScreen = () => { 
  /* 
    a reducer is a function that manages change to an object
    first argument to useReducer is the function that manipulates state, i.e. reducer()
    the second argument is the initial value for state, i.e. {red: 0, green: 0, blue: 0} 

    useReducer always returns two things 
    (1) a state object
    (2) a dispatch() function or "runMyReducer()" function that takes an action object
        for example dispatch({colorToChange: 'red, amount: -15})

    dispatch() is the technical name but it can be anything ... 
  */
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const {red, green, blue} = state

  return (
    <SafeAreaView style={STYLES.centered}>
      <View style={styles.textContainer}>
        <Text>red {red} green {green} blue {blue}</Text>
      </View>
      <ColorTuner 
        color="red"
        onPressUp={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})} 
        onPressDown={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}/>
      <ColorTuner
        color="green"
        onPressUp={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
        onPressDown={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})} />
      <ColorTuner
        color="blue"
        onPressUp={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
        onPressDown={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})} />
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