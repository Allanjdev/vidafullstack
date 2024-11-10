// Falsy = false, 0, "", NaN, undefined, null
// Truthy = todos os outros diferentes de falsy

if (null) {
  console.log("Bom dia!");
} else {
  console.log("Boa noite!");
}
// O resultado será "Boa noite!" pois null é falsy e não entra no if

if (!null) {
  console.log("Bom dia!");
} else {
  console.log("Boa noite!");
}
// O resultado será "Bom dia!" pois !null é true e entra no if
