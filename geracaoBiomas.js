


// Lê a quantidade de golpes informada pelo usuário.
const quantidadeGolpes = parseInt(gets()); // - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;


// Definindo os tipos de minerais: Carvão, Ferro, Diamante e Pedra
let minerais = ["Carvão", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i - 1) % minerais.length;  // Ajusta o índice para começar do zero

  // Exibe o número do golpe e o mineral correspondente
  print(i + ": " + minerais[minaIndex]); // - "print": imprime um texto de saída (output), pulando linha.
}
