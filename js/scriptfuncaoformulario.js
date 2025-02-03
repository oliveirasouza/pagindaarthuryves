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
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;
      const storageOption = document.querySelector(
        'input[name="storage"]:checked'
      ).value;

      if (storageOption === "local") {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("mensagem", mensagem);
        alert(
          "Formulario enviado com sucesso e dados armazenados no Local Storage!"
        );
      } else if (storageOption === "session") {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("mensagem", mensagem);
        alert("Formulario enviado com sucesso e dados armazenados no Session Storage!");
       
      }
    }
  });



document
  .getElementById("showLocalStorage")
  .addEventListener("click", function () {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const mensagem = localStorage.getItem("mensagem");

    if (name || email || mensagem) {
      document.getElementById("localStorageData").innerHTML = `
     <h2>Local Session Storage:</h2>
      <p><strong>Nome: ${name}  </p></strong>
      <p><strong>Email: ${email}  </p></strong>
      <p><strong>Mensagem: ${mensagem}  </p></strong>
      <button id="clearLocalStorage">Limpar Local Storage</button>` 
    }

    document.getElementById("localStorageData").style.display = 'block';
      document.getElementById("clearLocalStorage")
        .addEventListener('click', function () {
          document.getElementById("contatoForm").reset();
          localStorage.clear();
          alert("Local Storage limpo com sucesso!");
          document.getElementById("localStorageData").style.display = 'none';
        });
  });

document
  .getElementById("showSessionStorage")
  .addEventListener(`click`, function () {
    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");
    const mensagem = sessionStorage.getItem("mensagem");

    if (name || email || mensagem) {
      document.getElementById("sessionStorageData").innerHTML = `
    <h2>Session Storage:</h2>
    <div class="sessionStorageData">Nome: ${name}</div>
    <div class="sessionStorageData">Email: ${email}</div>
    <div class="sessionStorageData">Mensagem: ${mensagem}</div>
    <button id="clearSessionStorage">Limpar Session Storage</button>     `

      document.getElementById("sessionStorageData").style.display = 'block';
      document.getElementById("clearSessionStorage").addEventListener('click', function () {
          document.getElementById("contatoForm").reset();
          sessionStorage.clear();
          alert("Dados do Session Storage limpo com sucesso!");
          document.getElementById("sessionStorageData").style.display = 'none';
        });


        document.getElementById("clearSessionStorage").addEventListener('click', function () {
          sessionStorage.clear();
          localStorage.clear();
      
          alert("Dados do Session Storage e Local Storage limpo com sucesso!");
          document.getElementById("sessionStorageData").style.display = 'none';
          document.getElementById("localStorageData").style.display = 'none';
        });
      
    }
  });

