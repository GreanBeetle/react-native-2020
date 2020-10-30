import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native"
import { STYLES } from '../styles'

const HomeScreen = ({ navigation }) => {
  console.log('nav object', navigation)
  let content

  // using the "button primitive" 
  const button = (
    <View style={STYLES.centered}>
      <Text>what up</Text>
      <Button title="components demo" onPress={() => navigation.push('Components')} />
      <Button title="list demo" onPress={() => navigation.push('List')} />
    </View>
  )

  // button created with touchable opacity
  // highly customizable 
  const touchableOpacity = (
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
      <TouchableOpacity onPress={() => navigation.push('Image')}>
        <View style={[STYLES.center, styles.touchableOpacity]}>
          <Text style={styles.text}>image demo</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
  content = touchableOpacity
  return content 
} 


const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 10,
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