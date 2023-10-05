const express = require('express')
const ditto = require('./pokemons/ditto.json')

const app = express()

const PORT = process.env.PORT ?? 1234


// Los middleware tienen 3 parametros y no hay que olvidarse del next()
app.use((req, res, next) => {
    console.log('Pasó por mi primer middleware')
    next()
})

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

app.post('/pokemon', (req,res)=> {
    let body = ""

    // escuchar el evento data
    req.on('data', chunk =>{
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        res.status(201).json(data)
    })
})


// El 404 siempre va ultimo
app.use((req, res)=> { // .use Es como un * toma cualquier metodo
    res.status(404).send('<h1>404 - Not Found</h1>')
})
app.listen(PORT, ()=> {
    console.log(`server listening on port http://localhost:${PORT}`)
})