const http = require('node:http')
const dittoJSON = require('./pokemons/ditto.json')

const processRequest = (req, res) => {
    const {method, url} = req

    switch (method){
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.statusCode = 404
                    res.setHeader('Content-type', 'text/html; charset=urf-8')
                    return res.end('<h1>404 Not Found</h1>')
        }

        case 'POST':
            switch (url) {
                case '/pokemon':
                    let body = ""

                    // escuchar el evento data
                    req.on('data', chunk =>{
                        body += chunk.toString()
                    })

                    req.on('end', () => {
                        const data = JSON.parse(body)
                        //Acá tambien se podría llamar a una Base de datos para guardar la info
                        res.writeHead(201, {'Content-Type': 'application/json'})
                        data.timestamp = Date.now()
                        res.end(JSON.stringify(data))
                    })

                    break
                
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/plain; charset=urf-8')
                    return res.end('404 Not Found')
            }      
    }


}

const server = http.createServer(processRequest)

server.listen(1234, ()=> {
    console.log('Server En linea on port http://localhost:1234')
})