import React from 'react'
import { 
  View, 
  TextInput, 
  StyleSheet 
} from 'react-native' 
import { Feather } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import STYLES from '../styles'
import COLORS from '../colors'
import COPY from '../copy'

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput placeholder={COPY.search} style={styles.inputStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: COLORS.borderGray, 
    borderRadius: 5,
    flexDirection: 'row', 
    height: 50,
    margin: 15, 
  }, 
  iconStyle: {
    alignSelf: 'center', 
    fontSize: 36, 
    marginHorizontal: 10,
  }, 
  inputStyle: {
    flex: 1,
    fontSize: 18,
    padding: 5, 
  }
})

export default SearchBar 
