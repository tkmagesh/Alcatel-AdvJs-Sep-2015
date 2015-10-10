var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(connection){
    console.log("a new connection is established");

    connection.on("text", function(msg){
        for(var i=0; i<server.connections.length; i++){
            var con = server.connections[i];
            con.sendText(msg);
        }
    });

    connection.on("error", function(err){
        console.log("something went wrong");
    });
});

server.listen(9090);
console.log("socket server listening on port 9090");
