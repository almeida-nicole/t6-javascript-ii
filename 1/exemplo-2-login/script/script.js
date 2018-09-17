const input = document.getElementById("loginInputEmail");
const password = document.getElementById("loginInputPassword");
const botao = document.querySelector(".login__button");
botao.addEventListener("click", function(evento) {
evento.preventDefault();

const email = input.value;

const loginForm = document.querySelector(".login__form");
loginForm.innerHTML = `Login efetuado com sucesso com o email ${email}!`;
//alert (`Login efetuado com sucesso com o email ${email}!`);

})
