
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
