//connections set mysql database to the server
//require database/ mysql
var mysql = require('mysql');

var source = {
	
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burger_db'
	},
	jawsDB: {
		port: 3306,
		host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'keqk2k7i10y8rz2w',
		password: 'qz6dygedxs71a8ou',
		database: 'u4wogneutc6rikrq'
	}

}
//set connection to a variable to be called
//createConnection function
var connection = mysql.createConnection( source.jawsDB );

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;