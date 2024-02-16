const express = require("express");
const app = express();
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs')

app.use(cors( ));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use(express.json())
// Configuracion de Swagger

const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml' , 'utf-8'));
app.use('/api-docs' , swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configuración de Rutas

const dataRoutes = require('./routes/dataRoutes');
app.use('/', dataRoutes);

// Puerto en el que el servidor escuchará las peticiones
const puerto = 3000

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});