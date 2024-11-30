/*O que é um Closure?
Um closure em JavaScript é a combinação de uma função e o escopo léxico (ambiente lexical) em que essa função foi criada. Em outras palavras, um closure "fecha" sobre as variáveis e parâmetros que estavam no escopo quando a função foi definida, mesmo que a função seja executada em um contexto diferente.

Em resumo: Um closure permite que uma função "lembre" de seu ambiente de criação, mesmo depois que esse ambiente já não existe mais.

Para que servem Closures?
Privacidade de dados: Closures podem ser usados para criar variáveis privadas dentro de um objeto.
Memória: Closures podem ser usados para criar funções que "lembram" de um estado anterior.
Modularização: Closures ajudam a modularizar o código, criando módulos com escopos isolados.
Callbacks: Closures são fundamentais para implementar callbacks em JavaScript.
Como funcionam?
Quando uma função é definida dentro de outra função, a função interna tem acesso às variáveis da função externa, mesmo após a função externa ter terminado de executar. Isso ocorre porque a função interna "fecha" sobre o escopo da função externa.*/

//Exemplos de Closures
//1. Criando um contador:

function criarContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2

/*A função criarContador retorna uma função que incrementa um contador privado.
Cada chamada a criarContador cria um novo contador isolado.*/

//2. Simulando variáveis privadas:

function criarObjetoComContadorPrivado() {
  let contador = 0;
  return {
    incrementar: function () {
      contador++;
    },
    getContador: function () {
      return contador;
    },
  };
}

const meuObjeto = criarObjetoContadorPrivado();
meuObjeto.incrementar();
meuObjeto.incrementar();
console.log(meuObjeto.getContador()); // 2

//O contador permanece privado, acessível apenas através dos métodos incrementar e getContador.

//3. Criando um módulo:

const modulo = (function () {
  let variavelPrivada = "valor secreto";

  function funcaoPrivada() {
    console.log(variavelPrivada);
  }

  return {
    funcaoPublica: function () {
      console.log("Esta é uma função pública.");
      funcaoPrivada();
    },
  };
})();

modulo.funcaoPublica(); // Saída: Esta é uma função pública.
// valor secreto

//O módulo tem uma variável e uma função privadas, acessíveis apenas internamente.

/*Aplicações de Closures
Callbacks em funções assíncronas: Closures são usados para manter o contexto de uma função quando ela é passada como callback.
Módulos: Closures ajudam a criar módulos com escopos isolados, evitando conflitos de nomes.
Factories: Closures podem ser usados para criar funções que geram outros objetos ou funções.
Decorators: Closures podem ser usados para criar decorators, que são funções que modificam o comportamento de outras funções.*/
