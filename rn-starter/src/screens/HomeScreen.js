import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native"
import STYLES from '../styles'

const HomeScreen = ({ navigation }) => {
  console.log('nav object', navigation)
  let content

  // button created using TouchableOpacity
  // highly customizable 
  const CustomButton = ({ onPress, title }) => 
    <TouchableOpacity onPress={onPress}>
      <View style={[STYLES.center, styles.touchableOpacity]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  
  // button using using the "button primitive" 
  const button = <Button title="components demo" onPress={() => navigation.push('Components')} />
 
  content = (
    <View style={STYLES.centered}>
      <CustomButton title="component demo" onPress={() => navigation.push('Components')} />
      <CustomButton title="list demo" onPress={() => navigation.push('List')} />
      <CustomButton title="image demo" onPress={() => navigation.push('Image')} />
      <CustomButton title="counter demo" onPress={() => navigation.push('Counter')} />
      <CustomButton title="color demo" onPress={() => navigation.push('Color')} />
    </View>
  )

  return content  
} 


const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 10,
    height: 60, 
    width: 240, 
    borderRadius: 30, 
    backgroundColor: '#EA2027'
  }, 
  text: {
    color: '#f5f6fa'
  }
});

export default HomeScreen;