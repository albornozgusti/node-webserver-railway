require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT

const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Titulo del home enviado como argumento',
        name: 'Gustavo'
    });
});

app.get('/hola-mundo', function(req, res){
    res.send('Hola mundo de la ruta alternativa')
});

app.get('*', function(req, res){
    res.sendFile(__dirname +'/public/404.html')
});

app.listen(PORT, () => console.log(`Escuchando del puerto ${PORT}`)); 