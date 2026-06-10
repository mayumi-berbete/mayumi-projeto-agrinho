// Gerencia a interação do site do projeto Agrinho
const botaoAgrinho = document.getElementById('botao-interativo');
const dicaBox = document.getElementById('mensagem-oculta');

botaoAgrinho.addEventListener('click', () => {
    // Alterna a exibição da dica de sustentabilidade
    dicaBox.classList.toggle('hidden');
    
    // Atualiza o texto do botão conforme a leitura
    if (dicaBox.classList.contains('hidden')) {
        botaoAgrinho.textContent = 'Ver Ideia Sustentável';
    } else {
        botaoAgrinho.textContent = 'Ocultar Dica';
    }
});

