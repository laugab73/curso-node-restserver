const{ response, request} = require('express');

const usuariosGet = (req = request,res = response) =>{
   const { q , nombre ='No name', apikey} = req.query;

   res.json({                 
       msg: 'get API-Controlador',
       q,
       nombre, 
       apikey
   });
};

const usuariosPost = (req,res = response) =>{

   const {nombre, edad } = req.body;
   // tambien se puede desestructurar
   

   res.json({                 
       msg: 'Post API-Controlador',
       nombre, 
       edad
   });
};

const usuariosPut = (req,res = response) =>{
   const id  = req.params.id;

   res.json({                 
       msg: 'Put API-Controlador',
       id
   });
};

const usuariosPath= (req,res = response) =>{
   res.json({                 
       msg: 'Path API-Controlador'
   });
};

const usuariosDelete= (req,res = response) =>{
   res.json({                 
       msg: 'Delete API-Controlador'
   });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete
}