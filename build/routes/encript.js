"use strict";

var _express = _interopRequireDefault(require("express"));

var _consol = require("../encript/consol");

var _password = require("../password/password");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/encript", function (req, res) {
  var _req$body = req.body,
      text = _req$body.text,
      algoritm = _req$body.algoritm;

  try {
    (0, _consol.setAlgoritm)(algoritm);
    var result = (0, _consol.encript)(text);
    res.render("index/index", {
      result: result
    });
  } catch (error) {
    console.log(error);
    var _result = null;
    res.render("index/index", {
      result: _result
    });
  }
});
router.get("/", function (req, res) {
  var result = "";
  res.render("index/index", {
    result: result
  });
});
router.post("/desencri", function (req, res) {
  var response = (0, _consol.descri)(req.body.enc);
  console.log(response);
  res.render("index/des", {
    response: response
  });
});
router.get("/password", function (req, res) {
  res.render("password/index");
});
router.post("/hash", function (req, res) {
  var createhash1 = (0, _password.createHash)(req.body.password);
  res.render("password/index", {
    createhash1: createhash1
  });
});
router.post("/ver", function (req, res) {
  var _req$body2 = req.body,
      password = _req$body2.password,
      hash = _req$body2.hash;
  var response = (0, _password.useHash)(password, hash);
  var createhash1 = true;
  res.render("password/index", {
    response: response,
    createhash1: createhash1
  });
});
module.exports = router; //export default router;