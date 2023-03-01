import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.titulo}</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    padding: 20,
    width: '100%',
    marginTop: '30%', 
    alignContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
});