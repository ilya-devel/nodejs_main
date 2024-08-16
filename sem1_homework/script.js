const http = require('http')

const counter = {
    home: 0,
    about: 0,
    error: 0
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.end(
            `<a href="/about">About</a>
            <p>Эту страницу открыли ${counter.home += 1} раз</p>`
        )
    }
    else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.end(
            `<a href="/">Home</a>
            <p>Эту страницу открыли ${counter.about += 1} раз</p>`
        )
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.end(`<h1>404Error</h1>
            <p>Эту страницу открыли ${counter.error += 1} раз</p>`)
    }
})

const port = 3000

server.listen(port, () => {
    console.log(`Server running: 127.0.0.1:${port}`)
})