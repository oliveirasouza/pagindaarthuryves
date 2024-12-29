function enviarFormulario() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (name === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Por favor, insira um endereço de email válido.");
    return false;
  }

  if (mensagem.length <= 5) {
    alert("Por favor, insira uma mensagem com pelo menos 10 caracteres.");
    return false;
  }

  if (name.length <= 2) {
    alert("Por favor, insira um nome com pelo menos 3 caracteres.");
    return false;
  }

  return true;
}


document
  .getElementById("contatoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (!enviarFormulario()) {
      event.preventDefault();


    }

    if (enviarFormulario()) {
      alert("Mensagem enviada com sucesso!");
    }

  });


