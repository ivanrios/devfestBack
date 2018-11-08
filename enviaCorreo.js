
'use strict';

module.exports.enviaCorreo = function(correo, callback){

	const nodemailer = require('nodemailer');

	nodemailer.createTestAccount((err, account) => {

	    let transporter = nodemailer.createTransport({
	        service: 'FastMail', 
		     auth: {
		         user: 'ivanrios@fastmail.com',
		         pass: 'e7krqv2yfu4qbwka'
		     }
	    });

	    let body = '<strong>New Contact!</strong>'
	    body += '<table>'
	    body += '<tr><td>Name</td><td>'+correo.nombre+'</td></tr>'
	    body += '<tr><td>Email</td><td>'+correo.correo+'</td></tr>'
	    body += '<tr><td>subject</td><td>'+correo.asunto+'</td></tr>'
	    body += '<tr><td>Message</td><td>'+correo.mensaje+'</td></tr>'
	    body += '</table>'

	    let mailOptions = {
		  to      : 'ivanrios.a@gmail.com',
		  from    : 'MKT Agency <'+correo.correo+'>',
		  subject : 'New Contact',
		  html    : body
	    };

	    transporter.sendMail(mailOptions, (error, info) => {
	        if (error) {
	            return console.log(error);
	        }
	        console.log('Correo enviado', info, mailOptions);
	        if (callback)
	        	callback(null,info)
	    });
	});


}
