var http= require('http');

var servidor=http.createServer(function(peticion,respuesta){

    console.log("Peticion web");
    respuesta.writeHead(200, {'Content-type':'text/html'} );
    respuesta.write('Respuesta '+ peticion.url);

});

//iciamos el servidor web
servidor.listen(3000);
console.log("ejecutando servicio web");