<<<<<<< HEAD

function calcular_idade(nascimento) {

    const data = nascimento.split("/");

    const ano_nascimento = Number(data[2]);

    const ano_atual = new Date().getFullYear();

    const idade = ano_atual - ano_nascimento;

    return idade;
}


function verificar_faixa_etaria(idade) {

    if (idade < 18) {
        return "Crianca";

    } else if (idade <= 25) {
        return "Jovem Adulto";    

    } else if (idade < 65) {
        return "Adulto";

    } else {
        return "Idoso";
    }
}


function calcular_metros_para_centimetros(altura) {

    return altura * 100;

}


module.exports = {
    calcular_idade,
    verificar_faixa_etaria,
    calcular_metros_para_centimetros
};
=======
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
>>>>>>> 8bda450e27c8715ba1edff0031d1827cf56604ce
