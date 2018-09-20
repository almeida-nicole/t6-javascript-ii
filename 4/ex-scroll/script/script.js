const botao = document.getElementById("arrowTop");

botao.addEventListener("click", function(){
console.log("clicou")
window.scrollTo(pageYOffset, 0);
})


window.addEventListener("scroll", function() {
    console.log("rolou!")
    console.log(pageYOffset)
    if(pageYOffset > 450){
        botao.hidden = false;
        return false;
    }
        botao.hidden = true;

})