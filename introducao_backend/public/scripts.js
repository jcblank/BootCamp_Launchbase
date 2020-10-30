// Variáveis para selecionar 
// css
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const contents = document.querySelectorAll('.content');

for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id");
        window.location.href = `/video?id=${videoId}`
    })
    
};

for (let content of contents) {
    content.addEventListener("click", function() {
        const cursoId = content.getAttribute("id");
        window.location.href = `/cursos/${cursoId}`
    })
    
};


