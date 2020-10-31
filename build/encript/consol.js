"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAlgoritm = exports.descri = exports.encript = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//var crypto = require("crypto");
var _algorit = "sha256";

var key = _crypto["default"].createHash(_algorit).digest();

var i = new Buffer(_crypto["default"].randomBytes(8));
var iv = i.toString("hex");

var setAlgoritm = function setAlgoritm(algor) {
  _algorit = algor ? algor : "sha256";
};
/*const setIv = (secret) => {
  iv = secret ? secret : "secret";
};*/


exports.setAlgoritm = setAlgoritm;

var encript = function encript(string) {
  var cipher = _crypto["default"].createCipheriv("aes-256-cbc", key, iv);

  cipher.update(string);
  return cipher["final"]("base64");
};

exports.encript = encript;

var descri = function descri(wordEncript) {
  var decipher = _crypto["default"].createDecipheriv("aes-256-cbc", key, iv);

  decipher.update(wordEncript, "base64");
  return decipher["final"]();
};

exports.descri = descri;