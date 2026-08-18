
//primeiro cod javaScript
/*posso escrever com varias linhas*/
//variavel e tipos de dados
//cada variavel guarda um valor de um tipo diferente 

const nomeDoce = "Mousse de limão";
const preco = 5.7;
const disponivel = true;

console.log (nomeDoce, preco, disponivel);

document.getElementById("resultado").textContent=`${nomeDoce} custa R$ ${preco.toFixed(2)}- disponível:${disponivel}`;

