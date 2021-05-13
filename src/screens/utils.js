const utils = {
    logicaJogoDaVelha: (marcadosJogador) =>{
      
        if(
          ((marcadosJogador.includes(1))&&
          (marcadosJogador.includes(2))&&
          (marcadosJogador.includes(3)))
        ||
          ((marcadosJogador.includes(1))&&
          (marcadosJogador.includes(4))&&
          (marcadosJogador.includes(7)))
          ||
          ((marcadosJogador.includes(2))&&
          (marcadosJogador.includes(5))&&
          (marcadosJogador.includes(8)))
          ||
          ((marcadosJogador.includes(1))&&
          (marcadosJogador.includes(5))&&
          (marcadosJogador.includes(9)))
          ||
          ((marcadosJogador.includes(3))&&
          (marcadosJogador.includes(6))&&
          (marcadosJogador.includes(9)))
          ||
          ((marcadosJogador.includes(4))&&
          (marcadosJogador.includes(5))&&
          (marcadosJogador.includes(6)))
          ||
          ((marcadosJogador.includes(7))&&
          (marcadosJogador.includes(8))&&
          (marcadosJogador.includes(9)))
          ||
          ((marcadosJogador.includes(3))&&
          (marcadosJogador.includes(5))&&
          (marcadosJogador.includes(7)))
        )
        {
         return true;
        }
      
        return false;
      }
    };

    export default utils;