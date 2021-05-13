import React from 'react';
import { View, Button, Text } from 'react-native';

const Resultado = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Resultado ;D</Text>
    <Button 
      title="Ir para inicial"
      onPress={() => navigation.navigate('Inicial') }
    />
  </View>
);

export default Resultado;