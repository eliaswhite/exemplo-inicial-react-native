import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Tarefas</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    padding: 20,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
});