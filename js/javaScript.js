

function validacampo(){
  if("Todos os campos preenchidos") {
   alert("Prontinho! Você receberá os dados por email.")
  }else{
   alert("Por favor preencha os dados.") 
 }}
 
 var botaoenviar = document.getElementById("botaoenviar")
 
 botaoenviar.addEventListener("click", validacampo)
 
 var nome = document.getElementById("nome").value
 var email = document.getElementById("email").value
 var telefone = document.getElementById("telefone").value
