import React from 'react';
import { View, Button, Text } from 'react-native';

const Inicial = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.title}>JOGO DA VELHA</Text>
    <Button 
      title="INICIAR JOGO"
      onPress={() => navigation.navigate('EscolhaCor') }
    />
  </View>
);

export default Inicial;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 48,
  },
});