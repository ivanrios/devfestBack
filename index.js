'use strict';

exports.suscriptor = function (req, res) {

    const email = req.body.email || req.query.email;
    if (email){
        const Datastore = require('@google-cloud/datastore');

        const projectId = 'devfestcancun'
        const datastore = new Datastore({
            projectId: projectId,
            keyFilename: './keyfile.json'
        });

        const kind = 'suscriptor';
        const name = email;
        const key = datastore.key([kind, name]);

        const suscriptor = {
            key: key,
            data: [{
                    name: 'email',
                    value : email
                },
                {
                    name :'fecha',
                    value : new Date().toJSON()
                }
            ],
        };

        datastore
            .save(suscriptor)
            .then(() => {
                console.log(`Saved ${suscriptor.key.name}: ${suscriptor.data.email}`);
                res.send(`Saved ${suscriptor.key.name}: ${suscriptor.data.email}`)
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }
    else{
        res.send(`Datos incompletos`)
    }
}

