import React, { useState} from 'react';
import { View, Button, Text, StyleSheet  } from 'react-native';
import utils from './utils';
import Box from '../components/Box';

const Tabuleiro = ({ route, navigation }) => {
  const [disponiveis, setDisponiveis] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [marcadosPorJog1, setMarcadosPorJog1] = useState([]);
  const [marcadosPorJog2, setMarcadosPorJog2] = useState([]);
  const [jogadorAtual, setNovoJogador] = useState(1);
  const { marcaJogador01 } = route.params;
  const marcaJogador02 = marcaJogador01 === 'X'? 'O' : 'X';
  const corJog01 = marcaJogador01 === 'X'? '#7429D4' : '#2997D4';
  const corJog02 = marcaJogador02 === 'X'? '#7429D4' : '#2997D4';

  const avaliaMarcadosPorJog= (marcadosJogador) => {
    const marcouPonto = utils.logicaJogoDaVelha(marcadosJogador);
     if(marcouPonto && jogadorAtual === 1){
       navigation.navigate('Resultado', { empate: false, vencedor: 1, cor: corJog01 });
     }else
     if(marcouPonto && jogadorAtual === 2){
      navigation.navigate('Resultado', { empate: false, vencedor: 2, cor: corJog02 });
     }

};

  const statusQuadrado = (id) => {
    const status = marcadosPorJog1.includes(id)? marcaJogador01 : 
    marcadosPorJog2.includes(id)? marcaJogador02 : '';
    return status;
  };

  const onClickQuadrado = (idQuadrado) =>{
    if(disponiveis.includes(idQuadrado)){
     if(jogadorAtual === 1){
       const novoMarcadosPorJog1 = marcadosPorJog1.concat(idQuadrado);
       setMarcadosPorJog1(novoMarcadosPorJog1);
       avaliaMarcadosPorJog(novoMarcadosPorJog1,jogadorAtual);
       setNovoJogador(2);
     }else{
      const novoMarcadosPorJog2 = marcadosPorJog2.concat(idQuadrado);
      setMarcadosPorJog2(novoMarcadosPorJog2);
      avaliaMarcadosPorJog(novoMarcadosPorJog2,jogadorAtual);
      setNovoJogador(1);
     }
     
     const novoDisponiveis = disponiveis.filter((id) => id !== idQuadrado);
     if(novoDisponiveis.length === 0){
       navigation.navigate('Resultado', { empate: true, vencedor: 0 });
     }else{
         setDisponiveis(novoDisponiveis);
     }
    }
 };

  return (
  <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
    <Text style={styles.title}>Rodada 01</Text>
    <Text style={[styles.subtitle,
       {color: jogadorAtual === 1? corJog01 : corJog02}]}>
        {jogadorAtual === 1? 'Vez do jogador 01' : 'Vez do jogador 02'}
    </Text>
    <View style={styles.container}>
      <View style={styles.row}>
      {[1, 2, 3].map(num => <Box key={num}
        id={num}
        status={statusQuadrado(num)}
        onClickQuadrado={onClickQuadrado}
        />)}
      </View>
      <View style={styles.row}>
      {[4, 5, 6].map(num => <Box key={num}
        id={num}
        status={statusQuadrado(num)}
        onClickQuadrado={onClickQuadrado}
        />)}
      </View>
      <View style={styles.row}>
      {[7, 8, 9].map(num => <Box key={num}
        id={num}
        status={statusQuadrado(num)}
        onClickQuadrado={onClickQuadrado}
        />)}
      </View>
    </View>
  </View>
);
};

export default Tabuleiro;

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