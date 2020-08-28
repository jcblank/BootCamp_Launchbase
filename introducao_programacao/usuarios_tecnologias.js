// Crie um programa que armazena um array de usuários (objetos), 
// cada usuário tem um nome e suas tecnologias (novo array)


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


// Função para varrer lista de usuários
// e efetuar a geração em tela de seus nomes,
// tecnologias que utilizam.  
function listarUsers (users) {
    for (let i = 0; i < users.length; i++) {
         console.log (`${users[i].nome} trabalha com ${users[i].tecnologias}`)    
    }   
}

// Chama a função para listar usuários
listarUsers(users);