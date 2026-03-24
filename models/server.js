const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath='/api/usuarios';

        //Middlewares
        this.middlewares();
        
        //Rutas de mi aplicacion


        this.routes();

    }

    middlewares(){
        // Adds headers: Access-Control-Allow-Origin: *
        this.app.use(cors())

        // Lectura y Parseo de body
        this.app.use( express.json());


        //Directorio Publico
        this.app.use( express.static('public'));
    }

    // define las rutas
    routes(){
       //Se puede aplicar un Mider cuando pase una solicitud
       // por esta ruta, aqui lo voy a cargar
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    } 

    listen() {
        this.app.listen(this.port, () => {
        console.log('El servidor se está ejecutando en http://localhost:', this.port);
        });
    }        

}

module.exports = Server
