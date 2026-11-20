
const calculadoras = require("./src/scripts/calculadoras");

const verificar_entrada = require("./src/rules/rules");

// Receber os argumentos
const argumentos = process.argv.slice(2);

if (argumentos.length !== 6) {
    console.log("Informe os 6 argumentos!");
    process.exit(1);
}

// Separar os argumentos
const nome = argumentos[0];
const nascimento = argumentos[1];
const altura = Number(argumentos[2]);
const brinquedo = argumentos[3];
const data_visita = argumentos[4];
const acompanhante = argumentos[5];

// Verificar altura
if (isNaN(altura) || altura <= 0) {
    console.log("Altura invalida!");
    process.exit(1);
}

// Calcular idade
const idade = calculadoras.calcular_idade(nascimento);

// Verificar faixa etaria
const faixa_etaria = calculadoras.verificar_faixa_etaria(idade);

// Verificar acompanhante
if (faixa_etaria === "Crianca" || faixa_etaria === "Idoso") {

    if (!acompanhante.trim()) {
        console.log("Voce precisa de um acompanhante!");
        process.exit(1);
    }
}

// Converter altura para centimetros
const altura_cm = calculadoras.calcular_metros_para_centimetros(altura);

// Criar objeto da pessoa
const pessoa = {
    nome: nome,
    idade: idade,
    altura: altura_cm
};

// Transformar objeto em JSON
const dados_pessoa = JSON.stringify(pessoa);

// Verificar entrada no brinquedo
const resultado = verificar_entrada(dados_pessoa, brinquedo);

// Exibir resultado
console.log("----------------------------");
console.log("PARQUE DE DIVERSAO");
console.log("----------------------------");

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Faixa etaria:", faixa_etaria);
console.log("Altura:", altura_cm, "cm");
console.log("Brinquedo:", brinquedo);
console.log("Data da visita:", data_visita);
console.log("Acompanhante:", acompanhante || "Nenhum");

console.log("----------------------------");
console.log(resultado);

if (resultado !== "Pode entrar no brinquedo!") {
    process.exit(1);
}
