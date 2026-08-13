//operadores Aritméticos

const nomeSalgado = "enroladinho de salsicha";
const precoUnitario =2.50;
const quantidade =4;
const total = precoUnitario * quantidade;


console.log(`Total: R$ ${total}`);

document.getElementById("resultado").textContent =`${quantidade} x ${nomeSalgado} = R$ ${total.toFixed(2)}`;