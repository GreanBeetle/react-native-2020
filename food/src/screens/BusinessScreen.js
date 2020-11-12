import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import COPY from '../copy'
import useBusiness from '../hooks/useBusiness'
import STYLES from '../styles'

const BusinessScreen = props => {
  const { id } = props.route.params
  const [business, errorMessage] = useBusiness(id)

  if (errorMessage) return <Text>{errorMessage}</Text>
  if (!business) return <Text>{COPY.gettingBusiness}</Text>
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{business.name}</Text>
      <FlatList 
        data={business.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{uri: item}} style={styles.image} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }, 
  image: {
    height: 200, 
    width: 300,
    margin: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },  
})

export default BusinessScreen