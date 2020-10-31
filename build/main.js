"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//var express = require('express');
var app = (0, _express["default"])();

var io = require("socket.io")(server);

var messages = [{
  id: 1,
  text: "Hola soy un mensaje",
  author: "Carlos Azaustre"
}];

_http["default"].Server(app);

app.use(_express["default"]["static"]("public"));
app.get("/hello", function (req, res) {
  res.status(200).send("Hello World!");
});
io.on("connection", function (socket) {
  console.log("Alguien se ha conectado con Sockets");
  socket.emit("messages", messages);
  socket.on("new-message", function (data) {
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
});
server.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});