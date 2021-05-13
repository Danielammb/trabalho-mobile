import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';

const EscolhaCor = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Jogador 01, escolha sua cor:</Text>
    
    <TouchableOpacity style={styles.firstButton} onPress={() => navigation.navigate('Tabuleiro') }>
    <Text style={styles.x}>X</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.firstButton} onPress={() => navigation.navigate('Tabuleiro') }>
      <View />
    </TouchableOpacity>
  </View>
);

export default EscolhaCor;

const styles = StyleSheet.create({
  firstButton: {
    backgrounColor: '#7429D4',
  },
  secondButton: {
    backgrounColor: '#2997D4',
  },
  circle: {
    borderRadius: 50,
    width: 48,
    height: 48,
  },
  x: {
    width: 48,
    height: 48,
  },
});