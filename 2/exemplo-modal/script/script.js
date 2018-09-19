const botao = document.querySelector(".login__button");
const botaoFechar = document.querySelector(".login-modal__button-close");

botao.addEventListener ("click", function(evento){
    evento.preventDefault();
    const loginModal = document.querySelector(".login-modal");
    loginModal.style.display = "flex";
    botao.style.display = 'none';
})

botaoFechar.addEventListener ("click", function(evento){
    evento.preventDefault();
    const loginModal = document.querySelector(".login-modal");
    loginModal.style.display = "none";
    botao.style.display = "block";
})
