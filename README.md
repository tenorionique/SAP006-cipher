# Cifra de César: Matrix de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Usuários do produto](#3-usuários-do-produto)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Tema e escolhas](#5-tema-e-escolhas)
* [6. Como funciona](#6-como-funciona)
* [7. Checklist de Objetivos](#7-checklist-de-objetivos)

***

## 1. Prefácio :black_nib:

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto :pencil: 


Primeiro projeto desenvolvido no bootcamp Laboratoria. :hatching_chick:
 O produto é uma aplicação web, executável em browser. O tema é uma forma divertida de cifrar e decifrar mensagens,com um objetivo de aprendizado ludico por parte do usuario, aproveitando a temática 
do filme matrix para elucidar como a criptografia de César seria no mundo contemporaneo.


## 3. Usuários do produto :family: :alien:

O produto pode ser utilizado por qualquer usuário que queira cifrar ou decifrar
uma mensagem pelo método Cifra de César, seja para fins lúdicos ou com objetivos de utilizar a cifragem/decifragem em alguma aplicação cabível. 



## 4. Considerações gerais  :book: :floppy_disk:

O objetivo é mostrar as possibilidades de cifragem e decifragem de uma mensagem, a partir da escolha de uma chave de deslocamento (offset) e um texto digitado. 
O usuário pode utilizar esse produto como uma ferramenta de aprendizagem. Demonstrando como mensagens eram cifradas na época do Imperador Romano César, e agora é utilizada de uma forma automatizada e contemporânea. Também cabe ao usuário decidir, onde ele gostaria de fazer uso de sua mensagem cifrada, sendo o site uma ferramenta que permite esse tipo de criptografia. 



## 5. Tema e escolhas: 

:arrow_backward: O layout da página possui um background que remete ao filme Matrix e códigos, da forma que conhecemos popularmente, uma tela preta com códigos na cor verde impressos na tela. 

:arrow_backward: A cor verde foi definida como padrão de todos os elementos de caixas e botões, para manter a temática escolhida e também deixar o site mais lúdico e colorido. 

:arrow_backward: A escolha da fonte foi baseada na estética dos primórdios dos códigos e computadores dos anos ‘80, e que também remetesse e lembrasse as fontes do filme Matrix.  

:arrow_backward:Após o nome do site, podemos encontrar um pequeno texto divertido como um ‘easter egg ‘para os que gostam dos filmes matrix. 




## 6. Como Funciona: :mag_right: :unlock: :lock:
:hammer: :wrench:

:arrow_backward: Um layout de tela única, com objetivo de facilitar a visualização das caixas de texto.
Sendo dispostas alinhadas no centro da tela. Um campo referente ao número – offset – 
que funciona como chave de deslocamento dentro da cifra.

:arrow_backward: Três campos de texto, e dois botões. Um de Cifrar e outro de Decifrar. 
Dessa forma o usuário digita o offset, um texto a ser cifrado e ao clicar no botão cifrar, o texto cifrado aparece na última caixa de texto da tela. 

:arrow_backward: O mesmo processo é feito para o decifrar, em sua caixa de texto e botão respectivos. 
No rodapé da página, pode ser encontrado um link que explica o que é cifra de césar, caso o usuário encontre alguma dificuldade em entender o site. 

:arrow_backward: Ainda no rodapé também se encontra outro link para pessoas que não estão familiarizadas com o filme Matrix, e não entenderam o significado do texto lúdico utilizado no corpo do site. 



## 7. Checklist de Objetivos


* [ :white_check_mark:] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [ :white_check_mark:] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [ :white_check_mark:] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [ :white_check_mark:] Usar VanillaJS.
* [:white_check_mark: ] **Não** usar `this`.
* [:white_check_mark: ] Implementar `cipher.encode`.
* [ :white_check_mark:] Implementar `cipher.decode`.
* [ :white_check_mark:] Passar o linter com a configuração definida.
* [ :white_check_mark:] Passar as provas unitárias.
* [ :white_check_mark:] Testes unitários cobrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [ :white_check_mark:] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [:white_check_mark: ] Interface que permita escrever um texto para ser cifrado.
* [ :white_check_mark:] Interface que mostre o resultado da cifra corretamente.
* [ :white_check_mark:] Interface que permita escrever um texto para ser decifrado.
* [ :white_check_mark:] Interface que mostre o resultado decifrado corretamente.
* [ :white_check_mark:] Cifrar/decifrar minúsculas.
