/*Em JavaScript, o valor undefined indica que uma variável foi declarada, mas ainda não possui um valor atribuído. É como uma caixa vazia com um rótulo, mas sem nenhum conteúdo dentro. */

// Variável declarada, mas sem atribuição:
let nome;
console.log(nome); // Saída: undefined

//Acesso a uma propriedade inexistente de um objeto:
const pessoa = { nome: "João" };
console.log(pessoa.idade); // Saída: undefined

//Acesso a um índice inexistente de um array:
const frutas = ["maçã", "banana"];
console.log(frutas[2]); // Saída: undefined

//Retorno de uma função que não retorna nada:
function minhaFuncao() {
  // Não há um return explicitamente
}
console.log(minhaFuncao()); // Saída: undefined

//Parâmetro de uma função que não foi passado:
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}
saudacao(); // Saída: Olá, undefined!

//Operador typeof:
if (typeof nome === "undefined") {
  console.log("A variável nome é undefined");
}

//Comparação direta:
if (nome === undefined) {
  console.log("A variável nome é undefined");
}

/*Por que entender undefined é importante?

Evitar erros: Ao verificar se uma variável é undefined antes de usá-la, você pode evitar erros como TypeError.
Controle de fluxo: Você pode usar undefined para controlar o fluxo de execução de seu código, por exemplo, em condicionais e loops.
Debugging: O valor undefined pode indicar problemas em seu código, como variáveis não inicializadas ou acessos a propriedades inexistentes. */
