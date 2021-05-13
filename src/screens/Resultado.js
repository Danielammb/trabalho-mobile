import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Resultado = ({ route, navigation }) => {
  const { empate, vencedor, cor } = route.params;
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {
      empate?
      (<Text style={styles.title}>Jogo empatado!</Text>)
      :
      (<View style={styles.container}>
        <Text style={styles.title}>Vencedor do Jogo!</Text>
        <Text style={[styles.subtitle, {color: cor}]}>Jogador {vencedor === 1? '01' : '02'}</Text>
      </View>)
    }
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tabuleiro', {}) }>
    <Text style={styles.textButton}>{"PRÓXIMA PARTIDA"}</Text>
    </TouchableOpacity>
  </View>
);
};

export default Resultado;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 60,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '80%',
    maxHeight: 280,
  },
  button: {
    backgroundColor: '#29D482',
    padding: 20,
  },
  textButton: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
});