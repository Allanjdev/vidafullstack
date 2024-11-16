/*Arguments em javascript

 O que é o objeto `arguments`?

O objeto `arguments` é um objeto interno do JavaScript que contém todos os argumentos passados para uma função, mesmo aqueles que não foram declarados explicitamente nos parâmetros da função. Ele oferece uma forma de acessar os argumentos de forma dinâmica, sem precisar conhecer o número exato de argumentos que serão passados.

 Para que serve o objeto `arguments`?

-Acesso dinâmico a argumentos:** Permite que uma função trabalhe com um número variável de argumentos.
-Verificação do número de argumentos:** Você pode usar `arguments.length` para verificar quantos argumentos foram passados.
-Iteração sobre os argumentos:** É possível percorrer todos os argumentos usando um loop.

Como usar o objeto `arguments`?*/

function minhaFuncao() {
  console.log(arguments); // Imprime um array-like com todos os argumentos
  console.log(arguments.length); // Imprime o número de argumentos
}

minhaFuncao(1, 2, 3, "Olá");

//Exemplo prático: Soma de um número variável de argumentos:

function soma() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(soma(1, 2, 3)); // Imprime 6

//Estrutura e tipo do objeto `arguments`

/*Array-like: Embora não seja um array verdadeiro, o objeto `arguments` se comporta de forma semelhante a um array, permitindo o acesso a elementos por índice (`arguments[0]`, `arguments[1]`, etc.) e a propriedade `length`.
Não é um array:Não possui todos os métodos de um array, como `map`, `filter` e `reduce`.
Tipo: É um objeto especial do JavaScript.*/

//Aplicações do objeto `arguments`

/*Funções com um número variável de argumentos:** Criação de funções que podem receber qualquer quantidade de argumentos.
-Simulação de sobrecarga de funções:** Embora o JavaScript não tenha sobrecarga de funções como outras linguagens, o objeto `arguments` pode ser usado para simular esse comportamento.
-Passagem de argumentos adicionais:** Permite passar argumentos adicionais para uma função sem precisar modificá-la.*/

//Desvantagens e alternativas ao objeto `arguments`

/*Não é recomendado em código moderno:** O uso do objeto `arguments` é considerado uma prática menos moderna e pode tornar o código menos legível e mais difícil de manter.
- **Rest parameters:** A partir do ECMAScript 6, a sintaxe de **rest parameters** (`...args`) é preferida para coletar argumentos adicionais em um array real.
- **Spread operator:** O **spread operator** (`...`) pode ser usado para espalhar os elementos de um array como argumentos individuais de uma função.*/

//Exemplo com rest parameters e spread operator:

function soma(...args) {
  return args.reduce((total, num) => total + num, 0);
}

const numeros = [1, 2, 3, 4];
console.log(soma(...numeros)); // Imprime 10

// Exemplo

const subtracao = (num1 = 0, num2 = 0) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 - num2;
  }
  return "Você passou dados diferentes";
};

console.log(subtracao(1, 2));
