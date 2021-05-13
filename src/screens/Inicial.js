import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Inicial = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
    <Text style={styles.title}>{`JOGO\nDA\nVELHA`}</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EscolhaCor') }>
    <Text style={styles.textButton}>{"INICIAR JOGO"}</Text>
    </TouchableOpacity>
  </View>
);

export default Inicial;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    textAlign: 'center',
    marginTop: 90,
    marginBottom: 60,
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