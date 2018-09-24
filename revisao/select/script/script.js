const botao = document.querySelector(".select__button")
botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const inputArea = document.getElementById("selectInputArea");
    const optionSelect = inputArea.options [inputArea.selectedIndex];

    if(inputArea.selectedIndex === 0) {
        optionSelect.remove();
    } else if(inputArea.selectedIndex === 1) {
        optionSelect.remove();
    } else if(inputArea.selectedIndex === 2) {
        optionSelect.remove();
    } else if(inputArea.selectedIndex === 3) {
        optionSelect.remove();
    }
})