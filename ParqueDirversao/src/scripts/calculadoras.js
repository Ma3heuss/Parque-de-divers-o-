function CalcularIdade(nascimento) {
    const data = new Date(nascimento);
    const hoje = new Date();

    const diferenca = hoje - data;

    const idade = Math.ceil(diferenca / (1000 * 60 * 60 * 24 * 365.25));

    return idade;
}

function VerificarFaixaEtaria(idade) {
    if (idade < 18) {
        return "criança";
    } else if (idade <= 25) {
        return "jovem adulto";
    } else if (idade < 65) {
        return "adulto";
    } else {
        return "idoso";
    }
}

function CalcularMetrosParaCentimetros(altura) {
    return altura * 100;
}
