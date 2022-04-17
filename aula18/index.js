//function criaPessoa(nome, sobrenome, idade){
//    return{nome,sobrenome,idade}
//}

//const pessoa1 = criaPessoa('Victor', 'Oliveira', 30);
//const pessoa2 = criaPessoa('Brenda', 'Silva', 25);
//const pessoa3 = criaPessoa('Amanda', 'Lopes', 24);

//console.log(pessoa1.nome, pessoa2.nome);

const pessoa1 = {
    nome: 'Victor',
    sobrenome: 'Oliveira',
    idade: 30,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

