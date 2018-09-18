const botao = document.querySelector(".cadastro__button");
const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const InputNews = document.getElementById("cadastroInputNews");
const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementsByName("level");

botao.addEventListener ("click",  function(evento){
    evento.preventDefault();

    const optionSelect = inputArea.options
    [inputArea.selectedIndex]

    let radioItem;

    for(let i = 0; i < inputLevel.lenght; i ++) {

    }

    // console.log(InputNews)
    // console.log(InputNews.checked)
    
    

    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
        inputNome.focus();
        return false;
    } else if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
        inputEmail.focus();
        return false;
    } else if (inputEmailConfirm.value === undefined || inputEmailConfirm.value === null || inputEmailConfirm.value === "" || inputEmailConfirm.value === " "){
        inputEmailConfirm.focus();
        return false;
    } else if (inputPassword.value === undefined || inputPassword.value === null || inputPassword.value === "" || inputPassword.value === " "){
        inputPassword.focus();
        return false;
    } else if (inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null || inputPasswordConfirm.value === "" || inputPasswordConfirm.value === " "){
        console.log("ta cagado")
        inputPasswordConfirm.focus();
        return false;
    } else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " "){
        inputPhone.focus();
        return false;
        // verificar se os emails são diferentes !==
    } else if (inputEmail.value !== inputEmailConfirm.value){
        inputEmail.focus();
        return false;
    } else if (inputPassword.value !== inputPasswordConfirm.value) {
        alert("Burro! você errou a senha")
        return false;
    }
    else if (inputPassword.value.length < 7) {
        alert("A senha deve ter mais que 7 digitos")
        return false;
    }
    // } else if (inputPassword.value.length < 7) {
    //     alert("Tem que ter 7 ou mais dígitos");
    // }
    //  alert("funcionou");
})