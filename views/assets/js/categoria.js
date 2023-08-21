const simRadio = document.getElementById('sim');
const naoRadio = document.getElementById('nao');
const categoriasHabilitacao = document.getElementById('categoriasHabilitacao');

simRadio.addEventListener('change', () => {
  categoriasHabilitacao.style.display = simRadio.checked ? 'block' : 'none';
});

naoRadio.addEventListener('change', () => {
   if (naoRadio.checked) {
    categoriasHabilitacao.style.display = 'none';
   }
});