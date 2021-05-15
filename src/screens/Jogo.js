import React, { useState} from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Tabuleiro from '../components/Tabuleiro';
import Resultado from '../components/Resultado';

const Jogo = ({ route, navigation }) => {
  const [idJogoDaVelha, setNovoJogo] = useState(0);
  const [res01, setRes01] = useState(0);
  const [res02, setRes02] = useState(0);
  const { marcaJogador01 } = route.params;
  const [vencedor, setVencedor] = useState(0);
  const [empate, setEmpate] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [cor, setCor] = useState(0);
  const handleMostrarResultado = ({empate, vencedor, cor}) => {
    if(empate){
      setEmpate(empate);
    }else{
      setVencedor(vencedor);
      vencedor === 1? setRes01(res01+1) : setRes02(res02+1);
    }
    setCor(cor);
    setMostrarResultado(true);
  }

  const handleNovoJogo = () => {
    setMostrarResultado(false);
    setEmpate(false);
    setVencedor(0);
    setNovoJogo(idJogoDaVelha+1);
  };
 
  return (
  <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
    {!mostrarResultado && idJogoDaVelha < 3?
      (
  
       <Tabuleiro 
        key={idJogoDaVelha} 
        handleMostrarResultado={handleMostrarResultado} 
        marcaJogador01={marcaJogador01} 
        setRes01={setRes01} 
        setRes02={setRes02}
        vez={idJogoDaVelha}  />
       ) : 
      (<Resultado 
      empate={empate}
      vencedor={vencedor} 
      cor={cor} 
      res01={res01} 
      res02={res02} 
      vez={idJogoDaVelha}
      navigation={navigation}
      handleNovoJogo={handleNovoJogo} />)
  }
  
  </View>
);
};

export default Jogo;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 90,
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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});