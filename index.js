'use strict';

exports.correo = function (req, res) {

    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    //respond to CORS preflight requests
    if (req.method == 'OPTIONS') {
        res.status(204).send('');
    }
    
    
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

