//Funções e Arrow Functions

//Funções Tradicionais

/*As funções tradicionais em JavaScript são blocos de código reutilizáveis que executam uma tarefa específica. Elas são declaradas usando a palavra-chave `function`.
 */
function nomeDaFuncao(parâmetros) {
  // Corpo da função
  return valor;
}

//Exemplo:

function somar(a, b) {
  return a + b;
}

//Arrow Functions

/*As arrow functions são uma sintaxe mais concisa para criar funções em JavaScript, introduzida no ECMAScript 6. Elas oferecem uma forma mais elegante e expressiva de escrever funções, especialmente em contextos como callbacks e funções de alta ordem.*/

const nomeDaFuncao = (parâmetros) => {
  // Corpo da função
  return valor;
};

//Exemplo:

const somar = (a, b) => a + b;

//Diferenças entre Funções Tradicionais e Arrow Functions:

//Quando usar Arrow Functions:

/*-Callbacks curtas: Arrow functions são ideais para callbacks simples, como em métodos de array como `map`, `filter` e `reduce`.
- Funções de alta ordem: Elas são perfeitas para funções que recebem ou retornam outras funções.
- Expressões curtas: Quando a função tem apenas uma expressão, você pode omitir as chaves e a palavra-chave `return`.*/

//Exemplo de uso com `map`:
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map((numero) => numero * 2);

//Quando usar Funções Tradicionais:

/*-Métodos: Quando você precisa definir um método em um objeto, geralmente é preferível usar uma função tradicional para ter mais controle sobre o `this`.
-Construtoras: Funções construtoras devem ser definidas como funções tradicionais para criar novos objetos.
-Quando a sintaxe da arrow function não é clara:** Em casos mais complexos, a sintaxe da arrow function pode ser menos clara do que a de uma função tradicional.*/

//Qual a melhor escolha?

/*A escolha entre funções tradicionais e arrow functions depende do contexto específico. Considere os seguintes fatores:*/

/*- Concisão: Arrow functions são mais concisas.
- `this`: Arrow functions herdam o `this` do contexto em que foram definidas.
- Argumentos: Arrow functions não possuem `arguments`.
- Legibilidade: A legibilidade pode variar dependendo do caso específico.*/

//Exemplo prático:

// Função tradicional
function multiplicar(a, b) {
  return a * b;
}

// Arrow function
const multiplicar2 = (a, b) => a * b;

// Exemplo
function nomeFunc() {
  return "Jefferson Allan";
}
console.log(nomeFunc());

// Exemplo arrow
const nomeFuncArrow = () => {
  return "Jefferson Allan";
};
console.log(nomeFuncArrow());
