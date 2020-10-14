const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/31256868?s=460&u=0e646356c7ff79142e5a27b8f55db927ad9d1925&v=4",
        name: "João Carlos Blankenheim Rodrigues",
        role: 'Estudante desenvolvimento web na <a href="https://app.rocketseat.com.br/dashboard" alt="rocketseat" target="blank">Rocketseat</a>',
        stack: "Stack: HTML,CSS,JS",
        links: [
            {name: "github", url: "https://github.com/jcblank"},
            {name: "linkedin", url: "https://www.linkedin.com/in/jcarbr/"},
            {name: "facebook", url: "https://www.facebook.com/jcarlos.blank"},

        ]
    }

    return res.render("about", {about})
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.listen(5000, function() {
    console.log("Server is running")
})
