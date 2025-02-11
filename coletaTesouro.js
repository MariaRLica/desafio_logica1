// Entrada de dados
const totalSalas = parseInt(gets());

// Aqui temos uma demonstração de arrays com valores já predefinidos:
const salasComTesouro = [2, 4, 7];  // Tesouros estão nas salas 2, 4 e 7
const salasComMonstro = [3, 6, 8];  // Monstros estão nas salas 3, 6 e 8

// Loop que percorre todas as salas da masmorra
for (let sala = 1; sala <= totalSalas; sala++) {
    // Verificamos se a sala contém tesouro ou monstro usando o método .includes()
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

    // Verificamos e imprimimos o que há na sala (se tesouro ou monstro)
    if (temTesouro) {
        print("Tesouro na sala " + sala + "!");
    } else if (temMonstro) {
        print("Monstro na sala " + sala + "!");
    }
}
