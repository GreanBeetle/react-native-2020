import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native"
import { STYLES } from '../styles'

const HomeScreen = ({ navigation }) => {

  // using the "button primitive" 
  let content = (
    <View style={STYLES.centered}>
      <Text>what up</Text>
      <Button title="components demo" onPress={() => navigation.push('Components')} />
      <Button title="list demo" onPress={() => navigation.push('List')} />
    </View>
  )

  // button created with touchable opacity
  // highly customizable 
  let buttonTouchableOpacity = (
    <View style={STYLES.centered}>
      <Text>what up</Text>
      <TouchableOpacity onPress={() => navigation.push('Components')}>
        <View style={[STYLES.center, styles.touchableOpacity]}>
          <Text style={styles.text}>component demo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('List')}>
        <View style={[STYLES.center, styles.touchableOpacity]}>
          <Text style={styles.text}>list demo</Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  content = buttonTouchableOpacity
  return content 
} 


const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 25,
    height: 60, 
    width: 300, 
    borderRadius: 30, 
    backgroundColor: '#EA2027'
  }, 
  text: {
    color: '#f5f6fa'
  }
});

export default HomeScreen;