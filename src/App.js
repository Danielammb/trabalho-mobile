import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './screens/Inicial';
import EscolhaCor from './screens/EscolhaCor';
import Jogo from './screens/Jogo';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   unmountInactiveRoutes={true} initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="EscolhaCor" component={EscolhaCor} />
        <Stack.Screen name="Jogo" component={Jogo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;