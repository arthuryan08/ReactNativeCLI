import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.texto}>Salve família!!!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page:{
    height: 200,
    width: 200,
    backgroundColor: '#FF0000',
  },
  texto:{
    color: '#FFF',
    fontSize:25,
  }
})