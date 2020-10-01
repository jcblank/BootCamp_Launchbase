const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

// for para adicionar ao click a classe
// active e incluir id do src

function modal (close,remove) { 
    document.querySelector(close).addEventListener("click", function() {
        remove.classList.remove("active") 
    })
};


for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("h2");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("h2") = `${videoId}`.innerHTML;     
    })
    modal('.close-modal',modalOverlay);
};