// Seleciona o classificador de estrelas e o modal
const classificador = document.getElementById('classificador');
const modal = document.getElementById('modal');
const estrelasModal = document.querySelectorAll('.estrela-modal');
const fecharModal = document.getElementById('fechar-modal');

// Função para abrir o modal de votação quando uma estrela for clicada
classificador.addEventListener('click', (event) => {
    if (event.target.classList.contains('estrela')) {
        modal.style.display = 'flex'; // Abre o modal de votação
    }
});

// Função para resetar as estrelas no modal de votação
function resetarEstrelasModal() {
    estrelasModal.forEach(estrela => {
        estrela.style.color = '#ccc';
    });
}

// Função para mostrar as estrelas no modal de votação
estrelasModal.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {
        resetarEstrelasModal(); // Reseta as cores das estrelas
        for (let i = 0; i <= index; i++) {
            estrelasModal[i].style.color = 'gold'; // Marca as estrelas selecionadas
        }
    });
});

// Fecha o modal de votação
fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
