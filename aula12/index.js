let varA = 'A'
let varB = 'B'
let varC = 'C'

let A = varA;
let B = varB;
let C = varC;

varA = B;
varB = C;
varC = A;

console.log(varA, varB, varC);