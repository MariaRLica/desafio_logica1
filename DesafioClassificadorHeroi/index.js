function classificarHeroi(nome, xp){
    let nivelHeroi;
    
    if (xp<1000){
        nivelHeroi = "Ferro";
    }else if (xp<=2000){
        nivelHeroi = "Bronze";
    } else if (xp<=5000){
        nivelHeroi ="Prata";
    } else if (xp<=7000){
        nivelHeroi = "Ouro";
    } else if (xp<=8000){
        nivelHeroi ="Platina";
    } else if (xp<=9000){
        nivelHeroi = "Ascendente";
    } else if (xp<=10000){
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }
    return 'O heroi de nome ${nome} esta no nivel de ${nivelHeroi}';

    }

    const herois = [
        { nome: "joao", xp: 7500},
        { nome: "LEANDO",xp: 8500},
        { nome: "PEDRO", xp: 9200},
        { nome: "LUCAS", xp: 3300},
        { nome: "BENEDITO", xp: 10600}

    ];
    herois.forEach(heroi =>console.log(classificarHeroi(heroi.nome, heroi.xp)));


   
