//.children - traz a lista com todas as tags
//descobrir como pegar uma info how get element javascript
const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");
const title = document.querySelector(".gallery__caption");

for(let i = 0; i < links.children.length; i++) {
    const link = links.children[i];
    link.addEventListener("click", function() {
        const img = this.dataset.image; 
        //.image é o nome do data que foi definido no html
        //troca o valor por outro que está armazenado no img de acordo com o click.
        imagem.src = img;
        const subtitle = this.dataset.title;
        title.textContent = subtitle;

    })

}

