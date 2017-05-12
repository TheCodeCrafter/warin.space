/// Server.js

/*
 * @author TheCodeCrafter
*/

// Import all required packages.
var http = require('http');
var path = require('path');

var socketio = require('socket.io');
var express = require('express');

// Create Server Packets and Sockets
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

// Send our client
router.use(express.static(path.resolve('..', 'client')));
var players = [];
var stations = [];
var planets = [];

var world;
world.height = 4000;
world.width = 4000;

// Define all events, etc.
io.on('connection', function (socket) {
  console.log("New connection!");
  
  // Go/No Go Listener
  socket.on('ready', onReady);
  
  // Input Listener
  socket.on('input', onInput);
});

function onReady() {
  
}

function onInput(data) {
  var inputPlayer = playerById(this.id);
  
  // Player not found
  if(!inputPlayer) {
    console.log("Player not found! ID: " + this.id);
    return;
  }
  
}

function update() {
  updateWorld();
  sendData();
}

// Start the Server!
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Warin.Space Server Listening At", addr.address + ":" + addr.port);
});


// Find player by ID
function playerById (id) {
  var i;
  for (i = 0; i < players.length; i++) {
    if (players[i].id === id) {
      return players[i];
    }
  }

  return false;
}
