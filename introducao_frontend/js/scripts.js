// Variáveis para selecionar 
// css
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modalContent = document.querySelector('.modal-mid');
const contents = document.querySelectorAll('.content');

// Função para remover a classe "active" do modal
function modal (close,remove) { 
    document.querySelector(close).addEventListener("click", function() {
        remove.classList.remove("active") 
    })
};

for (let content of contents) {
    content.addEventListener("click", function() {
        const blogID = content.getAttribute("id");
        modalContent.classList.add('active')
        modalContent.querySelector("iframe").src = `https://blog.rocketseat.com.br/${blogID}`
    })
    modal('.modal-close',modalContent);
};

// for para adicionar ao click a classe
// active e incluir id do src
for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`        
    })
    modal('.close-modal',modalOverlay);
};
 
