"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _path = _interopRequireDefault(require("path"));

var _methodOverride = _interopRequireDefault(require("method-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set("port", process.env.PORT || 3000);
app.set("views", _path["default"].join(__dirname, "views"));
app.engine(".hbs", (0, _expressHandlebars["default"])({
  defaultLayout: "main",
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  extname: ".hbs"
}));
app.set("view engine", ".hbs");
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _methodOverride["default"])("_method"));
app.use(require("./routes/encript.js"));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
app.listen(app.get("port"), function () {
  console.log("listen on port", app.get("port"));
  console.log("open browser on http://localhost:".concat(app.get("port")));
});