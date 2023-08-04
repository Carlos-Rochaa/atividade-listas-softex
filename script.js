let nomes = [
  "Carlos",
  "João",
  "Maria",
  "Pedro",
  "Marcos",
  "Lucas",
  "Felipe",
  "Bruno",
  "Julia",
  "Paula",
];
let idades = [20, 30, 23, 24, 26, 27, 28, 31, 18, 21];
let coresFavoritas = [
  "azul",
  "verde",
  "rosa",
  "amarelo",
  "vermelho",
  "laranja",
  "roxo",
  "preto",
  "branco",
  "cinza",
];

console.log("Nomes: ", nomes);
console.log("Idades: ", idades);
console.log("Cores favoritas: ", coresFavoritas);

idades[2] = 33;
coresFavoritas[5] = "azul-marinho";

console.log("Nomes alterados: ",nomes);
console.log("Idades alteradas: ",idades);
console.log("Cores alteradas: ",coresFavoritas);
