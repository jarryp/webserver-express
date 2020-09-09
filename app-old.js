const http = require('http')

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
            //res.write('Hola Mundo');

        let salida = {
            nombre: 'Jarry Palacios',
            edad: '37',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(3000);

console.log('Escuchando puerto 3000');