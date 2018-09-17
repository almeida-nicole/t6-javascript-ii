const input = document.getElementById("loginInputEmail");
const botao = document.querySelector(".login__button");
const password = document.getElementById("loginInputPassword");


botao.addEventListener("click", function(evento){
  evento.preventDefault();

  //create element cria novos elementos
  const resposta = document.createElement("span");

  //create text node cria nós de texto
  const respostaMensagem = document.createTextNode("Login efetuado com sucesso!");

  //append child insere item dentro de um elemento
  resposta.appendChild(respostaMensagem);

  const loginForm = document.querySelector(".login__form");

  //insert before insere item em um elemento antes de um item estabelecido
  loginForm.insertBefore(resposta, loginForm.childNodes[0]);
})