//Funções construtoras

/*Em JavaScript, funções construtoras são funções especiais utilizadas para criar objetos. Elas servem como modelos ou "blueprints" para a criação de múltiplas instâncias de objetos com propriedades e métodos semelhantes. Ao invés de criar objetos diretamente, utilizamos funções construtoras para instanciar novos objetos.*/

//Para que servem?

/*- Criação de objetos: São a base para a criação de objetos personalizados em JavaScript.
- Organização de código: Permitem organizar o código em estruturas de dados mais complexas e reutilizáveis.
- Herança: Fornecem a base para a implementação de herança em JavaScript, permitindo a criação de hierarquias de objetos.*/

//Como funcionam?

/*- Palavra-chave `new`: Ao chamar uma função construtora com a palavra-chave `new`, um novo objeto é criado.
- `this`: Dentro da função construtora, `this` se refere ao novo objeto que está sendo criado.
- Atribuição de propriedades: Propriedades são atribuídas ao objeto utilizando `this`.
- Retorno implícito: A função construtora retorna implicitamente o novo objeto criado.*/

//Estrutura básica:

function NomeDoConstrutor(parâmetros) {
  // Atribuição de propriedades ao objeto
  this.propriedade1 = valor1;
  this.propriedade2 = valor2;
  // Métodos
  this.método = function () {
    // Lógica do método
  };
}

Exemplo: function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.cumprimentar = function () {
    console.log(
      "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos."
    );
  };
}

// Criando instâncias
const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

pessoa1.cumprimentar(); // Saída: Olá, meu nome é João e tenho 30 anos.
pessoa2.cumprimentar(); // Saída: Olá, meu nome é Maria e tenho 25  anos.

//Por que usar funções construtoras?

/*- Reutilização de código: Crie um modelo de objeto e instância-o quantas vezes precisar.
- Organização: Agrupa dados e comportamentos relacionados em um único objeto.
- Herança: Permite criar hierarquias de objetos, onde objetos herdam propriedades e métodos de outros objetos.*/

//Quando usar funções construtoras?

/*- Criação de objetos complexos: Quando você precisa criar objetos com muitas propriedades e métodos.
- Quando você precisa de herança: Funções construtoras são a base para a implementação de herança em JavaScript.*/

//Desvantagens e alternativas:

/*- Sintaxe verbosa: A sintaxe pode ser mais verbosa em comparação com outras abordagens.
- Prototipagem: A compreensão da prototipagem em JavaScript é fundamental para usar funções construtoras de forma eficaz.
- Classes (ES6): Com o surgimento das classes no ECMAScript 6, a sintaxe para criar objetos se tornou mais intuitiva e similar a outras linguagens orientadas a objetos.*/

//Em resumo:

/*Funções construtoras são uma ferramenta poderosa para criar objetos personalizados em JavaScript. Elas oferecem uma forma de organizar o código e criar estruturas de dados complexas. No entanto, com a introdução das classes no ES6, a sintaxe para criar objetos se tornou mais moderna e expressiva. A escolha entre funções construtoras e classes depende das suas preferências e do contexto do seu projeto.*/

// Mais alguns exemplos:

//1. Criando um objeto "Carro":
function Carro(modelo, ano) {
  this.modelo = modelo;
  this.ano = ano;
  this.ligar = function () {
    console.log("O carro " + this.modelo + " está ligado.");
  };
}

// Criando instâncias
const meuCarro = new Carro("Gol", 2020);
const carroDaEmpresa = new Carro("Corolla", 2023);

meuCarro.ligar(); // Saída: O carro Gol está ligado.
carroDaEmpresa.ligar(); // Saída: O carro Corolla está ligado.

//2. Herança com Funções Construtoras:
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.fazerSom = function () {
  console.log("Fazendo um som genérico.");
};

function Cachorro(nome, raca) {
  Animal.call(this, nome); // Herança do construtor Animal
  this.raca = raca;
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.latir = function () {
  console.log("Au au!");
};

const meuCachorro = new Cachorro("Rex", "Labrador");
meuCachorro.fazerSom(); // Saída: Au au! (herda de Animal e sobrescreve)

//3. Funções Construtoras e Prototypes:
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.apresentar = function () {
  console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
};

// Adicionando um método ao protótipo depois de criar instâncias
Pessoa.prototype.aniversario = function () {
  this.idade++;
};

/*
Explicações:

Criando objetos: As funções construtoras servem como moldes para criar objetos. A palavra-chave new instancia um novo objeto a partir da função.
Propriedades e métodos: Dentro da função construtora, this se refere ao objeto sendo criado. As propriedades e métodos são atribuídos a this.
Herança: Para criar hierarquias de objetos, utilizamos a técnica de herança prototípica. A propriedade prototype de uma função construtora permite adicionar métodos e propriedades que serão compartilhados por todas as instâncias.
call() e apply(): Esses métodos permitem chamar uma função com um contexto específico (valor de this). No exemplo da herança, Animal.call(this, nome) chama o construtor de Animal no contexto do objeto Cachorro, garantindo a herança.
Modificando o protótipo: Podemos adicionar novos métodos ao protótipo de uma função construtora mesmo depois de criar instâncias.
Por que usar funções construtoras?

Reutilização de código: Crie um modelo de objeto e instância-o quantas vezes precisar.
Organização: Agrupa dados e comportamentos relacionados em um único objeto.
Herança: Permite criar hierarquias de objetos, onde objetos herdam propriedades e métodos de outros objetos.
Base para classes: As funções construtoras são a base para a sintaxe de classes introduzida no ECMAScript 6.
*/
