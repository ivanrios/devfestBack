'use strict';

exports.correo = function (req, res) {

    const correo = req.body.email || req.query.email;
    if (correo){
        const enviaCorreo = require('./enviaCorreo');

        let correo = { 
            nombre: req.body.name, 
            correo: req.body.email, 
            asunto: req.body.subject, 
            mensaje: req.body.message }

        enviaCorreo.enviaCorreo(correo, function(data){
            res.send("Ok")
        })

    }
    else{
        res.send(`Datos incompletos`)
    }
}

