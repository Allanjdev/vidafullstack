/*
Em JavaScript, objetos são estruturas de dados que permitem agrupar propriedades (chaves) e seus respectivos valores. Pense em um objeto como uma caixa que contém várias gavetas, cada gaveta com um rótulo (a chave) e um conteúdo (o valor).
*/

// Criando um objeto literal
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Programador",
  hobbies: ["ler", "jogar", "cozinhar"], // Um array dentro de um objeto
};

//Acessando Propriedades:
//Existem duas formas principais de acessar as propriedades de um objeto:

//Notação de ponto:
console.log(pessoa.nome); // Imprime: João

//Notação de colchetes:
console.log(pessoa["idade"]); // Imprime: 30

//Adicionando e Removendo Propriedades:

// Adicionando uma nova propriedade
pessoa.cidade = "São Paulo";

// Removendo uma propriedade
delete pessoa.idade;

//Métodos de Objetos:
/*Métodos são funções associadas a um objeto. Eles permitem que você execute ações sobre o objeto. */

const carro = {
  marca: "Ford",
  modelo: "Ka",
  ligar: function () {
    console.log("Ligando o carro...");
  },
};

carro.ligar(); // Imprime: Ligando o carro...

/*
Tipos de Dados em Propriedades:

As propriedades de um objeto podem armazenar qualquer tipo de dado em JavaScript, incluindo:

Strings: "Olá", "mundo"
Números: 42, 3.14
Booleanos: true, false
Objetos: Outros objetos, arrays
Funções: Métodos
*/

//Exemplo completo:

const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  paginas: 1178,
  lerCapitulo: function (capitulo) {
    console.log(`Lendo o capítulo ${capitulo}...`);
  },
};

// Acessando propriedades
console.log(livro.titulo);
console.log(livro["anoPublicacao"]);

// Chamando um método
livro.lerCapitulo(3);

// Adicionando uma nova propriedade
livro.editora = "Martins Fontes";

/*
Por que usar Objetos?
-Organização: Agrupar dados relacionados em um único lugar.
-Reusabilidade: Criar objetos que podem ser reutilizados em diferentes partes do código.
-Modularidade: Dividir o código em partes menores e mais gerenciáveis.
-Abstração: Esconder a complexidade interna de um objeto.
*/
