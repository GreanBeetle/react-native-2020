import React, { useState } from 'react'
import { 
  SafeAreaView, 
  View, 
  Button, 
  StyleSheet, 
  Dimensions, 
  FlatList 
} from 'react-native'
import STYLES from '../styles'

const ColorScreen = () => {
  const side = Dimensions.get('window').width / 4 
  const ColorView = ({ color }) => <View style={{ height: side, width: side, backgroundColor: color }} />
  const [colors, setColors] = useState([])

  const addColor = () => setColors([...colors, randomRGB()])
  
  return (
    <SafeAreaView style={STYLES.centered}>
      <Button title="add color" onPress={() => addColor()}/>
      <FlatList 
        horizontal
        data={colors}
        renderItem={({item}) => <ColorView color={item}/>} 
        keyExtractor={item => item}/>
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