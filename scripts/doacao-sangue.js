let listaDoadores = [];

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

  // Nome //
  if(nome.length === ""){
    return alert("Por favor, insira seu nome.");
  }

  let sobrenome = nome.trim().split(/\s+/);

  if(sobrenome.length < 2) {
      alert("Por favor, insira seu nome e sobrenome.");
      return;
  }

   // Email //
  if(email.length === ""){
    return alert ("Por favor, insira seu email.")
  }

  if (!email.includes("@")) return alert("Email inválido: O email deve conter @");

  // Idade //
  if(idade.length === ""){
    return alert("Por favor, insira sua idade.");
  }

  if(idade > 0 && idade < 16){
    alert("Você deve ter mais que 16 anos de idade para doar sangue!");
    return;
  }

  // Peso //
  if(peso.length === ""){
    return alert("Por favor, informe seu peso.");
  }

  if(peso < 50){
    return alert("Seu peso tem que ser no mínimo 50kg.");
  }
  
  //Tipo Sanguineo//
  if(tiposanguineo === ""){
    return alert("Por favor, selecione um tipo sanguíneo.");
  }

  //Telefone//
  if (!/^[0-9]+$/.test(telefone)) {
    alert("Seu telefone deve conter apenas numero.");
    return;
  }

  //Cidade//
  if(cidade.length === ""){
    alert("Por favor, insira uma cidade.");
    return;
  }

  //Estado//
  if(cidade.length === ""){
    alert("Por favor, insira um estado.");
  }
 
  // vetor com as informacoes dos doadores //

  let novoDoador = {
      nome: nome,
      email: email,
      idade: idade,
      peso: peso,
      sangue: tiposanguineo,
      telefone: telefone,
      cidade: cidade,
      estado: estado,
  };

  listaDoadores.push(novoDoador); // vai adicionar os doador ao vetor

  console.log(novoDoador);

  document.getElementById("resultado").innerHTML = "Seu cadastro foi realizado com sucesso na nossa ONG !<br>" + "Nome: " + nome;
  document.getElementById("doadores").innerHTML = "Atualmente temos: " + listaDoadores.length + " doadores.";
});