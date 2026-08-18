//definir se um time está classificado//
const pontos = 40;
const saldoDeGols =5;
const venceuUltimoJogo =true;
const classificado = pontos >= 35 && (saldoDeGols >0 || venceuUltimoJogo);

console.log(classificado);
document.getElementById("resultado").textContent = `time classificado para a proxima fase? ${classificado}`;