
# Cronômetro Online

Um cronômetro online que conta minutos e segundos apenas.Foi criado um servidor onde é contado o tempo do cronômetro. Este servidor possui os recursos: **principal** (raiz - onde o tempo atual do cronômetro é mostrado), **iniciar**, **pausar**, **continuar** e **zerar**. A seguir especifiquei como cada recurso funciona.

O servidor funciona escutando a porta 8000, através do endereço http://localhost:8000 onde funciona o recurso principal (raiz).

---

## Recurso principal (raiz) :

No principal recurso do servidor, acessado através de http://localhost:8000  retorna uma mensagem mostrando o tempo atual do cronômetro, seguindo o seguinte formato:

```
Tempo atual do cronômetro: 01 minutos e 07 segundos
```
---

## Iniciar :

O recurso iniciar é responsável por iniciar a contagem do cronômetro e aplicar toda a lógica que é necessária para que o cronômetro funcione corretamente.

Este recurso é acessado através do endereço http://localhost:8000/iniciar

Após iniciar a contagem do cronômetro, este recurso retorna a mensagem:

```
Cronômetro iniciado!
```
---

## Pausar :

O cronômetro possui um recurso para pausar o tempo do cronômetro.

Este recurso é acessado através do endereço http://localhost:8000/pausar

Após pausar a contagem do cronômetro, este recurso retorna a mensagem:

```
Cronômetro pausado!
```
---

## Continuar :

Este recurso é responsável por continuar a contagem do tempo do cronômetro.

Este recurso é acessado através do endereço http://localhost:8000/continuar

Após continuar (resumir) a contagem do cronômetro, este recurso retorna a mensagem:

```
Cronômetro continuando!
```
---

## Zerar :

Para finalizar, o cronômetro também pode ser zerado através do recurso zerar.

Este recurso é acessado através do endereço http://localhost:8000/zerar

Após zerar os valores de minutos e segundos do cronômetro, este recurso retorna a mensagem:

```
Cronômetro zerado!
```
---

**Importante:** O recurso **zerar** não afeta o estado do cronômetro e também não afeta o funcionamento dos outros recursos. Portanto se o cronômetro estiver parado e o recurso **zerar** for requisitado, após zerar os valores o cronômetro se mantem parado. O proporcional acontece para quando o cronômetro estiver executando a contagem (zera os valores sem parar de contar).

