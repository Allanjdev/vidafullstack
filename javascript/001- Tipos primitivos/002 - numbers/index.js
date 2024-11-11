let stringNumero = "123";
let numero = Number(stringNumero); // numero será 123

let stringDecimal = "3.14";
let decimalNumber = parseFloat(stringDecimal); // decimalNumber será 3.14

let stringInteiro = "42a"; // A letra "a" impede a conversão completa
let inteiroNumber = parseInt(stringInteiro); // inteiroNumber será 42 (ignora a parte não numérica)

/*Muitas vezes, você receberá dados em formato de string (texto) e precisará convertê-los para números para realizar cálculos. As funções mais comuns para isso são:

- Number()**: Converte uma string para um número. Se a string não puder ser convertida, retorna NaN (Not a Number).
- parseInt()**: Converte uma string para um número inteiro.
- parseFloat()**: Converte uma string para um número de ponto flutuante. */

// Somando Números e Strings Convertidas
/*Uma vez que você tiver os números, pode realizar operações matemáticas como a soma.*/

let num1 = 10;
let num2String = "5";
let num2 = Number(num2String);

let resultado = num1 + num2; // resultado será 15

/*Pontos importantes a lembrar:
NaN: Se uma conversão falhar, o resultado será NaN. Você pode verificar se um valor é NaN usando a função isNaN().
Tipos de dados: Certifique-se de que os valores que você está somando são números. Se você tentar somar uma string e um número, o JavaScript irá concatenar as strings.
Precisão de ponto flutuante: Números de ponto flutuante podem ter imprecisões devido à forma como são representados internamente. */
