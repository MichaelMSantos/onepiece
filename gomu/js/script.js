const botoes = document.querySelectorAll(".botao");
const gomu = document.querySelectorAll(".forma");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarForma();

        botao.classList.add("selecionado");
        gomu[indice].classList.add("selecionado");
    });
});

function desselecionarForma()  {
    const formaSelecionada = document.querySelector(".forma.selecionado");
    formaSelecionada.classList.remove("selecionado");
}

function desselecionarBotao () {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
