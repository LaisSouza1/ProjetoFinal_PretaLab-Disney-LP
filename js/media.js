/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  const mediaGeral = (nota1 + nota2 + nota3 + nota4) / 4;

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 >10){
  alert ("Nota inválida! Digite um número entre 0 e 10")
  }
  let mensagem = "";
  // evite mexer no código acima!

 if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 >10){
  mensagem = "Por favor, digite uma nota entre 0 e 10"
 } else if(mediaGeral === 0){
    mensagem = "Infelizmente você zerou a prova :( "
  } else if (mediaGeral >= 0.1 && mediaGeral <= 3){
    mensagem = "Caramba, deu ruim, você obteve " + mediaGeral +  " de média! Estude mais e tente novamente!" 
  } else if (mediaGeral >= 3.1 && mediaGeral <= 5.9){
    mensagem = "Você obteve " + mediaGeral + "! Falta pouco para a média"
  } else if (mediaGeral >= 6 && mediaGeral <= 7){
    mensagem = "Você está na média com " + mediaGeral
  } else if (mediaGeral >= 7.1 && mediaGeral <= 9.9){
    mensagem = "Notão! Sua média é " + mediaGeral
  } else if (mediaGeral === 10){
    mensagem = "Hoje é seu aniversário? Pq você ta de parabêns! " + mediaGeral + " de média"
  }




  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = mensagem;
}
