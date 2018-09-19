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

botao.addEventListener ("click", function(evento){
    evento.preventDefault();
    let radioItem;
    for(let i = 0; i < inputLevel.length; i++) {
        if(inputLevel[i].value === "Junior" && inputLevel[i].checked) {
            alert("junior: 0 - 2 anos de experiência")
        }else if(inputLevel[i].value === "Pleno" && inputLevel[i].checked) {
            alert("pleno: 2 - 5 anos de experiência;")
        }else if(inputLevel[i].value === "Senior" && inputLevel[i].checked) {
            alert("senior 5+ anos de experiência;")
        }
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
    } else if (inputPassword.value.length < 7) {
        alert("A senha deve ter mais que 7 digitos")
        return false;
    } else if (InputNews.checked === false) {
        alert("É uma pena que você não deseja receber nosso conteúdo exclusivo :c");
    }
    // } else if (inputPassword.value.length < 7) {
    //     alert("Tem que ter 7 ou mais dígitos");
    // }
    //  alert("funcionou");
})


inputArea.addEventListener("change", function(evento){
    const optionSelect = inputArea.options [inputArea.selectedIndex].value;

    if(optionSelect === "Front-End") {
        inputArea.style.backgroundColor = "blue";
    } else if(optionSelect === "Back-End") {
        inputArea.style.backgroundColor = "green";
    } else if(optionSelect === "UX Designer") {
        inputArea.style.backgroundColor = "pink";
    } else if(optionSelect === "UI Designer") {
        inputArea.style.backgroundColor = "orange";
    }
})


