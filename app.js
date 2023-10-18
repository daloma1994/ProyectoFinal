const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/inicio.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/contacto.html');
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/proyectos.html');
  });  


app.use(express.static(__dirname + '/public'));



app.listen(port, () => {
  console.log(`Servidor web en http://localhost:${port}`);
});
