const counter = require('./counter')

const app = require('express')()
// const app = express.express()
const port = 3000


app.get('/', (req, res) => {

    res.send(`
        <h1>Home Page</h1>
        <a href="/about">to About</a>
        <p>Count of visit page: ${counter.updateCounter('home')}</p>
        `)

})

app.get('/about', (req, res) => {

    res.send(`
        <h1>About Page</h1>
        <a href="/">to Home</a>
        <p>Count of visit page: ${counter.updateCounter('about')}</p>
        `)

})

app.listen(port, () => {
    console.log(`Server running: 127.0.0.1:${port}`)
})