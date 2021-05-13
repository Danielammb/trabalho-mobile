import React from 'react';
import { View, Button, Text } from 'react-native';

const Inicial = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Inicial ;D</Text>
    <Button 
      title="Ir para escolha cor"
      onPress={() => navigation.navigate('Escolha cor') }
    />
  </View>
);

export default Inicial;