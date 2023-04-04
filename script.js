// capturar click de cada botão e mostrar no console log o valor do botão sem alterar o html
const tela = document.querySelector(".tela");
const botoes = document.querySelectorAll("button");

botoes.forEach((botao) => {
  capturarClick(botao);
});

function capturarClick(Button) {
  Button.addEventListener("click",function (){ ShowTela(Button)});
}

function ShowTela(Button) {
    console.log(typeof Button.innerText)
    if(Button.classList.contains("numero")){
        tela.innerHTML += Button.innerText;
    }
    else if(Button.classList.contains("operador")){
        if(Button.innerText == "="){
            console.log("=")
        }
        else if(Button.innerText == "AC"){
          tela.innerHTML = ""
        } 
        else{
            tela.innerHTML += Button.innerText;
        }
    }
   

  }