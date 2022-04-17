/*
    Primitivos(imutáveis) - string, number, boolean, undefined, null (bigint,symbol) - Valores copiados

    Referência(mutável) - array, object, function - passados por referência
*/

//let nome = 'Victor';
//nome[0] = 'A'; //String é imutavel - Valor

//console.log(nome[0], nome);

//let a = 'A';
//et b = a; //Cópia

//console.log(a, b);

//a = 'Outra coisa';
//console.log(a, b);

//let a = [1,2,3];
//let b = [...a];
//let c = b;
//console.log(a, b);

//a.push(4);
//console.log(a, b);

//b.pop();
//console.log(a , b);

//a.push("Luiz");
//console.log(c);

const a = {
    nome: 'Victor',
    sobrenome: 'Oliveira'
};

const b = {...a};

a.nome = 'Joao';
console.log(a);
console.log(b);