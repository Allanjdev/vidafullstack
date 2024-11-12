/*Em JavaScript, um array é uma coleção ordenada de valores. Esses valores podem ser de qualquer tipo de dado, incluindo números, strings, objetos e até mesmo outros arrays. Pense em um array como uma lista onde cada item tem um índice numérico específico para identificá-lo. */

// Criando um array com diferentes tipos de dados
let meuArray = [1, "dois", true, null, { nome: "João" }];

// Criando um array vazio
let arrayVazio = [];

/*Acessando Elementos de um Array:

Para acessar um elemento específico de um array, utilizamos o índice do elemento entre colchetes. Lembre-se que os índices em JavaScript começam em 0. */

console.log(meuArray[0]); // Imprime: 1
console.log(meuArray[2]); // Imprime: true

//Modificando Elementos de um Array:
meuArray[1] = "três";
console.log(meuArray); // Imprime: [1, "três", true, null, { nome: "João" }]

// Propriedades Importantes:

/*
length: Retorna o número de elementos em um array.
isArray: Verifica se um valor é um array. */

console.log(meuArray.length); // Imprime: 5
console.log(Array.isArray(meuArray)); // Imprime: true

/*
Métodos Úteis:

push(): Adiciona um ou mais elementos ao final do array.
pop(): Remove e retorna o último elemento do array.
shift(): Remove e retorna o primeiro elemento do array.
unshift(): Adiciona um ou mais elementos ao início do array.   
splice(): Remove ou adiciona elementos em um ponto específico do array.
slice(): Retorna uma nova cópia de uma parte do array.
concat(): Combina dois ou mais arrays em um novo array.
join(): Converte todos os elementos de um array em uma string.
indexOf(): Retorna o índice do primeiro elemento com o valor especificado.
includes(): Verifica se um array contém um determinado elemento.
forEach(): Executa uma função para cada elemento do array.
map(): Cria um novo array com os resultados da aplicação de uma função em cada elemento.   
filter(): Cria um novo array com todos os elementos que passam em um teste.
reduce(): Reduz um array a um único valor.
*/

// Adicionando elementos ao final
meuArray.push("quatro", 5);

// Removendo o último elemento
let ultimoElemento = meuArray.pop();

// Iterando sobre os elementos
meuArray.forEach((elemento) => {
  console.log(elemento);
});

// Criando um novo array com os elementos duplicados
let novoArray = meuArray.map((elemento) => elemento * 2);

// Filtrando elementos maiores que 2
let elementosMaioresQueDois = meuArray.filter((elemento) => elemento > 2);

//Exemplo Completo:
const numeros = [1, 2, 3, 4, 5];

// Adicionando um novo número
numeros.push(6);

// Removendo o primeiro número
numeros.shift();

// Verificando se o array contém o número 3
console.log(numeros.includes(3)); // Imprime: true

// Dobrando cada número
const numerosDobrados = numeros.map((numero) => numero * 2);

// Somando todos os números
const soma = numeros.reduce((total, numero) => total + numero, 0);

console.log(numerosDobrados); // Imprime: [2, 4, 6, 8, 10]
console.log(soma); // Imprime: 30
