
# ControladorDeRodadas.com

Um servidor com node.js para controlar rodadas de um jogo. Dado um array de nomes de jogadores que está no script do servidor, a cada requisição ao servidor, responde com uma mensagem dizendo de quem é a vez de jogar.

Portanto, supondo que exista no script do servidor, o array **jogadores** abaixo:

```javascript=
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
```

A cada requisição, deve retornar uma mensagem ao navegador no seguinte formato:

```
É a vez de {nomeDoJogador} jogar!
```

Portanto, considerando o array de exemplo acima, na primeira requisição deverá ser retornado:

```
É a vez de José jogar!
```

Na segunda requisição:

```
É a vez de Maria jogar!
```

E assim por diante.

Após apresentar o nome do último jogador, a rodada finaliza e portanto, o próximo nome a ser retornado na próxima requisição deve ser o do primeiro jogador, iniciando uma nova rodada.

O servidor utiliza a porta 3000 e é acessado através do endereço http://localhost:3000, para onde envia as requisições e de onde recebemos as respostas com as mensagens mencionadas acima.
