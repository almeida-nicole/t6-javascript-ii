const botao = document.querySelector(".transacao__button");
const inputName = document.getElementById("transacaoInputName");
const inputMoney = document.getElementById("transacaoInputMoney");
const inputDate = document.getElementById("transacaoInputDate");
botao.addEventListener("click", function(evento){
  evento.preventDefault();
  const tabela = document.querySelector(".extrato__table");
  // console.log(tabela);

  // criar linha
  const linha = document.createElement("tr");

  //criar colunas
  const colunaNome = document.createElement("td"); 
  const colunaNomeTexto = document.createTextNode(inputName.value); 
  colunaNome.appendChild(colunaNomeTexto);

  const colunaValor = document.createElement("td");
  const colunaValorPreco = document.createTextNode(inputMoney.value);
  colunaValor.appendChild(colunaValorPreco);

  const colunaData = document.createElement("td");
  const colunaDataTexto = document.createTextNode(inputDate.value);
  colunaData.appendChild(colunaDataTexto);

  //inserir colunas na linha
  linha.appendChild(colunaNome);
  linha.appendChild(colunaValor);
  linha.appendChild(colunaData);


// adiciona linha a tabela
  tabela.appendChild(linha);

})