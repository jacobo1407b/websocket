//var crypto = require("crypto");
import crypto from "crypto";
var _algorit = "sha256";
var key = crypto.createHash(_algorit).digest();
var i = new Buffer(crypto.randomBytes(8));
var iv = i.toString("hex");

const setAlgoritm = (algor) => {
  _algorit = algor ? algor : "sha256";
};
/*const setIv = (secret) => {
  iv = secret ? secret : "secret";
};*/
const encript = (string) => {
  var cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  cipher.update(string);
  return cipher.final("base64");
};

const descri = (wordEncript) => {
  var decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  decipher.update(wordEncript, "base64");
  return decipher.final();
};

export { encript, descri, setAlgoritm };
