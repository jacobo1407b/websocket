var stdin = process.openStdin();
const bcrypt = require("./password");

/*console.log("Ingresa un string");
stdin.addListener("data", function (d) {
  let resp = bcrypt.createHash(d.toString().trim());
  console.log(resp);
});*/

/*console.log("ingresa el hash");
stdin.addListener("data", function (d) {
  console.log(d.toString().trim());
});*/

console.log("1:generar hash  2: verificar password");
stdin.addListener("data", function (d) {
  var opcion = parseInt(d.toString().trim(), 10);

  switch (opcion) {
    case 1:
      stdin.addListener("data", function (d) {
        let resp = bcrypt.createHash(d.toString().trim());
        console.log(`hash: ${resp}`);
      });
      break;
    case 2:
      console.log("ingresa el string");
      stdin.addListener("data", function (d) {
        var string = d.toString().trim();
        stdin.addListener("data", function (t) {
          var compare = t.toString().trim();
          let resp = bcrypt.useHash(string, compare);
          console.log(resp);
        });
      });

      break;

    default:
      console.error("No ingreso una opcion valida");
      break;
  }
});
