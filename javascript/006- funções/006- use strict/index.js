//Strict mode

/*O strict mode em JavaScript é um recurso introduzido no ECMAScript 5 que visa tornar o código mais seguro e eficiente, ao mesmo tempo em que ajuda a evitar erros comuns. Ao ativar o strict mode, você está optando por uma variante mais restrita do JavaScript, onde algumas ações que eram permitidas anteriormente agora geram erros.*/

//Por que usar o strict mode?

/*- Prevenção de erros: O modo estrito ajuda a capturar erros comuns de codificação que podem ser difíceis de detectar em tempo de execução.
- Código mais limpo: Ao forçar a escrita de código mais disciplinado, o strict mode contribui para um código mais limpo e manutenível.
- Melhoria de desempenho: Em alguns casos, o modo estrito pode permitir que os motores JavaScript realizem otimizações mais eficazes.
- Preparação para o futuro: O strict mode é o padrão para o JavaScript moderno, e muitas das novas funcionalidades da linguagem assumem que o código está em modo estrito.*/

//Como ativar o strict mode?

//Existem duas maneiras principais de ativar o strict mode:

//No início do arquivo:

"use strict";
// Resto do seu código

//Dentro de uma função:

function minhaFuncao() {
  "use strict";
  // Código da função
}

//Nesse caso, o modo estrito se aplica apenas à função e às funções aninhadas dentro dela.

//Quais são as principais diferenças do strict mode?

/*- Variáveis não declaradas: Tentar usar uma variável que não foi declarada com `var`, `let` ou `const` resultará em um erro.
- Atribuições a propriedades somente leitura: Não é permitido atribuir valores a propriedades somente leitura de objetos globais, como `undefined`, `NaN` e `Infinity`.
- `this` em funções não strict: Dentro de uma função não strict, o valor de `this` pode ser diferente do esperado, especialmente em contextos como callbacks. No strict mode, `this` é `undefined` se não for explicitamente definido.
- `with` statement: O uso do `with` statement é proibido em strict mode, pois pode levar a comportamentos inesperados e dificultar a otimização do código.
- Octal literals: Literais octais (iniciados com 0) não são permitidos em strict mode.
- Duplicados de parâmetros: Não é permitido declarar o mesmo parâmetro mais de uma vez na definição de uma função.
- Eliminar variáveis: Não é possível eliminar variáveis usando `delete`.*/

//Exemplo:

("use strict");

// Erro: x não foi declarada
console.log(x);

// Erro: Não é possível atribuir a undefined
undefined = 5;

// Erro: Duplicado de parâmetro
function minhaFuncao(a, a) {}

//Quando usar o strict mode?

/*É altamente recomendado usar o strict mode em todos os seus projetos JavaScript. Os benefícios superam em muito os inconvenientes, e a maioria dos linters e ferramentas de formatação já configuram o strict mode por padrão.*/

//Exemplo:

//1. Variáveis não declaradas:
("use strict");
// Sem strict mode, isso criaria uma variável global 'x'
x = 10; // Erro em strict mode: 'x' is not defined
let y = 20;

//_________________________________________________________________________________

//2. Atribuições a propriedades somente leitura:
("use strict");
// Sem strict mode, isso atribuiria 5 a undefined
undefined = 5; // Erro em strict mode
//Comportamento: O modo estrito impede a atribuição de valores a propriedades somente leitura, como undefined, NaN e Infinity.

//_________________________________________________________________________________

//3. `this` em funções não strict:
("use strict");

function minhaFuncao() {
  console.log(this); // undefined
}

minhaFuncao();
//Comportamento: Dentro de uma função não strict, o valor de this pode variar dependendo do contexto. No strict mode, this é undefined se não for explicitamente definido.

//_________________________________________________________________________________

//4. with statement:
("use strict");

// O uso de 'with' é proibido em strict mode
with (Math) {
  console.log(min(2, 3));
} // Erro em strict mode
//Comportamento: O with statement é considerado uma má prática e pode levar a comportamentos inesperados. O strict mode o proíbe.

//_________________________________________________________________________________

//5. Octal literals:
("use strict");

let numero = 010; // Erro em strict mode: Octal literals are not allowed in strict mode
//Comportamento: Literais octais (iniciados com 0) não são permitidos em strict mode, pois podem levar a confusões.

//_________________________________________________________________________________

//6. Duplicados de parâmetros:
("use strict");

function minhaFuncao(a, a) {
  // Erro em strict mode
  // ...
}
//Comportamento: Não é permitido declarar o mesmo parâmetro mais de uma vez na definição de uma função.

//_________________________________________________________________________________

//7. Eliminar variáveis:
("use strict");

let x = 10;
delete x; // Erro em strict mode
//Comportamento: Não é possível eliminar variáveis usando delete em strict mode.
