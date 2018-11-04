exports.hola = function (req, res) {
    console.log(req.body, req.params, req.query, res.headers)
    res.send('¡Hola mundo!');
}

exports.adios = function (req, res) {
    console.log(req.body, req.params, req.query, res.headers)
    res.send('Hasta la vista!');
}

