//operadores aritméticos

/*
Em JavaScript, os operadores aritméticos são símbolos que permitem realizar cálculos matemáticos sobre números. Eles são essenciais para realizar uma ampla variedade de tarefas, desde simples cálculos até a criação de algoritmos complexos.
*/

/*
Tipos de operadores aritméticos:

Adição (+): Soma dois valores numéricos.
Exemplo: let resultado = 5 + 3; // resultado será 8
Subtração (-): Subtrai um valor numérico de outro.
Exemplo: let diferenca = 10 - 4; // diferenca será 6
Multiplicação (*): Multiplica dois valores numéricos.
Exemplo: let produto = 2 * 6; // produto será 12
Divisão (/): Divide um valor numérico por outro.
Exemplo: let quociente = 15 / 3; // quociente será 5
Módulo (%): Retorna o resto da divisão de dois números inteiros.
Exemplo: let resto = 11 % 4; // resto será 3
Incremento (++): Adiciona 1 ao valor de uma variável.
Exemplo: let x = 5; x++; // x será 6
Decremento (--): Subtrai 1 do valor de uma variável.
Exemplo: let y = 10; y--; // y será 9
*/

/*
Usabilidade:

Os operadores aritméticos são usados em diversas situações, como:

Cálculos simples:
Calcular a área de um retângulo: let area = base * altura;
Calcular a média de um conjunto de números: let media = (nota1 + nota2 + nota3) / 3;
Manipulação de dados:
Aumentar ou diminuir o valor de uma variável: let idade = 25; idade++;
Condições:
Verificar se um número é par: if (numero % 2 === 0) { ... }
Laços de repetição:
Contar até um determinado número: for (let i = 0; i < 10; i++) { ... }
*/

// Calcular o IMC (Índice de Massa Corporal)
let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

// Verificar se o número é par ou ímpar
let numero = 13;
if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

/*
O que é ordem de precedência?

Em JavaScript, a ordem de precedência define a sequência em que as operações são realizadas em uma expressão. É como uma hierarquia matemática: algumas operações são executadas antes de outras, mesmo que apareçam na mesma linha de código. 
*/

/*
Operador	             Descrição

()	                    Parênteses (usados para agrupar expressões)

*, /, %	                Multiplicação, divisão, módulo

+, -	                  Adição, subtração

<, >, <=, >=	          Comparação (menor, maior, menor ou igual, maior ou igual)

==, !=	               Igualdade, diferença

&&	                   E lógico

`	                     `

=	                     Atribuição
*/

/*
Como a ordem de precedência funciona na prática?

Parênteses: Os parênteses têm a maior precedência. Eles são usados para forçar a avaliação de uma expressão antes de outras. Por exemplo, em (5 + 3) * 2, a adição dentro dos parênteses será realizada primeiro, resultando em 16.
Multiplicação, divisão e módulo: Essas operações têm precedência maior que adição e subtração. Por exemplo, em 5 + 3 * 2, a multiplicação será realizada primeiro, resultando em 11.
Adição e subtração: Essas operações são realizadas após a multiplicação, divisão e módulo.
Comparação: Os operadores de comparação são avaliados após as operações aritméticas.
Lógicos: Os operadores lógicos (E e OU) são avaliados após as comparações.
Atribuição: A atribuição é a operação de menor precedência.
*/

let resultado = 10 + 5 * 2 - 3;
/*
Nessa expressão, as operações serão realizadas da seguinte forma:

5 * 2 (multiplicação)
10 + 10 (adição)
20 - 3 (subtração)
O resultado final será 17.
*/

// Operadores lógicos
/*Os operadores lógicos são utilizados para combinar expressões booleanas (verdadeiro ou falso) e produzir um resultado booleano */

/*
E lógico (&&): Retorna verdadeiro apenas se ambas as expressões forem verdadeiras.
Exemplo: true && true retorna true
Ou lógico (||): Retorna verdadeiro se pelo menos uma das expressões for verdadeira.
Exemplo: true || false retorna true
Negação (!): Inverte o valor booleano de uma expressão.
Exemplo: !true retorna false
 */

let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Você pode dirigir.");
}

/*
Operadores de Comparação
Os operadores de comparação são utilizados para comparar valores e retornar um resultado booleano.
*/

/*
Igualdade (==): Verifica se dois valores são iguais.
Exemplo: 5 == 5 retorna true
Desigualdade (!=): Verifica se dois valores são diferentes.
Exemplo: 5 != 3 retorna true
Maior que (>): Verifica se o valor à esquerda é maior que o valor à direita.
Exemplo: 10 > 5 retorna true
Menor que (<): Verifica se o valor à esquerda é menor que o valor à direita.
Exemplo: 3 < 5 retorna true
Maior ou igual que (>=): Verifica se o valor à esquerda é maior ou igual ao valor à direita.
Exemplo: 5 >= 5 retorna true
Menor ou igual que (<=): Verifica se o valor à esquerda é menor ou igual ao valor à direita.
Exemplo: 3 <= 5 retorna true
*/

let nota = 7;

if (nota >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}

/*
Operadores de Atribuição
Os operadores de atribuição são utilizados para atribuir um valor a uma variável.

Atribuição simples (=): Atribui o valor da direita à variável à esquerda.
Exemplo: let x = 10;
Atribuição composta: Combinam uma operação aritmética com a atribuição.
Exemplos: x += 5 (equivalente a x = x + 5), x -= 3 (equivalente a x = x - 3)
*/

let contador = 0;
contador++; // Incrementa contador em 1
console.log(contador); // Imprime 1

let x = 5;
x++; // x agora vale 6
x--; // x agora vale 5

let Idade = 25;
let tem_Carteira = true;
let Nota = 8;

if (Idade >= 18 && tem_Carteira && Nota >= 7) {
  console.log("Você pode dirigir e está aprovado!");
} else if (Idade >= 18 && tem_Carteira) {
  console.log("Você pode dirigir, mas precisa estudar mais.");
} else {
  console.log("Você não pode dirigir.");
}
