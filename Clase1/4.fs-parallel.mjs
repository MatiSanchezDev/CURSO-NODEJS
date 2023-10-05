// En los modulos nativos que no tienen promesas usar lo siguiente
// const {promisify} = requiro('node:util')
// const readFilePromise = promisify(fs.readFile) // Al modulo fs uso la propiedad readFile(Leer un archivo)

import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("Primer Texto", text);
  console.log("Segundo Texto", text2);
});
