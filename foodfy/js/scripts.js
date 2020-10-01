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
        const modalImg = card.querySelector("img").src;
        const modalH2 = card.querySelector("h2");
        const modalP = card.querySelector("p");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `${modalImg}`;
        modalOverlay.querySelector("h2").innerHTML = modalH2.innerHTML;
        modalOverlay.querySelector("p").innerHTML = modalP.innerHTML;
    })
    modal('.close-modal',modalOverlay);
};