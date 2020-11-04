import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import STYLES from '../styles'
import COLORS from '../colors'

const WIDTH = Dimensions.get('window').width
const ERROR_MESSAGE = 'name must be 5 characters!'

const TextScreen = () => {
  const [name, setName] = useState('')
  

  return (
    <View style={[STYLES.centered, styles.container]}>
      <Text>Enter name</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"  // ALWAYS use this prop 
        autoCorrect={false}    // ALWAYS use this prop 
        onChangeText={ text => setName(text) }  
        value={name}/>
      <Text>
        {name.length < 5 ? ERROR_MESSAGE : name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 40
  },
  input: {
    margin: 15,
    borderColor: COLORS.antarcticPurple,
    borderWidth: 1,
    borderRadius: 30,
    height: 60,
    width: WIDTH - 40,
    color: COLORS.antarcticAqua,
    paddingHorizontal: 20
 } 
})

export default TextScreen