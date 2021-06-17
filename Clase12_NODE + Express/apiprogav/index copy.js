// npm init -y (yes para que de si a todo)


// dependenvia dev
// npm i -D nodemon

// para ejecutar nodemon, metemos un dev en scrips.
// npm run dev


const http = require('http');

const PORT = 3000;

// recibe un callback
const app = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("<h1> Hola mundo</h1>");
    res.end();

})

app.listen(PORT);

console.log("Escuchando en el puerto: " + PORT);

