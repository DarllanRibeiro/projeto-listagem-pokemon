
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector ("body");
const trocaImagemBotao =document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    trocaImagemBotao.setAttribute("src","./src/imagens/moon.png")

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

body.classList.toggle("modo-escuro")

if(modoEscuroEstaAtivo){
    
    trocaImagemBotao.setAttribute("src","./src/imagens/sun.png")
   // body.classList.remove("modoescuro")
    
    } /*else{

body.classList.add("modo-escuro")
trocaImagemBotao.setAttribute("src","./src/imagens/moon.png")

    } */

  
  

})
