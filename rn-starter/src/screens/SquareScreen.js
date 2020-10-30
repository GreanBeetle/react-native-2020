import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { ColorTuner } from '../components'
import STYLES from '../styles'

const SquareScreen = () => {
  return (
    <SafeAreaView style={STYLES.centered}>
      <ColorTuner onPressUp={() => console.log('up')} onPressDown={() => console.log('down')}/>
      <ColorTuner onPressUp={() => console.log('up')} onPressDown={() => console.log('down')} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen 