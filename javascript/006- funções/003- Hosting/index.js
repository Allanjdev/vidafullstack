//O que é Hoisting?

/*Hoisting, em português "içamento" ou "elevação", é um comportamento peculiar do JavaScript que "levanta" as declarações de variáveis e funções para o topo de seu escopo antes da execução do código. Isso significa que você pode usar uma variável ou função antes mesmo de sua declaração no código.

Por que isso acontece?

O interpretador JavaScript realiza duas fases ao processar seu código:

1. Fase de criação: Nesta fase, todas as declarações de variáveis e funções são "movidas" para o topo de seu escopo, com as variáveis sendo inicializadas com `undefined` e as funções com seu código completo.
2. Fase de execução: O código é executado linha por linha.

Como o Hoisting funciona na prática?*/

console.log(x); // undefined
var x = 10;

function minhaFuncao() {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  var y = 20;
}

minhaFuncao();

/*Variáveis com `var`:** São "içadas" para o topo do escopo, mas inicializadas com `undefined`.
- Funções: São "içadas" completamente, incluindo seu código.
- Variáveis com `let` e `const`:** Não são "içadas" como as variáveis com `var`. Se você tentar acessar uma variável `let` ou `const` antes de sua declaração, receberá um `ReferenceError`.

Usos e Aplicações do Hoisting:

- Chamar funções antes de sua declaração:** Isso é comum em JavaScript e geralmente não causa problemas.
- Entender o comportamento do JavaScript:** Saber sobre hoisting é fundamental para depurar e entender código JavaScript.
- Evitar erros: O hoisting pode levar a erros inesperados se não for compreendido corretamente.

Estrutura e Tipo:

- Variáveis: São "içadas" com o valor `undefined` até o início do seu escopo.
- Funções: São "içadas" completamente, incluindo seu código.

Importante:

- Hoisting pode levar a bugs: É importante declarar as variáveis no início do escopo para evitar confusões e erros.
- `let` e `const` não são "içadas`da mesma forma que`var`: Isso ajuda a evitar alguns dos problemas comuns associados ao hoisting.
- **Entender o escopo:** O hoisting ocorre dentro do escopo da função ou globalmente.

O hoisting, como vimos, é um comportamento peculiar do JavaScript que "levanta" as declarações de variáveis e funções para o topo de seu escopo.



Escopo Global

-Variáveis com `var`: São "içadas" para o topo do escopo global e inicializadas com `undefined`. Isso significa que você pode acessar uma variável declarada com `var` em qualquer lugar do seu código, mesmo antes de sua declaração.
-Funções: Também são "içadas" para o topo do escopo global e podem ser chamadas antes de sua declaração.

Exemplo:*/

console.log(x); // undefined
var x = 10;

function minhaFuncao() {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  var y = 20;
}

minhaFuncao();

/*Escopo Funcional

- Variáveis com `var`:** São "içadas" para o topo da função e inicializadas com `undefined`. Isso significa que você pode acessar uma variável declarada com `var` dentro de uma função, mesmo antes de sua declaração, mas apenas dentro dessa função.
-Funções: Também são "içadas" para o topo da função.

Exemplo:*/

function minhaFuncao() {
  console.log(x); // undefined
  var x = 10;
}

minhaFuncao();

/*Escopo de Bloco (com `let` e `const`)

- `let` e `const`: Não são "içadas" como as variáveis com `var`. Se você tentar acessar uma variável `let` ou `const` antes de sua declaração, receberá um `ReferenceError`.

Exemplo:*/

if (true) {
  console.log(x); // ReferenceError
  let x = 10;
}

/*Por que `let` e `const` não são "içadas"?

-Escopos mais seguros:** Evitam o problema de variáveis sendo acessadas antes de serem inicializadas, o que pode levar a erros difíceis de rastrear.
-Blocos mais isolados:** Permitem criar variáveis que são visíveis apenas dentro de um bloco específico, evitando conflitos de nomes.

**Boas práticas:**

-Declare variáveis no início do escopo:** Isso torna o código mais fácil de ler e entender, e evita problemas com o hoisting.
-Use `let` e `const` sempre que possível:** Eles oferecem um escopo mais seguro e evitam muitos dos problemas associados ao `var`.
-Evite usar `var` em código moderno:** A menos que você esteja trabalhando com código legado, é recomendado evitar o uso de `var`.

Em resumo:

O hoisting é um comportamento importante a ser compreendido em JavaScript, mas também pode ser uma fonte de confusão. Ao entender como o hoisting funciona em diferentes escopos e utilizando as palavras-chave `let` e `const` de forma adequada, você pode escrever código JavaScript mais limpo e seguro.*/
