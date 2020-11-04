import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import COLORS from '../colors'

const BoxScreen = () => {
  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textOne}>Child #2</Text>
        <Text style={styles.textOne}>Child #3</Text>
      </View>
      <View style={styles.viewAbsolute}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textAbsolute}>Child #2</Text>
        <Text style={styles.textOne}>Child #3</Text>
      </View>
      <View style={styles.viewThree}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textOne}>Child #2</Text>
        <Text style={styles.textOne}>Child #3</Text>
      </View>
      <View style={styles.viewFour}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textTwo}>Child #2</Text>
        <Text style={styles.textThree}>Child #3</Text>
      </View>
      <View style={styles.viewFive}>
        <Text style={styles.textFive}>Child #1</Text>
        <Text style={styles.textFour}>Child #2</Text>
        <Text style={styles.textFive}>Child #3</Text>
      </View>
      <View style={styles.viewTopBottomLeftRight}>
        <Text style={styles.textFive}>Child #1</Text>
        <Text style={styles.textTopBottomLeftRight}>Child #2</Text>
        <Text style={styles.textFive}>Child #3</Text>
      </View>
      <View style={styles.viewAbsoluteFillOBject}>
        <Text style={styles.text}>Child #1</Text>
        <Text style={styles.textAbsoluteFillObject}>Child #2</Text>
        <Text style={styles.text}>Child #3</Text>
      </View>
    </ScrollView>
  )
}

/* 
  <Parent flexDirection COLUMN /> 
    <----- alignItems ----->
              ^
              |
        justifyContent
              |
              v
  </Parent>
  <Parent flexDirection ROW />
                ^
                |
            alignItems 
                |
                v
      <----- justifyContent ----->
  </Parent>

  notes on "position: absolute" 
  position: 'relative' is the default, it means do things as usual  
  postion: 'absolute' means "ignore and be ignored by sibling elements"
  however 'absolute' will still obey some of the parents' flex-box rules
  in the textAbsolute example, note that 
  textAbsolute ignores the parent rule alignItems: 'stretch'! 
  however textAbsolute would still obey alignItems: 'center'
  
  notes on "top" and "bottom" and "left" and "right" 
  these properties execute AFTER everything else 
  they are similar to margin except they ignore both sibling and parent elements

*/
const styles = StyleSheet.create({
  // styling for the postion: 'absolute' examples 
  viewAbsolute: {
    alignItems: 'stretch',
    borderWidth: 3,
    borderColor: COLORS.black,
    margin: 10,
  },
  textAbsolute: { 
    borderWidth: 1,
    borderColor: COLORS.red,
    position: 'absolute', // ignores its siblings! but may still position self relative to parent based on some parent property 
    fontSize: 24
  },
  
  // styling for top, bottom, left, right examples 
  viewTopBottomLeftRight: {
    height: 100,
    borderWidth: 3,
    borderColor: COLORS.black,
    margin: 10,
  },
  textTopBottomLeftRight: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.actionGreen,
    color: COLORS.actionGreen,
    left: 25 // top, bottom, left, and right execute AFTER everything else and ignore both sibling and parent elements 
  }, 

  // styling for absolute fill object 
  // a child element with absolute fill will complete fill its parent element 
  viewAbsoluteFillOBject: {
    borderWidth: 3, 
    borderColor: COLORS.oceanBlueBlue,
    height: 300,
    margin: 25
  },
  text: {
    borderWidth: 1, 
    borderColor: COLORS.oceanBlueAqua, 
  },
  textAbsoluteFillObject: {
    borderWidth: 1,
    borderColor: COLORS.red,
    color: COLORS.red,
    // position: 'absolute', // combine with top: 0, bottom: 0, left: 0, right: 0 to completely fill parent object  
    // top: 0,
    // bottom: 0, 
    // right: 0,
    // left: 0, 
    ...StyleSheet.absoluteFillObject // this is shorthand for postion: 'absolute', top: 0, bottom: 0, left: 0, right: 0
  },  

  // styling for flexbox, box-object examples  
  viewStyle: {
    alignItems: 'flex-start', // default is "stretch" i.e. take up as much space as possible
    flexDirection: 'row',   // child elements in rows or colums, default is column
    borderWidth: 3,
    borderColor: COLORS.black,
    margin: 10,
  },
  viewThree: { // default flexDirection 'column'
    alignItems: 'center', 
    justifyContent: 'space-around', // centers children vertically if direction 'column', horizontally if 'row'
    height: 100,
    borderWidth: 3,
    borderColor: COLORS.black,
    margin: 10,
  },
  viewFour: { // default flexDirection 'column'
    alignItems: 'center', 
    height: 100,
    borderWidth: 3,
    borderColor: COLORS.black,
    margin: 10,
  },
  viewFive: {
    alignItems: 'center', 
    height: 100,
    borderWidth: 3,
    borderColor: COLORS.black,
    margin: 10,
  }, 
  textOne: {
    borderWidth: 1, 
    borderColor: COLORS.red, 
  },  
  textTwo: {
    flex: 2, // flex is how much space to take up relative to other child elements
    borderWidth: 1,
    borderColor: COLORS.red,
  }, 
  textThree: {
    flex: 4, 
    borderWidth: 1,
    borderColor: COLORS.red,
  },
  textFour: {
    flex: 1,
    alignSelf: 'flex-end', // override alignItems on parent element 
    borderWidth: 1,
    borderColor: COLORS.red, 
  },  
  textFive: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.red,
    color: COLORS.red
  }, 
})

export default BoxScreen