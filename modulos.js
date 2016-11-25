var http = require('http');
var arquivo = require('fs');

var server= http.createServer(function (req, res){
	res.writeHead(200, {'Content-type' : 'text/html'});

	arquivo.readFile(__dirname + '/index.html', function(err, html){
		if(err){
			res.write('Arquivo index.html não encontrado.');
		}else{
			res.write(html);
		}
		res.end()
	});
});

server.listen(3000, function(){
	console.log('Servidor rodando em localhost:3000')

});