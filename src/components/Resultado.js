import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Resultado = ({ empate, vencedor, cor, res01, res02, vez, navigation, handleNovoJogo }) => {
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {
      vez < 3 && empate?
      (<Text style={styles.title}>Partida empatada!</Text>)
      :
      vez < 3 && (<View style={styles.container}>
        <Text style={styles.title}>Vencedor da Partida!</Text>
        <Text style={[styles.subtitle, {color: cor}]}>Jogador {vencedor === 1? '01' : '02'}</Text>
      </View>)
    }
    {
      vez === 3 && res01 === res02?
      (<Text style={styles.title}>Jogo empatado!</Text>)
      :
      vez === 3 && (<View style={styles.container}>
        <Text style={styles.title}>Vencedor do Jogo!</Text>
        <Text style={[styles.subtitle, {color: cor}]}>Jogador {res01 > res02? '01' : '02'}</Text>
      </View>)
    }
    {vez === 3? <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicial') }>
    <Text style={styles.textButton}>{"SAIR"}</Text>
    </TouchableOpacity>:
    <TouchableOpacity style={styles.button} onPress={() => handleNovoJogo() }>
    <Text style={styles.textButton}>{"PRÓXIMA PARTIDA"}</Text>
    </TouchableOpacity>}
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