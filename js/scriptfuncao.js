function msgsaudacao() {
  let nome = document.getElementById("nome").value;
  let hora = parseInt(document.getElementById('hora').value, 10);
  let msgsaudacao = document.getElementById("msgsaudacao");
  msgsaudacao.innerHTML = saudacaoPersonalizada2(nome, hora);

}


function saudacaoPersonalizada() {
  const nome2 = document.getElementById("nome2").value;
  const saudacaoPersonalizada = "Olá, " + nome2 + "!";
  //saudacaoPersonalizada.textContent = `Olá, ${nome2}!`;  
  document.getElementById("saudacaoPersonalizada").textContent = saudacaoPersonalizada;


}


function saudacaoPersonalizada2(nome, hora) {
  if (hora < 12) {
    return "Bom dia, " + nome + "!";
  }
  else if (hora > 12 && hora < 18) {
    return "Boa tarde, " + nome + "!";
  }

  else if (hora > 18) {
    return "Boa noite, " + nome + "!";
  }
  else {
    return " Olá, " + nome + "!";
  }
}


function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById("botaoVermelho").addEventListener("click", function () {
  setBackgroundColor("red");
});

document.getElementById("botaoAzul").addEventListener("click", function () {
  setBackgroundColor("blue");
});

document.getElementById("botaoVerde").addEventListener("click", function () {
  setBackgroundColor("green");
});

document.getElementById("inputBox").addEventListener('keypress', function (event) {
  alert("A tecla pressionada foi: " + event.key);
});



const mousedown = document.getElementById('mousedown');


mousedown.addEventListener("mousedown", function () {
  alert("Pressione e segure o mouse sobre o elemento abaixo");
  mousedown.style.backgroundColor = "red";
});

const mousedown2 = document.getElementById('mousedown2');
mousedown2.addEventListener("mousedown", function () {
  alert("Pressione e segure o mouse sobre o elemento abaixo");
  mousedown2.style.backgroundColor = "blue";
});


const celulas = document.querySelectorAll('.celula');
let vezDoX = true;
let vencedor = false;
document.getElementById('botaoReiniciar').addEventListener('click', iniciarJogo);

function iniciarJogo() {
  celulas.forEach(celula => {
    celula.textContent = "";
    celula.addEventListener('click', tratarClick, { once: true });
  });
  vencedor = false;
}

function tratarClick(evento) {
  evento.target.textContent = vezDoX ? 'X' : 'O';
  vezDoX = !vezDoX;
  console.log("Vez do X: " + vezDoX);
  verificarVencedor();
}

function verificarVencedor() {
  const celulasArray = Array.from(celulas);
  const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combinacao of combinacoesVencedoras) {
    const celula1 = celulasArray[combinacao[0]];
    const celula2 = celulasArray[combinacao[1]];
    const celula3 = celulasArray[combinacao[2]];
    if (celula1.textContent === celula2.textContent && celula2.textContent === celula3.textContent && celula1.textContent !== "") {
      vencedor = celula1.textContent;

      const alerta  = document.createElement('div');
      alerta .classList.add('alerta-vencedor');
      alerta .innerHTML  = `<span>A jogadora  Tatiana ${vencedor} venceu! </span>`;
      document.body.appendChild(alerta );
      setTimeout(() => {
        alerta .remove();
      },4000);

      return;
    }
  }
}

iniciarJogo();