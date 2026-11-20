
const parque = require("./rules.json");

function verificar_entrada(dados_pessoa, brinquedo) {

    const pessoa = JSON.parse(dados_pessoa);

    const idade = pessoa.idade;
    const altura = pessoa.altura;

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

module.exports = verificar_entrada;
