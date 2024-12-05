function calcularMedia() {
  let nota = document.getElementById("nota").value;
  console.log("A nota digitada foi: " + nota);

  if (nota >= 7) {
    document.getElementById("resultado").innerHTML = "Aprovado";
    alert("Aprovado");
  } else {
    document.getElementById("resultado").innerHTML = "Reprovado  ";
    alert("Reprovado");
  }
}

function CalcularPreco() {
  let preco = document.getElementById("preco").value;
  console.log("O preço digitado foi: " + preco);
  let desconto = document.getElementById("desconto").value;
  console.log("O desconto digitado foi: " + desconto);
  let precoFinal = preco - preco * (desconto / 100);
  document.getElementById("resultadofinal").innerHTML =
    "O preço final foi: " + precoFinal;
  console.log(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);

  let resultadofinalInput = document.getElementById("resultadofinal");
  resultadofinalInput.value = precoFinal.toFixed(2);

  if (desconto >= 5) {
    document.getElementById("resultadofinal").innerHTML =
      "Desconto deve ser menor ou igual de 5%";
    alert("Desconto deve ser menor ou igual de 5%");
  } else {
    document.getElementById("resultadofinal").innerHTML = "Desconto aceito.";
    alert("Desconto aprovado de  : " + `${precoFinal.toFixed(2)}`);
  }
}

function trocarCor() {
  const corVermelha = document.getElementById("corVermelha");
  const corAzul = document.getElementById("corAzul");
  const corVerde = document.getElementById("corVerde");

  corVermelha.style.backgroundColor = "red";
  corAzul.style.backgroundColor = "blue";
  corVerde.style.backgroundColor = "green";
}

function retornarCor() {
  const corVermelha = document.getElementById("corVermelha");
  const corAzul = document.getElementById("corAzul");
  const corVerde = document.getElementById("corVerde");

  corVermelha.style.backgroundColor = "white";
  corAzul.style.backgroundColor = "white";
  corVerde.style.backgroundColor = "white";
}



function Calculadora() {

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operador = document.getElementById("Operadores").value;
  let resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break
    case "*":
      resultado = num1 * num2;
      break
    case "/":
      if (num2 === 0) {
        alert(" 0 não é um número divisivel");
      } else {
        resultado = num1 / num2;
      }
      break
    default:
      alert("Operador invático");

  }
  if (resultado === undefined) {
    document.getElementById("resultado").innerHTML = "Resultado: 0 não é um número divisível. Por favor, refaça a operação.";

  } else
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}
