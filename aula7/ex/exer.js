const nome = "Victor Henrique"
const sobrenome = "Vieira"
const idade = 30;
const peso = 70;
const alturaEmM = 1.75;
let imc = (peso / (alturaEmM * alturaEmM));
let anoNascimento = 2022 - idade;

console.log(nome, "tem", idade, "anos e pesa", peso, "kg tem", alturaEmM, "de altura e seu IMC é de", imc);
console.log(`${nome} nasceu em ${anoNascimento}`);