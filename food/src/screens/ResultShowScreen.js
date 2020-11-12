import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import STYLES from '../styles'
import yelp from '../api/yelp'

const ResultShowScreen = props => {
  const { id } = props.route.params
  const [results, setResults] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getBusinessAPI = async (ID) => {
    try {
      const response = await yelp.get(`${ID}`)
      console.log('getBusinessAPI response', response.data)
      setResults(response.data)
    } catch (error) {
      setErrorMessage(error.messsage)
    }
  }

  useEffect( () => {
    getBusinessAPI(id)
  }, [])

  return (
    <View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results ? results.alias : 'no results yet'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultShowScreen