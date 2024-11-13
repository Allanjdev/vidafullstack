/*
IMC é a sigla para índice de massa corpórea, parâmetro adotado pela organização mundial da saúde para calcular o peso ideal de cada pessoa.
O cálculo do índice de massa corpórea é feito dividindo o peso da pessoa (em quilogramas) pelo quadrado da altura (em metros). O resultado é expresso em kg/m². Por exemplo, se uma pessoa pesa 70 kg e tem 1,70 m de altura, o seu índice de massa corpórea é = 22,86 kg/m².

Nosso calculo deve retornar os seguintes valores para o usuário:

resultado calculo          /     resultado para o usuário
Abaixo de 17               /     muito abaixo do peso
entre 17 e 18,49           /     abaixo do peso
entre 18,5 e 24,99        /     peso normal
entre 25 e 29,99          /     acima do peso
entre 30 e 34,99          /     obesidade 1
entre 35 e 39,99          /     obesidade 2

*/

let peso = 70;
let altura = 1.7;
let resultadoIMC = Number(peso / (altura * altura).toFixed(2));
console.log(resultadoIMC);

// Utilizando if, else if, else para resolução.
if (resultadoIMC < 17) {
  console.log("Muito abaixo do peso!");
} else if (resultadoIMC >= 17 && resultadoIMC <= 18.49) {
  console.log("Abaixo do peso!");
} else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.99) {
  console.log("Peso normal!");
} else if (resultadoIMC >= 25 && resultadoIMC <= 29.99) {
  console.log("Acima do peso!");
} else if (resultadoIMC >= 30 && resultadoIMC <= 34.99) {
  console.log("Obesidade 1!");
} else if (resultadoIMC >= 35 && resultadoIMC <= 39.99) {
  console.log("Obesidade 2!");
} else {
  console.log("Procure ajuda de um nutricionista!");
}
