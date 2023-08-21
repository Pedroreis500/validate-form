
function preencherEnderecoFromCEP() {
    const cepInput = document.getElementById('cep');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');
    const enderecoInput = document.getElementById('endereco');

    const cepValue = cepInput.value.replace(/\D/g, '');
    if (cepValue.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            cidadeInput.value = data.localidade;
            estadoInput.value = data.uf;
            enderecoInput.value = data.logradouro;
          } else {
            alert('CEP não encontrado. Verifique o número digitado.');
          }
        })
        .catch(error => {
          console.error('Erro ao buscar CEP:', error);
        });
    }
  }

  const cepInput = document.getElementById('cep');
  cepInput.addEventListener('blur', preencherEnderecoFromCEP);
