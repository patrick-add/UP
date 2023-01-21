
## RoundControllerEvolution.com

Foi criado um servidor com nodejs para controlar rodadas de um jogo. Dado um array de nomes de jogadores que está no script do servidor, a cada requisição ao servidor, responde com uma mensagem dizendo de quem é a vez de jogar.

O servidor utiliza a porta 8000 e pode ser acessado através de `http://localhost:8000` onde fica o recurso principal.

Para todas as letras a seguir do exercício, utilizo o array **jogadores** abaixo:

```javascript
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
```

Todos os passos (letras) são implementadas no mesmo script do servidor.

Vamos aos recursos do servidor:

**a)** Criei um recurso na home (`http://localhost:8000`) do servidor para que seja retornado uma mensagem informando de quem é a vez de jogar.
A mensagem retornada ao navegador segue o seguinte formato:

```
É a vez de {nomeDoJogador} jogar!
```

Portanto, considerando o array acima, na primeira requisição é retornado:

```
É a vez de José jogar!
```

Na segunda requisição:

```
É a vez de Maria jogar!
```

E assim por diante.

Após apresentar o nome do último jogador, a rodada finaliza e portanto, o próximo nome a ser retornado na próxima requisição é o do primeiro jogador, iniciando uma nova rodada.

**b)** Criei um recurso no servidor para remover jogadores do array. Este recurso é acessado através do endereço `http://localhost:8000/remover` e recebe um parâmetro query chamado **indice** onde é informado o índice no array do jogador a ser removido.

Portanto, considerando o array do início, ao fazer a seguinte requisição:

`http://localhost:8000/remover?indice=2`

O servidor remove o jogador da posição 2 do array e retorna ao navegador o array após a remoção. O índice do array se inicia em 0, portanto o primeiro jogador estará na posição 0, e o último jogador do array `jogadores`, estará na posição 4.

Desta forma, após a remoção do jogador no índice 2 do array `jogadores`, que é `João`, é retornado ao navegador o array assim:

```javascript
["José","Maria","Marcos","Fernanda"]
```

Caso não exista jogador na posição (índice) informado pela requisição, nenhum jogador é removido do array e é retornada a resposta com a seguinte mensagem:

```
Não existe jogador no índice informado (2) para ser removido.
```

**Importante:** Após a remoção de um jogador, o recurso principal da home que mostra o próximo jogador continua funcionando normal e corretamente.

**c)** Criei o recurso de adicionar jogadores. Este recurso é acessado através do endereço `http://localhost:8000/adicionar` e recebe um parâmetro query obrigatório **nome** onde é informado o nome do jogador a ser adicionado, e outro parâmetro query opcional **indice** que é utilizado para especificar a posição (índice) do array onde se deseja adicionar o jogador.

Portanto, se o parâmetro **indice** **NÃO** for informado, o jogador é adicionado ao final do array. Se o parâmetro **indice** for informado, o jogador é incluído no índice informado, movendo para uma posição posterior cada um dos jogadores que já existiam a partir daquele índice informado, de forma que a ordem é mantida.

Os nomes dos jogadores sempre são adcionados ao array com a primeira letra maiúscula e as demais letras minúsculas.

Se o valor do indice informado no parâmetro for uma posição que não existe no array, o novo jogador não é adicionado e retorna a mensagem:

```
O índice informado ({indice}) não existe no array. Novo jogador não foi adicionado.
```

Após adicionar o novo jogador, é retornado ao navegador o array de jogadores alterado.

**Exemplos:**

Se for requisitado ao servidor este recurso com os seguintes parâmetros:

`http://localhost:8000/adicionar?nome=Luiza`

Considerando o estado inicial do array, após a adição da nova jogadora, é retornado ao navegador o seguinte array:

```javascript
["José","Maria","João","Marcos","Fernanda","Luiza"]
```

Se for adicionado o parametro **indice** na requisição, como no exemplo abaixo:

`http://localhost:8000/adicionar?nome=luiza&indice=2`

Considerando o estado inicial do array, após a adição da nova jogadora, é retornado ao navegador o seguinte array:

```javascript
["José","Maria","Luiza","João","Marcos","Fernanda"]
```

Se for adicionado o parametro **indice** com um valor de índice não existente no array, ficando assim:

`http://localhost:8000/adicionar?nome=luiza&indice=80`

Considerando o estado inicial do array, é retornada a seguinte mensagem:

```
O índice informado (80) não existe no array. Novo jogador não adicionado.
```

**Importante:** Após a adição de um novo jogador, o recurso principal da home que mostra o próximo jogador continua funcionando normal e corretamente.