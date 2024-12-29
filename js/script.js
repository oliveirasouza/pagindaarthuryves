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



const turma1 = ["Joaquim", "Joaquina", "Joaquim", "Vera"];
const turma2 = ["Oliveira", "Fábio", "Maria"];


console.log("Alunos da turma 1: " + turma1[3]);
console.log("Alunos da turma 2: " + turma2[2]);


const numerosSorteados = [1, 5, 8, 10, 6, 12, 45];
console.log(numerosSorteados);



const listaDeCompras = ["Arroz", "Feijao", "Leite", "Macarrao", "Carne"];

console.log("Quantidade de itens na lista de compras:" + listaDeCompras.length);

//Adiciona um item na lista

listaDeCompras.push("Ovo");

console.log("Lista de Compras:" + listaDeCompras);

console.log("Quantidade de itens na lista de compras:" + listaDeCompras.length);

//Pop remove o ultimo item da lista
listaDeCompras.pop("Ovo");

console.log("Lista de Compras:" + listaDeCompras);

//Adiciona um item na lista
listaDeCompras.push("Ovo");
listaDeCompras.splice(2, 2);
console.log("Lista de Compras:" + listaDeCompras);

listaDeCompras.push("Batata");
listaDeCompras.splice(0, 4);
console.log("Lista de Compras:" + listaDeCompras);


console.log("Lista de Compras:" + listaDeCompras.length + " itens na lista de compras:" + listaDeCompras);




// Estudo Laços de Repetiçao

var dados = "";
var i = 0;

const carros = ["Uno", "Gol", "Palio", "Megane"];
const conteudo = document.getElementById("conteudo");

function criaSessao(titulo, dadosF) {

  let secao = document.createElement("div");
  secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
  conteudo.appendChild(secao);

}

dados = "";
i = 0;
while (i < 4) {
  dados += "<p color = red>" + carros[i] + "</p>";
  i++;
}
criaSessao("Loop While", dados);

dados = "";
i = 0;
// While Loop Melhorado.
while (i < carros.length) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}
criaSessao("Loop While Melhorado ", dados);


//Do While
dados = "";
i = 0;
do {
  dados += "<p>" + carros[i] + "</p>";
  i++;
} while (i < carros.length);
criaSessao("Loop While Invertido", dados);


//Laços de Repetição FOR OF 
dados = "";
for (i = 0; i < carros.length; i++) {
  dados += "<p>" + carros[i] + "</p>";
}
criaSessao("Laços de Repetição FOR", dados);

//For OF
dados = "";
for(let carro of carros){
  if  (carro === "Palio"){
    continue;
    
  }
  dados += "<p>"+carro +"</p>";
}
criaSessao("Laços de Repetição FOR OF", dados);


//Laços de Repetição FOR IN"

let carro1 = {marca : "Reanaul" , modelo : "megane", ano : "2018"}
let carro2 = {marca : "Fiat" , modelo : "Uno", ano : "1995"}


let carros2=[];
carros2.push(carro1);
carros2.push(carro2);

dados = "";
for (let carro of carros2)
{

let propriedades = "";

  for (let prop in carro)
  {
    propriedades +=carro[prop]  + " | ";
  }
  dados += "<p>" + propriedades + "<p/>";

}
criaSessao("Laços de Repetição FOR IN", dados);


//For FOREACH

dados = "";
carros.forEach((carro) =>{
  dados += "<p>" + carro + "<p/>";
  
})
criaSessao("Laços de Repetição FOREACH", dados);


//Parei no 60 minutos