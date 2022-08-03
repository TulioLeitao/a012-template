const boll1 = false;
const boll2 = true

/* Exercício 1
if (boll1){ // if checa sempre se a condição é verdadeira
    alert ('Entrei no IF, sou a true da true')
} else {
    alert ('Entrei no else, sou falsiane')
}
console.log (boll1);*/

const boll3 = true;

/* Exercício 2

if (boll1 === boll2){
    alert ('1 e 2 são farinha do mesmo saco')
} else if (boll2 === boll3) {
    alert ('2 e 3 são farinha do mesmo saco')
} else if (boll1 === boll3) {
    alert ('1 e 3 são farinha do mesmo saco')
} else {
    alert ('Todo mundo é floquinho de neve...uuuu diferentão ele')
} */

const idade = 16

/* Exercício 3

if (idade >= 60){
    alert ('Voto facultativo')
} else if (idade >= 16 && idade < 18){
    alert ('Voto facultativo')
} else if (idade < 16){
    alert ('Não pode votar')
};

if (idade >= 18) {
    alert ('Deve emitir o título de eleiro')
} else {
    alert ('não pode tirar o título')
} */

const media = 'pizza';

if (media >= 5 && media <=7) {
    alert ('você foi aprovado, mas por pouco')
} else if (media >7) {
   alert ('CDF') 
}else if (media >= 3){
    alert ('Vai passar o verão estudando na Rec.')
 } 
else if (media < 3) {
    alert ('Tomou bomba...')
} else {
    alert ('dado inválido')
}


