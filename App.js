import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.texto}>Salve família!!!</Text>
      <Text style={styles.texto}>Segundo texto</Text>
      <Text style={[styles.texto, {fontSize: 35}]}>Terceiro texto</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    height: 250,
    width: 250,
    backgroundColor: '#FF0000',
  },
  texto: {
    color: '#FFF',
    fontSize: 25,
  },
});
