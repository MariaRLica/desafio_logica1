// Lê a escolha do treinador (número) e converte para inteiro
let escolhaDoTreinador = parseInt(gets());

// Variável para armazenar o Pokémon escolhido
let pokemonEscolhido;

// Usamos uma série de condições para decidir o Pokémon escolhido
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur"; // Se o número for 1, escolhe o Bulbasaur
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander"; // Se o número for 2, escolhe o Charmander
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu"; // Se o número for 4, escolhe o Pikachu
} else {
    // Para qualquer outro número, escolhe o Mewtwo
    pokemonEscolhido = "Mewtwo"; 
}

// Imprime qual Pokémon foi escolhido
print("Você escolheu o " + pokemonEscolhido + " como seu Pokémon inicial.");
