// Funções - estudo js

/*
O que são funções em JavaScript?

Em JavaScript, funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas são como pequenas máquinas que realizam um trabalho quando chamadas. Pense nelas como receitas: você tem os ingredientes (parâmetros) e as instruções (corpo da função) para preparar um prato (resultado).
*/

/*
Por que usar funções?

- Reutilização de código: Evite repetir o mesmo código várias vezes.
- Organização: Divide o código em partes menores e mais gerenciáveis.
- Abstração: Esconde a complexidade interna, permitindo que você se concentre na lógica geral.
- Modularidade: Cria componentes independentes que podem ser combinados de diferentes formas.
*/

/*
Como definir uma função?

Existem várias maneiras de definir funções em JavaScript:

Declaração de função:

function nomeDaFuncao(parametro1, parametro2) {
Corpo da função
return resultado;
}

Expressão de função:

const nomeDaFuncao = function(parametro1, parametro2) {
Corpo da função
return resultado;
}

Arrow functions:

const nomeDaFuncao = (parametro1, parametro2) => {
Corpo da função
return resultado;
}

Chamando uma função:

Para executar uma função, você a chama pelo seu nome, seguido de parênteses:

nomeDaFuncao(argumento1, argumento2);
*/

/*
Parâmetros e argumentos:

- Parâmetros: São as variáveis declaradas dentro dos parênteses da definição da função.
- Argumentos: São os valores reais passados para a função quando ela é chamada.

Retorno de funções:

- A palavra-chave `return` é usada para enviar um valor de volta para quem chamou a função.
- Se uma função não tiver um `return`, ela retornará `undefined` por padrão.

Funções como cidadãos de primeira classe:

Em JavaScript, funções são tratadas como qualquer outra variável:

- Atribuição a variáveis: Você pode atribuir uma função a uma variável.
- Passagem como argumento: Você pode passar uma função como argumento para outra função.
- Retorno de funções: Você pode retornar uma função de outra função.

Tipos de funções:

- Funções anônimas: Funções sem nome, geralmente atribuídas a variáveis.
- Funções auto-invocáveis (IIFE): Funções que se executam imediatamente após serem definidas.
- Funções recursivas: Funções que chamam a si mesmas.
- Funções de ordem superior: Funções que aceitam outras funções como argumentos ou retornam funções.
*/

// Exemplos:

// Função para somar dois números
function somar(a, b) {
  return a + b;
}

// Função para verificar se um número é par
const ehPar = (numero) => numero % 2 === 0;

// Chamando as funções
const resultadoSoma = somar(5, 3);
console.log(resultadoSoma); // Saída: 8

const numero = 4;
const resultadoPar = ehPar(numero);
console.log(resultadoPar); // Saída: true

// function declaration
function isValidDeclaration() {
  const Soma = 1 + 2;
  if (Soma === 3) {
    return true; // retornará true 3===3
  }
  return false;
}

// function expression
const isValidExpression = function () {
  return false;
};

// Arrow function
const isValidArrow = () => 5 * 9;
console.log(isValidArrow()); //retorna 45
