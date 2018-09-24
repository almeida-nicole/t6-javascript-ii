
const botao = document.querySelector("button");
const atributos = document.getElementById("externo");
const artigo = document.querySelector(".article");

    botao.addEventListener("click", function(evento){
        evento.preventDefault();

        for (let i = 0; i < atributos.attributes.length; i++){
            let prop = document.createElement("p")
            prop.innerHTML = (`${atributos.attributes[i].name} : ${atributos.attributes[i].value}`)
            artigo.appendChild(prop)
        }
     




    })