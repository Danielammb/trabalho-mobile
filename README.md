# trabalho-mobile
A proposta se trata de uma aplicação simples do Jogo da Velha. Nesse aplicativo, o jogo será realizado em três rodadas,
em um tabuleiro de 3x3. Os dois jogadores serão representados porduas cores, roxo ou azul. Aquele que vencer o maior
número de rodadas vence o jogo, se nenhum dos dois vencer nas três rodadas, ou obtiverem um número igual de vitórias,
o jogo é empatado.

Os jogadores irão iniciar o jogo ao clicar no botão ‘INICIAR JOGO’;
Na tela seguinte será escolhida qual a cor do jogador que irá começar a partida, sendo intitulado de ‘Jogador 01’.
A outra cor será automaticamente dada ao ‘jogador 02’.Na próxima tela aparecerá o tabuleiro, e o jogador 01 poderá
escolher um entre os nove quadrados para marcar com sua cor, depois de feita a escolha, a vez será passada para o 
jogador 02, e assim se seguirá a rodada. Ela termina quando um dos jogadores vence ou quando o número de quadrados
vazios acaba. No fim das três rodadas, aparecerá na tela a informação de qual dos dois jogadores foi o vencedor,
ou se houve empate.

Como rodar aplicativo:

yarn install

npx react-native run-android
