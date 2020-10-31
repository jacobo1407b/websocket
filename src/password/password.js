//var crypto = require("crypto");
import crypto from "crypto";

var secret = "secretword";

function createHash(string) {
  return crypto.createHmac("SHA256", secret).update(string).digest("base64");
}

const useHash = (string, hashCompare) => {
  if (hashCompare === createHash(string)) {
    return true;
  } else {
    return false;
  }
};

export { useHash, createHash };
