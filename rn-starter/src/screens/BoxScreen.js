import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import STYLES from '../styles'
import COLORS from '../colors'

const BoxScreen = () => {
  console.log('styles', styles) // remove
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textOne}>Child #2</Text>
        <Text style={styles.textOne}>Child #3</Text>
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textOne}>Child #2</Text>
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
    </View>
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
*/
const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'flex-start', // default is "stretch" i.e. take up as much space as possible
    flexDirection: 'row',   // child elements in rows or colums, default is column
    height: 100,
    borderWidth: 3,
    borderColor: COLORS.black,
    margin: 10,
  },
  viewTwo: {
    alignItems: 'flex-end', 
    flexDirection: 'row', 
    height: 100,
    borderWidth: 3,
    borderColor: COLORS.black,
    margin: 10,
  },
  viewThree: { // default flexDirection 'column'
    justifyContent: 'space-around', // centers children vertically if direction 'column', horizontally if 'row'
    alignItems: 'center', 
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
  textOne: {
    borderWidth: 1, 
    borderColor: COLORS.red, 
  }, 
  textTwo: {
    flex: 2, 
    borderWidth: 1,
    borderColor: COLORS.red,
  }, 
  textThree: {
    flex: 4, 
    borderWidth: 1,
    borderColor: COLORS.red,
  }
})

export default BoxScreen