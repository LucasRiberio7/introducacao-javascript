//verificar se um espectador tem idade suficiente para assistir a um filme.//
// >= true/false//
 const tituloFilme = "O cachorro audição";
 const classificacaoMinima = 12;
 const idadeEspectador = 14;
 const podeAssitir = idadeEspectador >= classificacaoMinima;

 console.log(podeAssitir);
 document.getElementById("resultado").textContent = `${tituloFilme} (${classificacaoMinima} anos) -idade ${idadeEspectador}: podeAssitir? ${podeAssitir}`;