// Switch

/*
Janeiro
Fevereiro
Março
Abril
Maio
Junho
Julho
Agosto
Setembro
Outubro
Novembro
Dezembro
*/

switch (variavel) {
  case valor1:
    // Bloco de código a ser executado quando a variavel for igual a valor1
    break;
  case valor2:
    // Bloco de código a ser executado quando a variavel for igual a valor2
    break;
  default:
  // Bloco de código a ser executado quando nenhum dos casos anteriores for verdadeiro
}

const mes = 5; // variável - condição

switch (
  mes // verifica condição
) {
  case 1: // valor = condição
    console.log("Janeiro"); // retorno
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;

  default: // se não encontrar alguma condição válida deve passar algo para o usuário
    console.log("Nada encontrado!");
    break;
}
