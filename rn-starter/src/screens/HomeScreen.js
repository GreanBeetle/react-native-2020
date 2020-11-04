import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Button, TouchableOpacity } from "react-native"
import STYLES from '../styles'
import COLORS from '../colors'

const HomeScreen = ({ navigation }) => {
  console.log('navigation object', navigation)
  let content

  // button created using TouchableOpacity
  // highly customizable 
  const CustomButton = ({ onPress, title }) => 
    <TouchableOpacity onPress={onPress}>
      <View style={[STYLES.center, styles.customButton]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  
  // button using the "button primitive" 
  const button = <Button title="components demo" onPress={() => navigation.push('Components')} />
 
  content = (
    <SafeAreaView style={styles.content}>
      <CustomButton title="box object" onPress={() => navigation.push('Box')} />
      <CustomButton title="colors demo" onPress={() => navigation.push('Color')} />
      <CustomButton title="component demo" onPress={() => navigation.push('Components')} />
      <CustomButton title="counter demo" onPress={() => navigation.push('Counter')} />
      <CustomButton title="image demo" onPress={() => navigation.push('Image')} />
      <CustomButton title="list demo" onPress={() => navigation.push('List')} />
      <CustomButton title="square demo" onPress={() => navigation.push('Square')} />
      <CustomButton title="text input" onPress={() => navigation.push('Text')} />
    </SafeAreaView>
  )

  return content  
} 

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-around'

  }, 
  customButton: {
    height: 50, 
    width: 300, 
    borderRadius: 25, 
    backgroundColor: COLORS.oceanBlueBlue
  }, 
  text: {
    color: COLORS.oceanBlueAqua
  }
});

export default HomeScreen;