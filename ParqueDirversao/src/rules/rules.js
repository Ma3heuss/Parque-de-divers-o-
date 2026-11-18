const parque = require("./rules.json");




function verificarEntrada(brinquedo, idade, altura) {

    const regra = parque.parque.restricoes[brinquedo];

    if (!regra) {
        return "Brinquedo nao encontrado!";
    }

    if (idade < regra.idade_minima) {
        return "Idade insuficiente!";
    }

    if (altura < regra.altura_minima) {
        return "Altura insuficiente!";
    }

    if (altura > regra.altura_maxima) {
        return "Altura acima do permitido!";
    }

    return "Pode entrar no brinquedo!";
}

module.exports = verificarEntrada;