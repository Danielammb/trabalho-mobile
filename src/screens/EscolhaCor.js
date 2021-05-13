import React from 'react';
import { View, Button, Text } from 'react-native';

const EscolhaCor = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Escolha cor ;D</Text>
    <Button 
      title="Ir para Resultado"
      onPress={() => navigation.navigate('Resultado') }
    />
  </View>
);

export default EscolhaCor;