//Ex 01 - Soma de 2 Números
function somar(numero1, numero2) {
  // A função recebe dois parâmetros: numero1 e numero2
  const resultado = numero1 + numero2;
  // A soma é realizada e armazenada na variável resultado
  return resultado;
  // O resultado da soma é retornado pela função
}

// Exemplo de uso:
const num1 = 10;
const num2 = 5;
const soma = somar(num1, num2);
console.log(soma); // Saída: 15

/*
Explicação:
A função somar define um bloco de código que realiza a soma de dois números.
Os parâmetros numero1 e numero2 são os valores que serão somados.
Dentro da função, a soma é calculada e armazenada na variável resultado.
A palavra-chave return é usada para enviar o valor de resultado para quem chamou a função.
No exemplo de uso, os valores 10 e 5 são passados como argumentos para a função somar, e o resultado da soma é armazenado na variável soma. 
*/

//Ex 02 - Verificar se um Número é Par

function ehPar(numero) {
  // A função recebe um parâmetro: numero
  return numero % 2 === 0;
  // O operador % (módulo) retorna o resto da divisão por 2.
  // Se o resto for 0, o número é par.
}

// Exemplo de uso:
const numero = 7;
const resultado = ehPar(numero);
console.log(resultado); // Saída: false

/*
Explicação:
A função ehPar verifica se um número é par utilizando o operador módulo (%).
Se o resto da divisão de um número por 2 for 0, significa que o número é par.
A função retorna um valor booleano (true ou false) indicando o resultado da verificação. 
*/

//Ex 03 - Calcular Fatorial
function fatorial(numero) {
  // Caso base: fatorial de 0 é 1
  if (numero === 0) {
    return 1;
  } else {
    // Chamada recursiva: fatorial(numero) = numero * fatorial(numero - 1)
    return numero * fatorial(numero - 1);
  }
}

// Exemplo de uso:
function fatorial(numero) {
  // Caso base: fatorial de 0 é 1
  if (numero === 0) {
    return 1;
  } else {
    // Chamada recursiva: fatorial(numero) = numero * fatorial(numero - 1)
    return numero * fatorial(numero - 1);
  }
}

// Exemplo de uso:
function fatorial(num) {
  // Caso base: fatorial de 0 é 1
  if (num === 0) {
    return 1;
  } else {
    // Chamada recursiva: fatorial(numero) = numero * fatorial(numero - 1)
    return num * fatorial(num - 1);
  }
}

// Exemplo de uso:
const num = 5;
const result = fatorial(num);
console.log(resultado); // Saída: 120

/*
Explicação:
A função fatorial utiliza recursão para calcular o fatorial de um número.
O caso base da recursão é quando o número é 0, nesse caso o fatorial é 1.
Para outros números, a função chama a si mesma com o número diminuído em 1 e multiplica o resultado pela chamada anterior. 
*/

//Ex 04 - Verificar se uma String é um Palíndromo
function ehPalindromo(palavra) {
  // Remover espaços e converter para minúsculas
  const palavraSemEspacos = palavra.replace(/\s/g, "").toLowerCase();
  // Inverter a string
  const palavraInvertida = palavraSemEspacos.split("").reverse().join("");
  // Comparar as strings
  return palavraSemEspacos === palavraInvertida;
}

// Exemplo de uso:
const palavra = "A bola é azul";
const res = ehPalindromo(palavra);
console.log(res); // Saída: false

/*
A função ehPalindromo verifica se uma string é um palíndromo, ignorando espaços e considerando letras maiúsculas e minúsculas como iguais.
A string é invertida e comparada com a string original. Se forem iguais, a string é um palíndromo.
*/

//Ex 05 - Contar o Número de Vogais em uma String
function contarVogais(texto) {
  const vogais = "aeiouAEIOU";
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      contador++;
    }
  }
  return contador;
}

// Exemplo de uso:
const texto = "Olá, mundo!";
const re = contarVogais(texto);
console.log(re); // Saída: 4
