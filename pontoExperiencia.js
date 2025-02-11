// Captura a entrada do nível do monstro e da dificuldade da batalha
let num1 = parseInt(prompt("Digite o nível do monstro:")); // Nível do monstro
let num2 = parseInt(prompt("Digite a dificuldade da batalha (1 a 100):")); // Dificuldade da batalha

// Cálculo do XP ganho usando a fórmula: nivel * dificuldade * 100
const xpGanho = num1 * num2 * 100; // Fórmula para calcular o XP

// Imprime a quantidade de XP ganho
console.log("Você ganhou " + xpGanho + " XP!");


//Se estiver usando o ambiente do Beecrowd, a estrutura seria algo como:

let num1 = parseInt(gets()); // Captura o nível do monstro
let num2 = parseInt(gets()); // Captura a dificuldade da batalha

// Calculando o XP
const xpGanho = num1 * num2 * 100;

// Exibindo o resultado
print("Você ganhou " + xpGanho + " XP!");

