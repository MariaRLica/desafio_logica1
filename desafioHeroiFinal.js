class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar();  // O guerreiro atacou usando espada

const heroi2 = new Heroi("Merlin", 150, "mago");
heroi2.atacar();  // O mago atacou usando magia

const heroi3 = new Heroi("Bruce", 40, "monge");
heroi3.atacar();  // O monge atacou usando artes marciais

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar();  // O ninja atacou usando shuriken
