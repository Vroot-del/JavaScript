const numero = Number(prompt("Digite um número")) ;
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerText = `Seu número + 2 é ${numero + 2}.      #`;
texto.innerText = `${numero} é inteiro: ${Number.isInteger(numero)}`;
texto.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)}      #`;
texto.innerHTML += `É NaN: ${isNaN(numero)}      #`;
texto.innerHTML += `Arredondando pra baixo: ${Math.floor(numero)}      #`;
texto.innerHTML += `Arredondando pra cima: ${Math.ceil(numero)}      #`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}      #`
