// Variáveis para selecionar 
// css
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

// for para adicionar ao click a classe
// active 
for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add('active')
    })
}

// Ao click do botão "close-modal"
// remover a classe active
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active") 
})

