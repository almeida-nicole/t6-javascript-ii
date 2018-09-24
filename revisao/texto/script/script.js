const botaoAumentar = document.querySelector(".botaoAumentar");
const botaoDiminuir = document.querySelector(".botaoDiminuir");
const artigo = document.querySelector(".article__text")
//definir um tamanho para fonte
let fonte = 16;


botaoAumentar.addEventListener("click", function(evento){
    evento.preventDefault();
    // chama o valor que foi reservado na constante e add 5
    fonte+= 5
    //troca o valor setado no fontSize
    artigo.style.fontSize = `${fonte}px`
    
      
})


botaoDiminuir.addEventListener("click", function(evento){
    evento.preventDefault();
    fonte-= 5
    
    artigo.style.fontSize = `${fonte}px`

})