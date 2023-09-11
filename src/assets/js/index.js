const botaoAlterarTema = document.getElementById("botao-alterar-tema"); // Pegar com JS o elemento HTML referente ao botão utilizando o Id
const body = document.querySelector("body"); // Pegar com JS o elemento HTML da tag body;
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao"); // Pegar com JS o elemento da tag img
const botaoLogoIndex = document.getElementById(".logo");

botaoAlterarTema.addEventListener("click", () => {

    let modoEscuroAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        //body.classList.remove("modo-escuro");
        imagemBotaoTrocaTema.setAttribute("src", "./src/assets/img/sun.png");
    } else {
        //body.classList.add("modo-escuro"); // Adiciona a class modo-escuro a tag body
        imagemBotaoTrocaTema.setAttribute("src", "./src/assets/img/moon.png");
    }
});