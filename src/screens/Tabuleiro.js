import React from 'react';
import { View, Button, Text } from 'react-native';

const Tabuleiro = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tabuleiro ;D</Text>
    <Button 
      title="Ir para Resultado"
      onPress={() => navigation.navigate('Resultado') }
    />
  </View>
);

export default Tabuleiro;