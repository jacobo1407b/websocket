"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHash = createHash;
exports.useHash = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//var crypto = require("crypto");
var secret = "secretword";

function createHash(string) {
  return _crypto["default"].createHmac("SHA256", secret).update(string).digest("base64");
}

var useHash = function useHash(string, hashCompare) {
  if (hashCompare === createHash(string)) {
    return true;
  } else {
    return false;
  }
};

exports.useHash = useHash;