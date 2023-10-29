document.addEventListener('DOMContentLoaded', function () {
  const balanceAmount = document.getElementById('balance-amount');
  const visibilityIcon = document.getElementById('visibility-icon');
  let isHidden = true;

  visibilityIcon.addEventListener('click', function () {
      isHidden = !isHidden;
      balanceAmount.textContent = isHidden ? 'R$ 874,22' : '*****';
  });
});

// ##################

document.addEventListener('DOMContentLoaded', function () {
  const pixOptions = document.getElementById('pix-options');
  const favoritesButton = document.getElementById('favorites-button');
  
  // Armazene os PIX favoritos em um array
  const favoritePix = ["Bomba DI", "Shawarma", "Distribuidora", "Bomba QNF"];

  // Função para atualizar a lista de PIX na seção
  function updatePixList(pixList) {
      // Limpe o conteúdo atual da lista de opções
      pixOptions.innerHTML = "";

      // Adicione as opções favoritas como botões
      pixList.forEach(function (pix) {
          const button = document.createElement("button");
          button.textContent = pix;
          button.addEventListener('click', function() {
              alert(`PIX selecionado: ${pix}`);
          });
          pixOptions.appendChild(button);
      });
  }

  // Quando o botão "Favoritos" for clicado, atualize a lista de PIX
  favoritesButton.addEventListener('click', function () {
      updatePixList(favoritePix);
  });
});


// #############################

document.addEventListener('DOMContentLoaded', function () {
  const pixKeyInput = document.getElementById('pix-key');
  const continueButton = document.getElementById('continue-button');
  const pixForm = document.getElementById('pix-form');
  const pixKeyForm = document.getElementById('pix-key-form');
  const nomeForm = document.getElementById('nome-form');
  const instituicaoForm = document.getElementById('instituicao-form');
  const formContainer = document.getElementById('form-container');
  const confirmButton = document.getElementById('confirm-info');
  const checkButton = document.getElementById('check-button');
  const valorForm = document.getElementById('valor-form');

  // Mock de dados
  const mockData = [
      {
          chave: "61998143659",
          nome: "Domenico C6",
          instituicao: "C6 Bank",
      },
      {
          chave: "09844147115",
          nome: "José Alexandre",
          instituicao: "Caixa Econômica",
      },
  ];

  continueButton.addEventListener('click', function () {
      const enteredPixKey = pixKeyInput.value;
      const matchingData = mockData.find((data) => data.chave === enteredPixKey);

      // Preencha a chave PIX com o que foi digitado
      pixKeyForm.value = enteredPixKey;

      if (matchingData) {
          // Se a chave PIX corresponder a um registro no mock, preencha as informações
          nomeForm.value = matchingData.nome;
          instituicaoForm.value = matchingData.instituicao;
      } else {
          // Se a chave não for encontrada, deixe os campos de nome e instituição em branco
          nomeForm.value = '';
          instituicaoForm.value = '';
      }

      // Exiba o formulário
      formContainer.style.display = 'flex';
  });

  confirmButton.addEventListener('click', function () {
    // Limpa o conteúdo do body
    document.body.className = 'body-password'
    document.body.innerHTML = `
    <header>
      <img src="src/images/home/icon-caixa.png" alt="Caixa Icon">
    </header>
    <section id="section-pass">
      <div id="pass-container"></div>
    </section>
    <footer class="footer">
      <nav>
        <ul>
            <li><a href="#inicio">
              Início
              <img src="src/images/icons/home-icon.png" alt="home">
            </a></li>
            <li><a href="#conta">
              Conta
              <img src="src/images/icons/profile-icon.png" alt="profile">
            </a></li>
            <li class="selected"><a href="#area-pix">
              PIX
              <img src="src/images/icons/pix-icon.png" alt="pix">
            </a></li>
            <li><a href="#menu">
              Menu
              <img src="src/images/icons/menu-icon.png" alt="menu">
            </a></li>
        </ul>
      </nav>
    </footer>
    `
    

    // Cria elementos para a entrada de senha
    const passwordInputs = [];
    for (let i = 0; i < 4; i++) {
        // const passwordInput = document.getElementById('pass-input');
        const getContainer = document.getElementById('pass-container');
        const passwordInput = document.createElement('input');
        passwordInput.className = 'pass-input'
        passwordInput.type = 'number';
        passwordInput.maxLength = 1;
        passwordInput.addEventListener('input', function (event) {
            if (event.target.value.length === 1) {
                const nextIndex = passwordInputs.indexOf(event.target) + 1;
                if (nextIndex < passwordInputs.length) {
                    passwordInputs[nextIndex].focus();
                }
            }
        });
        passwordInputs.push(passwordInput);
        getContainer.appendChild(passwordInput);
        document.body.style.backgroundColor = '#0066b9';
    }

    // Adiciona um botão para verificar a senha
    const checkPasswordButton = document.createElement('button');
    const getSection = document.getElementById('section-pass');
    checkPasswordButton.id = 'check-button'
    checkPasswordButton.textContent = 'Confirmar';
    getSection.appendChild(checkPasswordButton);

    function maskDigit(index) {
      setTimeout(function () {
          passwordInputs[index].type = 'password';
      }, 500); // Atraso de 1 segundo (1000ms)
    }

    function generateRandomCode() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const codeLength = 25;
      let code = '';
  
      for (let i = 0; i < codeLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          code += characters.charAt(randomIndex);
      }
  
      return code;
    }

    function generateRandomNumbers() {
      const numbersLength = 12;
      let numbers = '';
  
      for (let i = 0; i < numbersLength; i++) {
          const randomNumber = Math.floor(Math.random() * 10); // Gera um número aleatório de 0 a 9
          numbers += randomNumber;
      }
  
      return numbers;
    }

    function mostrarComprovante() {
      document.body.innerHTML = "<div class='wait'>Aguarde</div>"
      setTimeout(function () {
          // Obtém a data e hora atuais
          const dataAtual = new Date().toLocaleString('pt-BR');

          document.body.innerHTML = `
          <header>
            <img src="src/images/home/icon-caixa.png" alt="Caixa Icon">
          </header>
          <main>
            <div class="about-account">
                <div class="profile">
                    <div class="control2">
                      <img src="src/images/icons/profile-icon.png" alt="Perfil">
                      <span class="username">Anderson Domênico</span>
                    </div>
                </div>
            </div>
          </main>
          <section class='info-payment'>
            <div class='date-value'>
              <div class='value-pay'>
                <p>Valor</p>
                <span>R$ ${valorForm.value}</span>
              </div>
              <div class='date'>
                <p>Data</p>
                <span>${dataAtual}</span>
              </div>
            </div>

            <div class='recebedor'>
              <p>Nome</p>
              <span>${nomeForm.value}</span>
              <p>Chave PIX</p>
              <span>${pixKeyForm.value}</span>
              <p>Instituição</p>
              <span>${instituicaoForm.value}</span>
            </div>

            <div class='pagador'>
              <h3>Dados do Pagador</h3>
              <p>Nome</p>
              <span>Anderson Joel Cunha da Silva</span>
              <p>CPF</p>
              <span>***.828.181-**</span>
              <p>Instituição</p>
              <span>CAIXA ECONÔMICA FEDERAL</span>
            </div>

            
            <div class='pagador'>
              <h3>Dados da Transação</h3>
              <p>Situação</p>
              <span>EFETIVADA</span>
              <p>Valor</p>
              <span>${valorForm.value}</span>
              <p>Data / Hora</p>
              <span>${dataAtual}</span>
              <p>ID</p>
              <span>${generateRandomCode()}</span>
              <p>Código</p>
              <span>${generateRandomNumbers()}</span>
            </div>

            <button>Voltar</button>
          </section>
          `
      }, 3000); // 3000 milissegundos = 3 segundos
  }

    checkPasswordButton.addEventListener('click', function () {
        const enteredPassword = passwordInputs.map(input => input.value).join('');
        
        if (enteredPassword === '9328') {
            // Senha correta
            mostrarComprovante();
        } else {
            // Senha incorreta
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Senha incorreta';
            document.body.appendChild(errorMessage);
        }
    });

    passwordInputs.forEach((input, index) => {
      input.addEventListener('input', function () {
          maskDigit(index);
      });
    });

  });

  continueButton.addEventListener('click', function () {
    const enteredPixKey = pixKeyInput.value;
    const matchingData = mockData.find((data) => data.chave === enteredPixKey);

    pixKeyForm.value = enteredPixKey;

    if (matchingData) {
        nomeForm.value = matchingData.nome;
        instituicaoForm.value = matchingData.instituicao;
    }

    formContainer.style.display = 'block';
  });
  
  valorForm.addEventListener('input', function () {
    const value = String(valorForm.value).replace(/\D/g, '');
    console.log(value);
    if (!value || isNaN(value)) {
      return '0,00'; // Valor inválido
    }

    const parts = value.match(/^(\d+)(\d{2})$/);
    if (!parts) return '0,00'; // Valor inválido

    const integerPart = parts[1];
    const decimalPart = parts[2];
    const formattedValue = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + decimalPart;

    valorForm.value = formattedValue;
  });

});