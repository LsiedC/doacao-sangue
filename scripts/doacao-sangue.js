document.getElementById("doacao-sangue").addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let idade = document.getElementById("idade").value;
  let peso = document.getElementById("peso").value;
  let tiposanguineo = document.getElementById("tiposanguineo").value;
  let telefone = document.getElementById("telefone").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;
  
  //Regras de validação

  // Nome 
  let sobrenome = nome.trim().split(/\s+/);

  if(sobrenome.length < 2) {
      alert("Por favor insira seu nome e sobrenome.");
      return;
  }

   //Email
  if (!email.includes("@")) return alert("Email inválido: O email deve conter @");

  //Idade
  if(idade > 0 && idade < 16){
    alert("Você deve ter mais que 16 anos de idade para doar sangue!");
    return;
  }


  document.getElementById("resultado").innerHTML = "Seu cadastro foi realizado com sucesso na nossa ONG !<br>" + "Nome: " + nome;

});