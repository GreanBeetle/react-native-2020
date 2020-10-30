import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native"
import STYLES from '../styles'
import COLORS from '../colors'

const HomeScreen = ({ navigation }) => {
  console.log('navigation object', navigation)
  let content

  // button created using TouchableOpacity
  // highly customizable 
  const CustomButton = ({ onPress, title }) => 
    <TouchableOpacity onPress={onPress}>
      <View style={[STYLES.center, styles.touchableOpacity]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  
  // button using the "button primitive" 
  const button = <Button title="components demo" onPress={() => navigation.push('Components')} />
 
  content = (
    <View style={STYLES.centered}>
      <CustomButton title="component demo" onPress={() => navigation.push('Components')} />
      <CustomButton title="list demo" onPress={() => navigation.push('List')} />
      <CustomButton title="image demo" onPress={() => navigation.push('Image')} />
      <CustomButton title="counter demo" onPress={() => navigation.push('Counter')} />
      <CustomButton title="colors demo" onPress={() => navigation.push('Color')} />
      <CustomButton title="square demo" onPress={() => navigation.push('Square')} />
    </View>
  )

  return content  
} 


const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 10,
    height: 60, 
    width: 300, 
    borderRadius: 30, 
    backgroundColor: COLORS.oceanBlueBlue
  }, 
  text: {
    color: COLORS.oceanBlueAqua
  }
});

export default HomeScreen;