// Variáveis para selecionar 
// css
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

const modalContent = document.querySelector('.modal-mid');
const contents = document.querySelectorAll('.content');


// for para adicionar ao click a classe
// active e incluir id do src
for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`        
    })
};

// Ao click do botão "close-modal"
// remover a classe active e 
// remover src do iframe 
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active") 
    modalOverlay.querySelector("iframe").src =("")
});

for (let content of contents) {
    content.addEventListener("click", function() {
        modalContent.classList.add('active')
    })
}
