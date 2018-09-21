const botao = document.querySelector(".tweet-composer__button");
const tweetInput = document.getElementById("tweetComposerInput");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    
    const tweetTimeline = document.querySelector(".tweets-timeline");
    const tweet = document.createElement("p");
    tweet.className = "tweets-timeline__tweet";

    if(tweetInput.value === "" || tweetInput.value === " " || tweetInput.value === undefined || tweetInput.value === null) {
        return false;
    }
    // const tweetTexto = document.createTextNode(tweetInput.value);

    // tweet.appendChild(tweetTexto);
    tweet.innerHTML = tweetInput.value;
    
    const div = document.createElement("div");

    const header = document.createElement("div");
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.toLocaleString("pt-br", {month: "short"});
    

    header.className = "tweets-timeline__header";
    header.innerHTML = `<span class="tweets-timeline__name">Nicole Almeida</span>
    <span class="tweets-timeline__username">@almeida-nic</span>
    <span class="tweets-timeline__date">${day} de ${month}</span>`
    
    const footer = document.createElement("div")
    footer.className = "tweets-timeline__footer";
    footer.innerHTML = `<button class="tweets-timeline__delete-button button">Excluir</button>`
    div.appendChild(header);
    div.appendChild(tweet);
    div.appendChild(footer);
    div.className = "tweets-timeline__box";
    tweetTimeline.insertBefore(div, tweetTimeline.childNodes[0]);

    const botaoExcluir = document.querySelector(".tweets-timeline__delete-button");
    botaoExcluir.addEventListener("click", function(evento){
        evento.preventDefault();
        div.remove();


    })
        
    
    document.querySelector(".tweets-timeline").style.backgroundColor = '#fff';
    document.querySelector(".tweets-timeline").style.margin = '1.3px 0';
    document.querySelector(".tweets-timeline").style.borderRadius = '1px';
    document.querySelector(".tweets-timeline").style.padding = '10px 20px';
    
    tweetInput.value = "";
    document.getElementById("tweetComposerCounter").innerHTML = 280;
})
tweetInput.addEventListener("keyup", function(evento){
    const textBox = this;
    const maxLength = 280;
    const counter = document.getElementById("tweetComposerCounter");

    const valorAtual = maxLength - textBox.value.length;
    counter.innerHTML = valorAtual;

    if(textBox.value.length > maxLength) {
        textBox.value = textBox.value.substring(0, maxLength)

        counter.style.color = "red";
        
    }

    // if(valorAtual <= 15) {
    //     counter.style.color = "red";
        
    // }
    
    if(valorAtual < 0){
        botao.disabled = true;

    }else{
        counter.style.color = "white";
        botao.disabled = false;
    }

})