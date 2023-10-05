// En los modulos nativos que no tienen promesas usar lo siguiente
// const {promisify} = requiro('node:util')
// const readFilePromise = promisify(fs.readFile) // Al modulo fs uso la propiedad readFile(Leer un archivo)

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo ...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Primer texto", text);
});

console.log("Hacer mientras lee el archivo ...");

console.log("Leyendo el segundo archivo ...");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo texto", text);
});
