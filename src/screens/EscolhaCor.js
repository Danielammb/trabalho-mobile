import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EscolhaCor = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
    <Text style={styles.title}>Jogador 01, escolha sua cor:</Text>
    <View style={styles.container}>
    <TouchableOpacity
     style={styles.firstButton}
      onPress={() => navigation.navigate('Jogo', { marcaJogador01: 'X'}) }>
    <Text style={styles.x}>X</Text>
    </TouchableOpacity>
    <TouchableOpacity
     style={styles.secondButton}
      onPress={() => navigation.navigate('Jogo', { marcaJogador01: 'O'}) }>
      <View style={styles.circle}/>
    </TouchableOpacity>
    </View>
    
  </View>
);

export default EscolhaCor;

const styles = StyleSheet.create({
  firstButton: {
    backgroundColor: '#7429D4',
    width: 72,
    height: 61,
    justifyContent: 'center',
     alignItems: 'center'
  },
  secondButton: {
    backgroundColor: '#2997D4',
    width: 72,
    height: 61,
    justifyContent: 'center',
     alignItems: 'center'
  },
  circle: {
    width: 44,
    height: 44,
    backgroundColor: '#C4C4C4',
    borderRadius: 25,
  },
  x: {
    width: 48,
    height: 48,
    color: '#C4C4C4',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: -15,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    marginTop: 90,
  },
});