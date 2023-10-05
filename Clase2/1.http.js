const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res)=> {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (req.url === '/'){
        res.statusCode = 200 // OK 
        res.end('<h1>Bienvenido a mi Página Web</h1>')
    } else if (req.url === '/valheim.png') {
        fs.readFile('./valheim.png', (err, data)=> {
            if (err) {
                res.statusCode = 500
                res.end('<h1>Error: 500 Internal Server Error </h1>')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'img/jpeg')
                res.end(data)
            }
        })
    } else if (req.url === '/contacto') {
        res.statusCode = 200
        res.end('<h1>Contacto</h1>')
    } else {
        res.status = 404 // Not Found
        res.end('<h1>Error 404 Not Found</h1>')
    }
} 

const server = http.createServer(processRequest)





server.listen(desiredPort,()=>{
   console.log(`Server listen on port http://localhost:${desiredPort}`)
})
