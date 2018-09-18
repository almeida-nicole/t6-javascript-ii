const botao = document.querySelector(".contato__button");
const inputMessage = document.getElementById("contatoInputMessage");
const inputPhone = document.getElementById("contatoInputPhone");
const inputEmail = document.getElementById("contatoInputEmail");
const inputNome = document.getElementById("contatoInputNome");

botao.addEventListener("click", function(evento) {
    evento.preventDefault();
    console.log(botao)
    // verificar se o campo está vazio
    // inputNome.value === undefined
    // inputNome.value === null
    // inputNome.value === ""
    // inputNome.value === " "

    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
        //foca o cursor no campo e fica com a borda azul
        inputNome.focus();
        return false;
    } else if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
        inputEmail.focus();
        return false;
    } else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " "){
        inputPhone.focus();
        return false;
    }
    else if (inputMessage.value === undefined || inputMessage.value === null || inputMessage.value === "" || inputMessage.value === " "){
        inputMessage.focus();
        return false;
    }    
        alert("Deu certo!")
})