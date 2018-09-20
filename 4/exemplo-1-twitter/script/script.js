const botao = document.querySelector(".tweet-composer__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const tweetInput = document.getElementById("tweetComposerInput");
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
    const data = date.getUTCDate();
    const month = date.toLocaleString("pt-br", {month: "short"});
    

    header.className = "tweets-timeline__header";
    header.innerHTML = `<span class="tweets-timeline__name">ana.js</span>
    <span class="tweets-timeline__username">@naluhh</span>
    <span class="tweets-timeline__date">${data} de ${month} </span>`
    
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

    
   
    
    // document.querySelector(".tweets-timeline__date").value = new Date().getTime();
    
   
    
   
    
    
    document.querySelector(".tweets-timeline").style.backgroundColor = '#fff';
    document.querySelector(".tweets-timeline").style.margin = '1.3px 0';
    document.querySelector(".tweets-timeline").style.borderRadius = '1px';
    document.querySelector(".tweets-timeline").style.padding = '10px 20px';
    
    tweetInput.value = "";
})