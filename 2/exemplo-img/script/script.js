//.children - traz a lista com todas as tags
// descobrir como pegar uma info how get element javascript
const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");

for(let i = 0; i < links.children.length; i++) {
    const fio = links.children[i];
    fio.addEventListener("click", function() {
        const img = this.dataset.imagem;
        //troca o valor por outro que está armazenado no img de acordo com o click.
        imagem.src = img;


    })

}

