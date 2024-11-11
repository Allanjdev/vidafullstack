//Null
/* Em JavaScript, null é um valor primitivo que representa a ausência intencional de qualquer objeto ou valor. É como um espaço vazio que você atribui a uma variável, indicando explicitamente que ela não contém nada no momento.

Quando usar null?

Inicialização de variáveis: Ao declarar uma variável e você ainda não tem um valor específico para ela, atribuir null pode ser útil para indicar que ela será preenchida posteriormente.
Limpeza de variáveis: Para remover o valor de uma variável, atribuir null pode ser uma forma de "zerar" seu conteúdo.
Retornar valores em funções: Se uma função não encontrar o valor esperado, ela pode retornar null para indicar a ausência de resultado.*/

// Inicialização com null
let nome = null;
console.log(nome); // Saída: null

// Verificando se uma variável é null
if (nome === null) {
  console.log("A variável 'nome' está vazia.");
}

// Limpando uma variável
nome = "João";
console.log(nome); // Saída: João
nome = null;
console.log(nome); // Saída: null

// Função que retorna null se não encontrar o valor
function encontrarProduto(id) {
  // Lógica para buscar o produto
  if (produtoEncontrado) {
    return produtoEncontrado;
  } else {
    return null;
  }
}

let produto = encontrarProduto(123);
if (produto === null) {
  console.log("Produto não encontrado.");
}

// null: Um valor atribuído explicitamente para indicar a ausência intencional de um valor.

/*
Importante:

Comparação: Use o operador de igualdade estrita (===) para comparar com null, pois ele não realiza conversão de tipos.
Tipo: typeof null retorna "object", o que pode ser confuso. Isso é uma peculiaridade histórica do JavaScript. */

/*Quando evitar null?

Embora null seja útil em muitas situações, o uso excessivo pode levar a código mais difícil de entender e manter. Em alguns casos, pode ser preferível usar outros mecanismos como valores padrão, tipos opcionais ou estruturas de dados mais complexas para lidar com a ausência de valores. */
