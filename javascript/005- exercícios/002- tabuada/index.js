// Exercício tabuada

/*Mostrar a tabuada no console de 0 a 10 no seguinte formato */

/*
multiplicador x número = resultado
multiplicador x 0 = resultado
multiplicador x 1 = resultado
multiplicador x 2 = resultado
multiplicador x 3 = resultado
multiplicador x 4 = resultado
multiplicador x 5 = resultado
multiplicador x 6 = resultado
multiplicador x 7 = resultado
multiplicador x 8 = resultado
multiplicador x 9 = resultado
multiplicador x 10 = resultado
*/

const multiplicador = 9;
for (let i = 0; i <= 10; i++) {
  const calc = multiplicador * i;
  console.log(`${multiplicador} x ${i} = ${calc} `);
}
