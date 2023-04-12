// capturar click de cada botão e mostrar no console log o valor do botão sem alterar o html
const tela = document.querySelector(".tela");
const botoes = document.querySelectorAll("button");

botoes.forEach((botao) => {
  capturarClick(botao);
});

function capturarClick(Button) {
  Button.addEventListener("click", function () {
    ShowTela(Button);
  });
}

function ShowTela(Button) {
  if (Button.classList.contains("numero")) {
    tela.innerHTML += Button.innerText;
  } else {
    switch (Button.innerText) {
      case "=":
        calcular(tela.innerText);
        break;
      case "AC":
        tela.innerHTML = "";
        break;
      case "√":
        tela.innerHTML += ` ${Button.innerText} `;
        calcular(tela.innerText);
        break;
      case "X²":
        tela.innerHTML += ` ${Button.innerText} `;
        calcular(tela.innerText);
        break;
      default:
        tela.innerHTML += ` ${Button.innerText} `;
        CheckCalcular(tela.innerText, Button.innerText);
        break;
    }
  }
}

function CheckCalcular(checar, botao) {
  var word = checar.split(" ");
  console.log(word);
  if (word[2] && !word[3])  {
     let botoesOperador = document.querySelectorAll(".operador")
    botoesOperador.forEach((botao) => {
      if (botao.innerText == word[2]) {
        word[1] = word[2];
        tela.innerHTML = `${word[0]}  ${word[1]} `
      }
    });
  }else if(word[3]){
    calcular(tela.innerText)
  }
}

function calcular(calculo) {
  var word = calculo.split(" ");
  var num1 = Number(word[0]);
  var operador = word[1];
  var num2 = Number(word[2]);
  if (!num2) {
    num2 = num1;
  }

  switch (operador) {
    case "+":
      tela.innerHTML = num1 + num2;
      break;
    case "-":
      tela.innerHTML = num1 - num2;
      break;
    case "*":
      tela.innerHTML = num1 * num2;
      break;
    case "/":
      tela.innerHTML = num1 / num2;
      break;
    case "√":
      tela.innerHTML = Math.sqrt(num1);
      break;
    case "X²":
      tela.innerHTML = Math.pow(num1, 2);
      break;
  }
}
