// Para definir o nome e a XP do herói
let nome = "SeuNome"; // Substituir  "SeuNome" pelo nome do herói
let xp = 6000; // Substituir "6000" pela quantidade de XP do herói

// Estrutura de decisão para determinar o nível com base na XP
let nivel;
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exiba a mensagem com o nome e o nível do herói!
console.log("O Herói de nome " + nome + " está no nível de " + nivel);
