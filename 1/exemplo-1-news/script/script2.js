const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");


botao.addEventListener("click", function(evento){
  evento.preventDefault();

  //create element cria novos elementos
  const resposta = document.createElement("span");

  //create text node cria nós de texto
  const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

  //append child insere item dentro de um elemento
  resposta.appendChild(respostaMensagem);

  const newsForm = document.querySelector(".news__form");

  //insert before insere item em um elemento antes de um item estabelecido
  newsForm.insertBefore(resposta, newsForm.childNodes[0]);
})