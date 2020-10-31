import express from "express";
import exphbs from "express-handlebars";
import path from "path";
import methodOverride from "method-override";
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(require("./routes/encript.js"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log("listen on port", app.get("port"));
  console.log(`open browser on http://localhost:${app.get("port")}`);
});
