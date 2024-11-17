//IIFE em JavaScript: Funções Imediatamente Invocadas

// O que é uma IIFE?

/*IIFE é a sigla para *Immediately Invoked Function Expression*, ou seja, **Expressão de Função Imediatamente Invocada**. É uma função anônima que é declarada e executada imediatamente após sua definição.*/

//Para que serve?

/*Criar escopos isolados: IIFEs criam um escopo local, evitando conflitos de nomes com variáveis globais. Isso é útil para modularizar o código e evitar a poluição do escopo global.
- Executar código imediatamente: O código dentro da IIFE é executado assim que a função é definida, o que pode ser útil para inicializar variáveis ou executar tarefas específicas no momento da carga da página.
- Modularizar código: IIFEs podem ser usadas para criar módulos, encapsulando lógica e dados relacionados.
- Evitar variáveis globais:Ao criar um escopo isolado, IIFEs ajudam a manter o código mais limpo e organizado.*/

//Estrutura básica:

(function () {
  // Código a ser executado
})();

/*- Parênteses externos: Forçam o JavaScript a interpretar a expressão como uma expressão de função em vez de uma declaração de função.
- Parênteses internos: Invocam a função imediatamente após sua definição.*/

//Exemplo prático:

(function () {
  var nome = "João";
  console.log("Olá, " + nome + "!");
})();

//Neste exemplo, a variável `nome` só existe dentro do escopo da IIFE e não pode ser acessada fora dela.

//1. Criando um módulo simples

(function () {
  // Variáveis e funções privadas
  let contador = 0;

  function incrementar() {
    contador++;
  }

  // Função pública
  window.meuModulo = {
    getContador: function () {
      return contador;
    },
    incrementar: incrementar,
  };
})();

//Explicação:

/*- Isolamento: A IIFE cria um escopo isolado, onde as variáveis `contador` e a função `incrementar` são privadas.
- Exposição pública: A propriedade `window.meuModulo` expõe as funções `getContador` e `incrementar` para o escopo global, permitindo que outros partes do código as utilizem.
- Encapsulamento: A lógica interna da contagem é encapsulada dentro da IIFE, protegendo-a de alterações externas.*/

//2. Inicializando variáveis globais

(function () {
  window.config = {
    apiUrl: "[https://api.example.com](https://api.example.com/)",
    debugMode: false,
  };
})();

//Explicação:

/*- Inicialização segura: A IIFE garante que a variável `config` seja inicializada apenas uma vez e que seu valor não seja acidentalmente sobrescrito por outro script.
- Evita conflitos: Ao criar um objeto `config` dentro da IIFE, evitamos conflitos com outras variáveis globais que possam ter o mesmo nome.*/

//3. Criando um namespace

(function (namespace) {
  namespace.utils = {
    log: function (message) {
      console.log(message);
    },
  };
})((window.myApp = {}));

//Explicação:

/*- Namespace: Criamos um namespace `myApp` para agrupar funcionalidades relacionadas.
- Passagem de parâmetro: A IIFE recebe o objeto `window.myApp` como parâmetro, permitindo adicionar propriedades a ele.
- Organização: A função `log` é adicionada ao namespace `myApp.utils`, organizando o código e evitando conflitos de nomes.*/

//4. Simulando um módulo ES6

const meuModulo = (function () {
  // ... código do módulo
  return {
    // Exportações públicas
  };
})();

//Explicação:

/*- Módulo ES6: Essa abordagem simula a sintaxe de módulos ES6, retornando um objeto com as exportações públicas.
- Reutilização: O módulo `meuModulo` pode ser reutilizado em diferentes partes do código.*/

//Aplicações comuns

/*- Módulos: IIFEs são frequentemente usadas para criar módulos em JavaScript, antes da popularização de módulos ES6.
- Namespaces: Podem ser usadas para criar namespaces e evitar conflitos de nomes.
- Inicialização de variáveis: São úteis para inicializar variáveis globais de forma controlada, evitando que sejam sobrescritas por outros scripts.
- Proteção contra escopo global: Ajudam a evitar a poluição do escopo global com variáveis e funções.*/

//Quando usar IIFEs?

/*- Criar módulos: Para encapsular lógica e dados relacionados.
- Inicializar variáveis globais: Para garantir a inicialização segura de variáveis globais.
- Evitar conflitos de nomes: Para evitar que variáveis e funções com o mesmo nome causem problemas.
- Simular módulos ES6: Em ambientes que não suportam nativamente módulos ES6.*/

//Vantagens

/*- Isolamento de escopo: Evita conflitos de nomes.
- Execução imediata: Permite executar código imediatamente após a definição.
- Modularização: Facilita a organização do código.
- Proteção contra escopo global:Mantém o código mais limpo e organizado.*/

//Desvantagens

/*- Sintaxe: A sintaxe pode ser considerada um pouco verbosa, especialmente em comparação com as arrow functions e módulos ES6.
- Não tão comum em JavaScript moderno: Com a introdução de módulos ES6, a necessidade de IIFEs diminuiu significativamente.*/
