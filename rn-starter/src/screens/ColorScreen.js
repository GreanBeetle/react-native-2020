/*
  FLATLIST NOTE
  numColumns is a beautiful little trick!
  it will make the resulting flatlist spill out as if it had the following
  style object

      {flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap'}

  basically it puts everything in nice horizontal rows
  specify how many columns you want
  and each element will be placed from left-to-right, top-to-bottom
  like so

      <one /> <two /> <three /> <four />
      <five /> <six /> <seven /> <eight />
      <nine /> <ten /> <eleven /> <twelve />
      <thirten />

  etc. this ^ is with 4 columns, i.e.  <FlatList numColumns={4} />
  2 columns would be, i.e. <FlatList numColumns={2} />

      <one /> <two />
      <three /> <four />
      <five /> etc..
*/
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
        numColumns={4}
        data={colors}
        renderItem={({item}) => <ColorView color={item}/>} 
        keyExtractor={item => item}/>
    </SafeAreaView>
  )
}

const randomRGB = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
   
const styles = StyleSheet.create({})

export default ColorScreen 