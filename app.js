var http = require('http');

/* Criando o servidor */
var server = http.createServer(function (req, res){
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('<h1><strong>Hello World</strong></h1>')
	res.write('<br />');
	res.write('<h2>Aulas de NodeJS</h2>');
	res.end();

});

server.listen(3000, function(){
	console.log('Servidor rodando em http://localhost:3000/')
});