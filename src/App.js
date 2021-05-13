import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './screens/Inicial';
import EscolhaCor from './screens/EscolhaCor';
import Tabuleiro from './screens/Tabuleiro';
import Resultado from './screens/Resultado';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="EscolhaCor" component={EscolhaCor} />
        <Stack.Screen name="Tabuleiro" component={Tabuleiro} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;