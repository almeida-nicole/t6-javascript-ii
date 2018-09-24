const botao = document.querySelector(".feedback__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const inputNome = document.getElementById("feedbackInputName");
    const inputDinheiro = document.getElementById("feedbackInputMoney");
    const inputComentario = document.getElementById("feedbackInputDate");
    const tabela = document.querySelector(".respostas__table");
    const linha = document.createElement("tr");

  const colunaNome = document.createElement("td"); 
  const colunaNomeTexto = document.createTextNode(inputNome.value); 
  colunaNome.appendChild(colunaNomeTexto);

  const colunaValor = document.createElement("td");
  const colunaValorPreco = document.createTextNode(inputDinheiro.value);
  colunaValor.appendChild(colunaValorPreco);

  const colunaComentarios = document.createElement("td");
  const colunaComentariosTexto = document.createTextNode(inputComentario.value);
  colunaComentarios.appendChild(colunaComentariosTexto);

  linha.appendChild(colunaNome);
  linha.appendChild(colunaValor);
  linha.appendChild(colunaComentarios);

  tabela.appendChild(linha);






})