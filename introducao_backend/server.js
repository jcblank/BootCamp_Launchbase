const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")
const cursos = require("./data2")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/31256868?s=460&u=0e646356c7ff79142e5a27b8f55db927ad9d1925&v=4",
        name: "João Carlos Blankenheim Rodrigues",
        role: 'Estudante desenvolvimento web na <a href="https://app.rocketseat.com.br/dashboard" alt="rocketseat" target="blank">Rocketseat</a>',
        stack: "Stack: HTML,CSS,JS",
        links: [
            {name: "Github", url: "https://github.com/jcblank", img:"img/Octocat.png"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/jcarbr/", img:"img/linkedin.png"},
            {name: "Facebook", url: "https://www.facebook.com/jcarlos.blank", img:"img/face.png"},

        ]
    }

    return res.render("about", {about})
})
 
server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req,res) {
    const id = req.query.id
    
    const video = videos.find(function(video){
        if (video.id == id) {
            return true;
        }
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", {item: video})
})

server.get("/cursos", function(req, res) {
    const text = {
        texto: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀  Em um mundo onde a informação fica obsoleta cada vez mais rápido, velocidade de aprendizado é a chave para o sucesso. Por isso a Rocketseat oferece através de uma plataforma inteligente e metodologia prática, além de comunidade, eventos, conteúdo e conexão com o mercado de trabalho, todas as ferramentas que você precisa para masterizar no menor tempo possível as tecnologias mais modernas de desenvolvimento web e mobile, e dessa forma avançar para o próximo nível como programador.",
        logo: "img/rocketseat.png"
    };
    
    const tec =  {
        title: "Tecnologias",
        languages: [
            {lang: "CSS3"},
            {lang: "Html5"},
            {lang: "Javascript"},
            {lang: "Dotnet"},
            {lang: "NodeJS"},
            {lang: "Bootstrap"},
            {lang: "Java"},
            {lang: "C#"},
            {lang: "MySQL"},
        ]
}

    return res.render("cursos", {tec, text, contents: cursos})
})

server.get("/cursos:id", function(req, res) {
    const id = req.params.id
    
    return res.send(`O id fornecido na rota é: ${id}`);

    const curso = cursos.find(function(curso){
        if (curso.id == id) {
            return true;
        }
        
    })

    if (!curso) {
        return res.send("Video not found!")
    }
    
    return res.render("content/", {contents}); 
});

server.listen(5000, function() {
    console.log("Server is running")
})
