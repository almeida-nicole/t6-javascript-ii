const botao = document.querySelector(".feedback__button");
botao.addEventListener("click", function(evento) {
  evento.preventDefault();
  const depoimentos = document.querySelector(".testimonials");
  const inputMessage = document.getElementById("feedbackInputMessage");

  const feedback = document.createElement("p");
  const feedbackTexto = document.createTextNode(inputMessage.value); 
  feedback.appendChild(feedbackTexto);

  depoimentos.appendChild(feedback);


})