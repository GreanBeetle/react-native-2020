import React from 'react'
import { 
  View, 
  TextInput, 
  StyleSheet 
} from 'react-native' 
import { Feather } from '@expo/vector-icons'
import COLORS from '../colors'
import COPY from '../copy'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput 
        autoCapitalize="none" // ALWAYS add this prop   
        autoCorrect={false}   // ALWAYS add this prop 
        onChangeText={onTermChange} // reference prop without ()
        onEndEditing={onTermSubmit} // reference prop without ()
        placeholder={COPY.search} 
        style={styles.inputStyle}
        value={term}/>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: COLORS.borderGray, 
    borderRadius: 5,
    flexDirection: 'row', 
    height: 50,
    margin: 10, 
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
