import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Box = (props) => (
  <TouchableOpacity
   onPress={() => props.onClickQuadrado(props.id)}
    style={[styles.button,
     { backgroundColor: props.status=== 'X' ? 
     '#7429D4' : props.status=== 'O' ? 
     '#2997D4' : '#C4C4C4'} ]}>
    <View />
  </TouchableOpacity>
);

export default Box;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 49,
    margin: 5,
  },
});