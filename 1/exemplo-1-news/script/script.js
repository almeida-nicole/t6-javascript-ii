/*const titulo = document.getElementById("formTitle");

const botao = document.querySelector(".news__button");

const texto2 = document.querySelector("#newsInputEmail");

console.log(titulo);
console.log(botao);
console.log(texto2);
alert(titulo)*/

const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");


botao.addEventListener("click", function(evento){
  evento.preventDefault();
  const email = input.value;  
  //alert(`O email ${email}  foi cadastrado com sucesso!`)

  const loginForm = document.querySelector(".news__form");
  loginForm.innerHTML = `O email ${email}  foi cadastrado com sucesso!`;

})