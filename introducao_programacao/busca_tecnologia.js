// Crie uma função que recebe os dados de um objeto de usuário 
// e retorna SE o usuário trabalha com CSS ou não. 
// Essa função deve retornar um boolean true/false.

// Objeto com usuários
const users = [
    {
        nome: "Carlos",
        tecnologias: ["HTML","CSS"]
    },
    {
        nome: "Elliot",
        tecnologias: ["Linux","Phyton"]
    },
    {
        nome: "Maria",
        tecnologias: ["JS","Node"]
    }
];

// Função para validar se o usuário trabalha com CSS
function checkCss(users) {
    for(let tecnologia of users.tecnologias) {
        if(tecnologia == 'CSS') 
        return true
    }
}

// For para percorrer a lista de usuários, testar
// e imprimir em tela se ele trabalha ou não com CSS
for (let i = 0; i < users.length; i++) {
    const userHaveCss = checkCss(users[i]);
    
    if(userHaveCss) {
        console.log(`${users[i].nome}, trabalha com CSS!`)
    } else {
        console.log(`${users[i].nome},não trabalham com CSS, mas trabalham com ${users[i].tecnologias}!`)
    }
} 
 


