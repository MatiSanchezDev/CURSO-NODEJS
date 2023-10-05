const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res)=> {
    console.log('Request Received')
    res.end('Hola mundo')
} )

findAvailablePort(desiredPort).then(port => {
    server.listen(port,()=>{
        console.log(`Server listen on port http://localhost:${port}`)
    })
})

/* // Se utiliza el 0 para buscar un puerto libre y no eliminar o pisar puertos
server.listen(0,()=>{
    console.log(`Server listen on http://localhost:${server.address().port}`)// Es para que te diga el puerto que está utilizando
}) */